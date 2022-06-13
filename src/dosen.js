//base image path
const baseImagePath = './public/images/dosen/'

const dosen = [
  {
    nama: "Rasim",
    jabatan: "lektor",
    riwayat_pendidikan:[
      {
        univ: "STMIK IM",
        jenjang :"S1"
      },{
        univ: "ITB",
        jenjang :"S2"
      },{
        univ: "ITB",
        jenjang :"S3"
      },
    ],
    riwayat_pengajaran:[
      {
      matkul : "nama matkul",
      semester : "Genap 2004"
      },{
        matkul : "nama matkul",
        semester : "Genap 2004"
      }
    ],
    riwayat_prestasi:[
      {
        nama: "nama prestasi",
        tahun: "tahun prestasi"
      },
      {
        nama: "nama prestasi",
        tahun: "tahun prestasi"
      },
    ]
  },
]

module.exports = dosen
