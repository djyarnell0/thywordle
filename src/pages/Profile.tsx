import '@aws-amplify/ui-react/styles.css'

import {
  WithAuthenticatorProps,
  withAuthenticator,
} from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
import { Amplify } from 'aws-amplify'

import awsExports from '../aws-exports'

Amplify.configure(awsExports)

interface Props extends WithAuthenticatorProps {
  isPassedToWithAuthenticator: boolean
}

function Profile({ isPassedToWithAuthenticator, signOut, user }: Props) {
  if (!isPassedToWithAuthenticator) {
    throw new Error(`isPassedToWithAuthenticator was not provided`)
  }

  return (
    <>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  )
}

export default withAuthenticator(Profile)

export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  }
}
