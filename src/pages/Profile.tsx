import '@aws-amplify/ui-react/styles.css'

import { DataStore } from '@aws-amplify/datastore'
import { AmplifyUser } from '@aws-amplify/ui'
import {
  WithAuthenticatorProps,
  withAuthenticator,
} from '@aws-amplify/ui-react'
import { Amplify } from 'aws-amplify'

import awsExports from '../aws-exports'
import { GameStatistics } from '../models'
import { GameStats } from './../lib/localStorage'
import { loadStats } from './../lib/stats'

Amplify.configure(awsExports)

interface Props extends WithAuthenticatorProps {
  isPassedToWithAuthenticator: boolean
}
async function saveStats(user: AmplifyUser | undefined) {
  console.log(user)
  await DataStore.save(
    new GameStatistics({
      winDistribution: 1,
      gamesFailed: 4,
      currentStreak: 8,
      bestStreak: 10,
      totalGames: 30,
      successRate: 30,
      userID: user?.attributes.sub,
    })
  )
}
function Profile({ signOut, user }: Props) {
  console.log(user)
  return (
    <>
      <h1>Hello {user?.attributes?.preferred_username}</h1>
      <button onClick={() => saveStats(user)}>Save your game stats!</button>
      <button onClick={signOut}>Sign out</button>
    </>
  )
}
export default withAuthenticator(Profile)
