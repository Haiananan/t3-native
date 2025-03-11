import {
  createTRPCClient,
  createTRPCReact,
  unstable_httpBatchStreamLink,
} from '@trpc/react-query'
import SuperJSON from 'superjson'

import type { AppRouter } from '../../../server/src'

export const trpc = createTRPCReact<AppRouter>()

export const api = createTRPCClient<AppRouter>({
  links: [
    unstable_httpBatchStreamLink({
      url: import.meta.env.VITE_API_URL as string,
      transformer: SuperJSON,
    }),
  ],
})
