//base image path
const baseImagePath = './public/images/fakultas/'

const fakultas = [
  {
    slug: 'fpmipa',
    name: 'FPMIPA',
    url_image: 'localhost:3000/img/FPMIPA.jpg',
    full_name: 'Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam',
    gallery: [
      'localhost:3000/img/FPMIPA.jpg',
      'localhost:3000/img/FPMIPA.jpg',
      'localhost:3000/img/FPMIPA.jpg',
      'localhost:3000/img/FPMIPA.jpg',
      'localhost:3000/img/FPMIPA.jpg',
      'localhost:3000/img/FPMIPA.jpg',
    ],
    ratio: '1:30',
    avg_study_time: '3.5',
    prodi: [
      {
        name: 'Pendidikan Matematika',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'localhost:3000/img/FPMIPA.jpg',
        slug: 's1-pendidikan-matematika',
      },
      {
        name: 'Pendidikan Biologi',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'localhost:3000/img/FPMIPA.jpg',
        slug: 's1-pendidikan-biologi',
      },
      {
        name: 'Pendidikan Kimia',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'localhost:3000/img/FPMIPA.jpg',
        slug: 's1-pendidikan-kimia',
      },
      {
        name: 'Pendidikan Fisika',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'localhost:3000/img/FPMIPA.jpg',
        slug: 's1-pendidikan-fisika',
      },
      {
        name: 'Pendidikan Ilmu Komputer',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'localhost:3000/img/FPMIPA.jpg',
        slug: 's1-pendidikan-ilmu-komputer',
      },
      {
        name: 'International Program on Science Education',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'localhost:3000/img/FPMIPA.jpg',
        slug: 's1-international-program-on-science-education',
      },
    ],
  },
  {
    slug: 'fip',
    name: 'FIP',
    url_image: 'localhost:3000/img/FIP.png',
    full_name: 'Fakultas Ilmu Pendidikan',
    gallery: [
      'localhost:3000/img/FIP.png',
      'localhost:3000/img/FIP.png',
      'localhost:3000/img/FIP.png',
      'localhost:3000/img/FIP.png',
      'localhost:3000/img/FIP.png',
      'localhost:3000/img/FIP.png',
    ],
    ratio: '1:30',
    avg_study_time: '3.5',
    prodi: [
      {
        name: 'Pendidikan Matematika',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'localhost:3000/img/FIP.png',
        slug: 's1-pendidikan-matematika',
      },
      {
        name: 'Pendidikan Biologi',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'localhost:3000/img/FIP.png',
        slug: 's1-pendidikan-biologi',
      },
      {
        name: 'Pendidikan Kimia',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'localhost:3000/img/FIP.png',
        slug: 's1-pendidikan-kimia',
      },
      {
        name: 'Pendidikan Fisika',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'localhost:3000/img/FIP.png',
        slug: 's1-pendidikan-fisika',
      },
      {
        name: 'Pendidikan Ilmu Komputer',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'localhost:3000/img/FIP.png',
        slug: 's1-pendidikan-ilmu-komputer',
      },
      {
        name: 'International Program on Science Education',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'localhost:3000/img/FIP.png',
        slug: 's1-international-program-on-science-education',
      },
    ],
  },
  {
    name: 'FPIPS',
    slug: 'fpips',
    url_image: 'localhost:3000/img/FPIPS.jpg',
  },
  {
    name: 'FPBS',
    slug: 'fpbs',
    url_image: 'localhost:3000/img/FPBS.jpg',
  },
  {
    name: 'FPSD',
    slug: 'fpsd',
    url_image: 'localhost:3000/img/FPSD.jpg',
  },
  {
    name: 'FPTK',
    slug: 'fptk',
    url_image: 'localhost:3000/img/FPTK.jpg',
  },
  {
    name: 'FPOK',
    slug: 'fpok',
    url_image: 'localhost:3000/img/FPOK.jpg',
  },
  {
    name: 'FPEB',
    slug: 'fpeb',
    url_image: 'localhost:3000/img/FPEB.jpeg',
  },
  {
    name: 'Tasikmalaya',
    slug: 'tasikmalaya',
    url_image: 'localhost:3000/img/Tasikmalaya.jpg',
  },
  {
    name: 'Cibiru',
    slug: 'cibiru',
    url_image: 'localhost:3000/img/Cibiru.jpeg',
  },
  {
    name: 'Sumedang',
    slug: 'sumedang',
    url_image: 'localhost:3000/img/Sumedang.jpg',
  },
  {
    name: 'Purwakarta',
    slug: 'purwakarta',
    url_image: 'localhost:3000/img/Purwakarta.jpg',
  },
  {
    name: 'Serang',
    slug: 'serang',
    url_image: 'localhost:3000/img/Serang.jpg',
  },
]

module.exports = fakultas
