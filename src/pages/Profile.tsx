import '@aws-amplify/ui-react/styles.css'

import { DataStore } from '@aws-amplify/datastore'
import { AmplifyUser } from '@aws-amplify/ui'
import {
  WithAuthenticatorProps,
  withAuthenticator,
} from '@aws-amplify/ui-react'
import { Amplify } from 'aws-amplify'
import { Stats } from 'fs'

import awsExports from '../aws-exports'
import { GameStatistics } from '../models'
import { GameStats } from './../lib/localStorage'
import { loadStats } from './../lib/stats'

Amplify.configure(awsExports)

interface Props extends WithAuthenticatorProps {
  isPassedToWithAuthenticator: boolean
}
var averageGuessPerGame(stats: GameStats) => {
  
  averageGuessPerGame = 1*stats.winDistribution[0] + 1*stats.winDistribution[1] + 1*stats.winDistribution[2] + 1*stats.winDistribution[3] + 1*stats.winDistribution[4] + 1*stats.winDistribution[5]   
}
async function saveStats(user: AmplifyUser | undefined, stats: GameStats, averageGuessPerGame: number) {
  console.log(user)
  const statistics = loadStats()
  await DataStore.save(
    new GameStatistics({
      winDistribution: averageGuessPerGame,
      gamesFailed: stats.gamesFailed,
      currentStreak: stats.currentStreak,
      bestStreak: stats.bestStreak,
      totalGames: stats.totalGames,
      successRate: stats.successRate,
      userID: user?.attributes.sub,
    })
  )
}
function Profile({ signOut, user }: Props) {
  console.log(user)
  return (
    <>
      <h1>Hello {user?.attributes?.preferred_username}</h1>
      <button onClick={() => saveStats(user, loadStats())}>
        Save your game stats!
      </button>
      <button onClick={signOut}>Sign out</button>
    </>
  )
}
export default withAuthenticator(Profile)
