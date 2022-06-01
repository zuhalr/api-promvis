const { getAllFakultasHandler } = require('./handler')

const routes = [
  {
    method: 'GET',
    path: '/fakultas',
    handler: getAllFakultasHandler,
  },
]

module.exports = routes
