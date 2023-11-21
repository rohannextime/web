import { User as FirebaseUser, UserMetadata } from 'firebase/auth'

export interface Metadata extends UserMetadata {
  lastDiscoverAt: string
}

export interface WebProfileInfo {
  bio: string
  dateOfBirth: Date
  displayName: string | null
  firstName: string
  idWhoInvited: string | null
  lastName: string
  metadata: Metadata
  photoCount: number
  photoURL: string | null
  photos: Array<string>
  username: string | undefined
  myInvitationId: string
  guests: Array<string> | null
}

export interface User extends FirebaseUser, WebProfileInfo {
  accessToken: string
  hasSentEmail: boolean
  isProfileVerified: boolean
  uid: string
}
