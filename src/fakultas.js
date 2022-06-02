//base image path
const baseImagePath = './public/images/fakultas/'

const fakultas = [
  {
    slug: 'bumi-siliwangi',
    name: 'Bumi Siliwangi',
    data: [
      {
        slug: 'fpmipa',
        name: 'FPMIPA',
        url_image: 'http://165.22.109.98:9999/img/FPMIPA.jpg',
        full_name: 'Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam',
        gallery: [
          'http://165.22.109.98:9999/img/FPMIPA.jpg',
          'http://165.22.109.98:9999/img/FPMIPA.jpg',
          'http://165.22.109.98:9999/img/FPMIPA.jpg',
          'http://165.22.109.98:9999/img/FPMIPA.jpg',
          'http://165.22.109.98:9999/img/FPMIPA.jpg',
          'http://165.22.109.98:9999/img/FPMIPA.jpg',
        ],
        ratio: '1:30',
        avg_study_time: '3.5',
        prodi: [
          {
            name: 'Pendidikan Matematika',
            jenjang: 'S1',
            akreditasi: 'A',
            url_image: 'http://165.22.109.98:9999/img/FPMIPA.jpg',
            slug: 's1-pendidikan-matematika',
          },
          {
            name: 'Pendidikan Biologi',
            jenjang: 'S1',
            akreditasi: 'A',
            url_image: 'http://165.22.109.98:9999/img/FPMIPA.jpg',
            slug: 's1-pendidikan-biologi',
          },
          {
            name: 'Pendidikan Kimia',
            jenjang: 'S1',
            akreditasi: 'A',
            url_image: 'http://165.22.109.98:9999/img/FPMIPA.jpg',
            slug: 's1-pendidikan-kimia',
          },
          {
            name: 'Pendidikan Fisika',
            jenjang: 'S1',
            akreditasi: 'A',
            url_image: 'http://165.22.109.98:9999/img/FPMIPA.jpg',
            slug: 's1-pendidikan-fisika',
          },
          {
            name: 'Pendidikan Ilmu Komputer',
            jenjang: 'S1',
            akreditasi: 'A',
            url_image: 'http://165.22.109.98:9999/img/FPMIPA.jpg',
            slug: 's1-pendidikan-ilmu-komputer',
          },
          {
            name: 'International Program on Science Education',
            jenjang: 'S1',
            akreditasi: 'A',
            url_image: 'http://165.22.109.98:9999/img/FPMIPA.jpg',
            slug: 's1-international-program-on-science-education',
          },
        ],
      },
      {
        slug: 'fip',
        name: 'FIP',
        url_image: 'images/fakultas/FIP.png',
        full_name: 'Fakultas Ilmu Pendidikan',
        gallery: [
          'http://165.22.109.98:9999/img/FIP.png',
          'http://165.22.109.98:9999/img/FIP.png',
          'http://165.22.109.98:9999/img/FIP.png',
          'http://165.22.109.98:9999/img/FIP.png',
          'http://165.22.109.98:9999/img/FIP.png',
          'http://165.22.109.98:9999/img/FIP.png',
        ],
        ratio: '1:30',
        avg_study_time: '3.5',
        prodi: [
          {
            name: 'Pendidikan Matematika',
            jenjang: 'S1',
            akreditasi: 'A',
            url_image: 'http://165.22.109.98:9999/img/FIP.png',
            slug: 's1-pendidikan-matematika',
          },
          {
            name: 'Pendidikan Biologi',
            jenjang: 'S1',
            akreditasi: 'A',
            url_image: 'http://165.22.109.98:9999/img/FIP.png',
            slug: 's1-pendidikan-biologi',
          },
          {
            name: 'Pendidikan Kimia',
            jenjang: 'S1',
            akreditasi: 'A',
            url_image: 'http://165.22.109.98:9999/img/FIP.png',
            slug: 's1-pendidikan-kimia',
          },
          {
            name: 'Pendidikan Fisika',
            jenjang: 'S1',
            akreditasi: 'A',
            url_image: 'http://165.22.109.98:9999/img/FIP.png',
            slug: 's1-pendidikan-fisika',
          },
          {
            name: 'Pendidikan Ilmu Komputer',
            jenjang: 'S1',
            akreditasi: 'A',
            url_image: 'http://165.22.109.98:9999/img/FIP.png',
            slug: 's1-pendidikan-ilmu-komputer',
          },
          {
            name: 'International Program on Science Education',
            jenjang: 'S1',
            akreditasi: 'A',
            url_image: 'http://165.22.109.98:9999/img/FIP.png',
            slug: 's1-international-program-on-science-education',
          },
        ],
      },
      { name: 'FPIPS', url_image: 'http://165.22.109.98:9999/img/FPIPS.jpg' },
      { name: 'FPBS', url_image: 'http://165.22.109.98:9999/img/FPBS.jpg' },
      { name: 'FPSD', url_image: 'http://165.22.109.98:9999/img/FPSD.jpg' },
      { name: 'FPTK', url_image: 'http://165.22.109.98:9999/img/FPTK.jpg' },
      { name: 'FPOK', url_image: 'http://165.22.109.98:9999/img/FPOK.jpg' },
      { name: 'FPEB', url_image: 'http://165.22.109.98:9999/img/FPEB.jpeg' },
    ],
  },
  {
    slug: 'kampus-daerah',
    name: 'Kampus Daerah',
    data: [
      {
        name: 'Kampus Daerah Tasikmalaya',
        url_image: 'http://165.22.109.98:9999/img/Tasikmalaya.jpg',
      },
      {
        name: 'Kampus Daerah Cibiru',
        url_image: 'http://165.22.109.98:9999/img/Cibiru.jpeg',
      },
      {
        name: 'Kampus Daerah Sumedang',
        url_image: 'http://165.22.109.98:9999/img/Sumedang.jpg',
      },
      {
        name: 'Kampus Daerah Purwakarta',
        url_image: 'http://165.22.109.98:9999/img/Purwakarta.jpg',
      },
      {
        name: 'Kampus Daerah Serang',
        url_image: 'http://165.22.109.98:9999/img/Serang.jpg',
      },
    ],
  },
]

module.exports = fakultas
