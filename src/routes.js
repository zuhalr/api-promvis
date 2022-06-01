const { getAllFakultasHandler } = require('./handler')

const routes = [
  {
    method: 'GET',
    path: '/fakultas',
    handler: getAllFakultasHandler,
  },
  {
    method: 'GET',
    path: '/img/{image*}',
    handler: {
      directory: {
        path: 'public/img',
        listing: true,
      },
    },
  },
]

module.exports = routes
