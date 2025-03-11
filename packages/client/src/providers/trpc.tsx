import { trpc } from '@/utils/trpc'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  createTRPCClient,
  unstable_httpBatchStreamLink as httpBatchStreamLink,
  loggerLink,
} from '@trpc/client'
import { PropsWithChildren, useState } from 'react'
import SuperJSON from 'superjson'

export default function TRPCProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      }),
  )
  const [trpcClient] = useState(() => {
    return trpc.createClient({
      links: [
        ...(import.meta.env.DEV ? [loggerLink()] : []),
        httpBatchStreamLink({
          url: import.meta.env.VITE_API_URL as string,
          transformer: SuperJSON,
        }),
      ],
    })
  })

  return (
    <trpc.Provider queryClient={queryClient} client={trpcClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
