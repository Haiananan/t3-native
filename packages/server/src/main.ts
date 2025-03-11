import cors from '@fastify/cors'
import fastifyHelmet from '@fastify/helmet'
import ws from '@fastify/websocket'
import {
  FastifyTRPCPluginOptions,
  fastifyTRPCPlugin,
} from '@trpc/server/adapters/fastify'
import fastify from 'fastify'

import { createContext } from './lib/trpc'
import { type AppRouter, appRouter } from './router'

const server = fastify({
  logger: {
    transport: {
      target: '@fastify/one-line-logger',
    },
  },
})

server.register(ws)
server.register(cors)
server.register(fastifyHelmet)
server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  useWSS: true,
  keepAlive: {
    enabled: true,
    // server ping message interval in milliseconds
    pingMs: 30000,
    // connection is terminated if pong message is not received in this many milliseconds
    pongWaitMs: 5000,
  },
  trpcOptions: {
    router: appRouter,
    createContext,
    onError({ path, error }) {
      // report to error monitoring
      console.error(`Error in tRPC handler on path '${path}':`, error)
    },
  } satisfies FastifyTRPCPluginOptions<AppRouter>['trpcOptions'],
})

server.get('/', function (req, res) {
  return 'hello'
})

const start = async () => {
  try {
    const PORT = Number(process.env.PORT) || 3000
    await server.listen({ port: PORT, host: '0.0.0.0' })
    console.log(`🚀 Server running on Port: ${PORT}`)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
