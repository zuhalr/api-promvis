const fakultas = require('./fakultas')

const getAllFakultasHandler = () => ({
  status: 'success',
  data: {
    fakultas,
  },
})

module.exports = {
  getAllFakultasHandler,
}
