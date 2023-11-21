// data/firebase/users.ts
import { admin, db } from '../firebaseAdmin'
import { User } from './User'

export async function verifyIdToken(accessToken: string) {
  return admin
    .auth()
    .verifyIdToken(accessToken)
    .then(decodedToken => decodedToken)
    .catch(error => error)
}

export function documentDataToUser(
  data: admin.firestore.DocumentData | undefined
): User | undefined {
  if (data) {
    return data as User
  }
  return undefined
}

export async function createUser(
  accessToken: string,
  newUser: User
): Promise<string> {
  const decodedToken = await verifyIdToken(accessToken)
  await db.collection('User').doc(decodedToken.uid).set(newUser)
  return 'Usuário criado com sucesso'
}

export async function getAllUsers(): Promise<User[]> {
  const entriesUsers = await db.collection('User').get()
  const entriesDataUsers = entriesUsers.docs.map(entry => entry.data() as User)
  return entriesDataUsers
}

export async function getRefUser(
  accessToken: string
): Promise<admin.firestore.DocumentReference> {
  const decodedToken = await verifyIdToken(accessToken)
  const userRef = db.collection('User').doc(decodedToken.uid)
  return userRef
}

export async function getWebProfileInfo(uid: string): Promise<User> {
  let foundUser: User | undefined

  const userDocRef = db.collection('User').doc(uid)
  const doc = await userDocRef.get()

  if (doc.exists) {
    foundUser = doc.data() as User
  }

  if (!foundUser) {
    const userQuerySnapshot = await db
      .collection('User')
      .where('username', '==', uid)
      .limit(1)
      .get()

    if (!userQuerySnapshot.empty) {
      foundUser = userQuerySnapshot.docs[0].data() as User
    }
  }

  if (!foundUser) {
    throw new Error(`O usuário não foi encontrado`)
  }

  return foundUser
}

export async function getVerifiedUsers(): Promise<User[]> {
  const entriesVerifiedUsers = await db
    .collection('User')
    .where('isProfileVerified', '==', true)
    .get()
  const verifiedUsers = entriesVerifiedUsers.docs.map(
    entry => entry.data() as User
  )
  return verifiedUsers
}

export async function getUser(accessToken: string): Promise<User> {
  const decodedToken = await verifyIdToken(accessToken)
  const userRef = db.collection('User').doc(decodedToken.uid)
  const userDoc = await userRef.get()
  const userData = userDoc.data()

  if (!userData) {
    throw new Error('Não foi possível obter as informações do usuário.')
  }

  return documentDataToUser(userData) as User
}

export async function isUsernameAvailability(
  username: string
): Promise<boolean> {
  const userRef = db.collection('User')
  const snapshot = await userRef.where('username', '==', username).get()
  if (snapshot.empty) {
    return true
  }
  return false
}

export async function updateUser(
  accessToken: string,
  newUser: Partial<User>
): Promise<string> {
  const userRef = await getRefUser(accessToken)
  if (newUser.username) {
    const isUserAvailability = await isUsernameAvailability(newUser.username)
    if (!isUserAvailability) {
      throw new Error(
        'O nome de usuário já está em uso. Por favor, escolha um nome de usuário diferente!'
      )
    }
  }
  await userRef.update(newUser)
  return newUser.username
    ? 'Seu nome de usuário foi atualizado com sucesso'
    : 'Usuário atualizado com sucesso'
}

export async function deleteUser(accessToken: string): Promise<string> {
  const userRef = await getRefUser(accessToken)
  await userRef.delete()
  return 'Usuário deletado com sucesso'
}
