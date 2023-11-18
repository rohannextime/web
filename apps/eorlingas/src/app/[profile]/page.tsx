import { Text } from '@nextime-ui/react'

interface ProfileProps {
  params: {
    profile: string
  }
}
export default function Profile({ params }: ProfileProps) {
  const { profile } = params
  console.log(profile)
  return <Text>{profile}</Text>
}
