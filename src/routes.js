const { getFakultasHandler } = require('./handler')

const routes = [
  {
    method: 'GET',
    path: '/fakultas',
    handler: getFakultas,
  },
]

module.exports = routes
