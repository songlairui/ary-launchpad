import * as T from './types'
import apolloProvider from '../apolloProvider'
import LAUNCH_FIRST from '../graphql/LaunchFirst.gql'

const apolloClient = apolloProvider.defaultClient

export default {
  async getLaunchFirst({ commit }) {
    const { data } = await apolloClient.query({
      query: LAUNCH_FIRST
    })
    commit(T.SET_LAUNCH_FIRST, data)
  }
}
