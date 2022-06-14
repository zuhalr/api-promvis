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
      matkul : "PROJECT KEAHLIAN",
      semester : "Genap 2020"
      },{
        matkul : "SISTEM PENDUKUNG KEPUTUSAN",
        semester : "Genap 2020"
      }
    ],
    riwayat_prestasi:[
      {
        nama: "10 Besar Dosen Terbaik FPMIPA UPI",
        tahun: "2020"
      },
      {
        nama: "Pembimbing Finalis Gemastik ICT Scientific Paper",
        tahun: "2021"
      },
    ]
  },
]

module.exports = dosen
