const { getFakultasHandler } = require('./handler')

const routes = [
  {
    method: 'GET',
    path: '/fakultas',
    handler: getFakultasHandler,
  },
]

module.exports = routes
