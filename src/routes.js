const { getAllFakultasHandler, getDetailFakultasHandler,getAllProdiHandler,getAllFasilitasHandler,getAllDosenHandler } = require('./handler')

const routes = [
  {
    method: 'GET',
    path: '/fakultas',
    handler: getAllFakultasHandler,
  },
  {
    method: 'GET',
    path: '/prodi',
    handler: getAllProdiHandler,
  },
  {
    method: 'GET',
    path: '/fasilitas',
    handler: getAllFasilitasHandler,
  },
  {
    method: 'GET',
    path: '/dosen',
    handler: getAllDosenHandler,
  },
  {
    method: 'GET',
    path: '/fakultas/{slug}',
    handler: getDetailFakultasHandler,
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
