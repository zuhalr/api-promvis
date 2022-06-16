const Hapi = require('@hapi/hapi')
const routes = require('./routes')
const Path = require('path')
const init = async () => {
  const server = Hapi.server({
    port: 9998,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '165.22.109.98',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  })

  await server.register(require('@hapi/inert'))
  server.route(routes)
  await server.start()
  console.log(`Server berjalan pada ${server.info.uri}`)
}

init()
