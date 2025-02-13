//base image path
const baseImagePath = './public/images/fakultas/'

const fakultas = [
  {
    slug: 'fpmipa',
    name: 'FPMIPA',
    url_image: 'http://165.22.109.98:9998/img/FPMIPA.jpg',
    full_name: 'Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam',
    gallery: [
      'http://165.22.109.98:9998/img/FPMIPA.jpg',
      'http://165.22.109.98:9998/img/FPMIPA.jpg',
      'http://165.22.109.98:9998/img/FPMIPA.jpg',
      'http://165.22.109.98:9998/img/FPMIPA.jpg',
      'http://165.22.109.98:9998/img/FPMIPA.jpg',
      'http://165.22.109.98:9998/img/FPMIPA.jpg',
    ],
    jml_mahasiswa: 1500,
    jml_dosen: 200,
    jml_prodi: 9,
    wkt_lulus:'4.5 Tahun',
    kerjasama:' - 2020 UN\n - 2021 UM',
    fasilitas: ' - Kantin\n - Student Corner',
    ratio: '1:7.5', 
    prodi: [
      {
        name: 'Pendidikan Matematika',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9998/img/FPMIPA.jpg',
        slug: 's1-pendidikan-matematika',
      },
      {
        name: 'Pendidikan Biologi',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9998/img/FPMIPA.jpg',
        slug: 's1-pendidikan-biologi',
      },
      {
        name: 'Pendidikan Kimia',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9998/img/FPMIPA.jpg',
        slug: 's1-pendidikan-kimia',
      },
      {
        name: 'Pendidikan Fisika',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9998/img/FPMIPA.jpg',
        slug: 's1-pendidikan-fisika',
      },
      {
        name: 'Pendidikan Ilmu Komputer',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9998/img/FPMIPA.jpg',
        slug: 's1-pendidikan-ilmu-komputer',
      },
      {
        name: 'International Program on Science Education',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9998/img/FPMIPA.jpg',
        slug: 's1-international-program-on-science-education',
      },
    ],
  },
  {
    slug: 'fip',
    name: 'FIP',
    url_image: 'http://165.22.109.98:9998/img/FIP.png',
    full_name: 'Fakultas Ilmu Pendidikan',
    gallery: [
      'http://165.22.109.98:9998/img/FIP.png',
      'http://165.22.109.98:9998/img/FIP.png',
      'http://165.22.109.98:9998/img/FIP.png',
      'http://165.22.109.98:9998/img/FIP.png',
      'http://165.22.109.98:9998/img/FIP.png',
      'http://165.22.109.98:9998/img/FIP.png',
    ],
    jml_mahasiswa: 1500,
    jml_dosen: 200,
    jml_prodi: 9,
    wkt_lulus:'4.5 Tahun',
    kerjasama:' - 2020 UN\n - 2021 UM',
    fasilitas: ' - Kantin\n - Student Corner',
    ratio: '1:7.5', 
    prodi: [
      {
        name: 'Pendidikan Matematika',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9998/img/FIP.png',
        slug: 's1-pendidikan-matematika',
      },
      {
        name: 'Pendidikan Biologi',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9998/img/FIP.png',
        slug: 's1-pendidikan-biologi',
      },
      {
        name: 'Pendidikan Kimia',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9998/img/FIP.png',
        slug: 's1-pendidikan-kimia',
      },
      {
        name: 'Pendidikan Fisika',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9998/img/FIP.png',
        slug: 's1-pendidikan-fisika',
      },
      {
        name: 'Pendidikan Ilmu Komputer',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9998/img/FIP.png',
        slug: 's1-pendidikan-ilmu-komputer',
      },
      {
        name: 'International Program on Science Education',
        jenjang: 'S1',
        akreditasi: 'A',
        url_image: 'http://165.22.109.98:9998/img/FIP.png',
        slug: 's1-international-program-on-science-education',
      },
    ],
  },
  {
    name: 'FPIPS',
    slug: 'fpips',
    url_image: 'http://165.22.109.98:9998/img/FPIPS.jpg',
    
    jml_mahasiswa: 1500,
    jml_dosen: 200,
    jml_prodi: 9,
    wkt_lulus:'4.5 Tahun',
    kerjasama:' - 2020 UN\n - 2021 UM',
    fasilitas: ' - Kantin\n - Student Corner',
    ratio: '1:7.5',
  },
  {
    name: 'FPBS',
    slug: 'fpbs',
    url_image: 'http://165.22.109.98:9998/img/FPBS.jpg',
    jml_mahasiswa: 1500,
    jml_dosen: 200,
    jml_prodi: 9,
    wkt_lulus:'4.5 Tahun',
    kerjasama:' - 2020 UN\n - 2021 UM',
    fasilitas: ' - Kantin\n - Student Corner',
    ratio: '1:7.5',
  },
  {
    name: 'FPSD',
    slug: 'fpsd',
    url_image: 'http://165.22.109.98:9998/img/FPSD.jpg',
    jml_mahasiswa: 1500,
    jml_dosen: 200,
    jml_prodi: 9,
    wkt_lulus:'4.5 Tahun',
    kerjasama:' - 2020 UN\n - 2021 UM',
    fasilitas: ' - Kantin\n - Student Corner',
    ratio: '1:7.5',
  },
  {
    name: 'FPTK',
    slug: 'fptk',
    url_image: 'http://165.22.109.98:9998/img/FPTK.jpg',
    jml_mahasiswa: 1500,
    jml_dosen: 200,
    jml_prodi: 9,
    wkt_lulus:'4.5 Tahun',
    kerjasama:' - 2020 UN\n - 2021 UM',
    fasilitas: ' - Kantin\n - Student Corner',
    ratio: '1:7.5',
  },
  {
    name: 'FPOK',
    slug: 'fpok',
    url_image: 'http://165.22.109.98:9998/img/FPOK.jpg',
    jml_mahasiswa: 1500,
    jml_dosen: 200,
    jml_prodi: 9,
    wkt_lulus:'4.5 Tahun',
    kerjasama:' - 2020 UN\n - 2021 UM',
    fasilitas: ' - Kantin\n - Student Corner',
    ratio: '1:7.5',
  },
  {
    name: 'FPEB',
    slug: 'fpeb',
    url_image: 'http://165.22.109.98:9998/img/FPEB.jpeg',
    jml_mahasiswa: 1500,
    jml_dosen: 200,
    jml_prodi: 9,
    wkt_lulus:'4.5 Tahun',
    kerjasama:' - 2020 UN\n - 2021 UM',
    fasilitas: ' - Kantin\n - Student Corner',
    ratio: '1:7.5',
  },
  {
    name: 'Tasikmalaya',
    slug: 'tasikmalaya',
    url_image: 'http://165.22.109.98:9998/img/Tasikmalaya.jpg',
    jml_mahasiswa: 1500,
    jml_dosen: 200,
    jml_prodi: 9,
    wkt_lulus:'4.5 Tahun',
    kerjasama:' - 2020 UN\n - 2021 UM',
    fasilitas: ' - Kantin\n - Student Corner',
    ratio: '1:7.5',
  },
  {
    name: 'Cibiru',
    slug: 'cibiru',
    url_image: 'http://165.22.109.98:9998/img/Cibiru.jpeg',
    jml_mahasiswa: 1500,
    jml_dosen: 200,
    jml_prodi: 9,
    wkt_lulus:'4.5 Tahun',
    kerjasama:' - 2020 UN\n - 2021 UM',
    fasilitas: ' - Kantin\n - Student Corner',
    ratio: '1:7.5',
  },
  {
    name: 'Sumedang',
    slug: 'sumedang',
    url_image: 'http://165.22.109.98:9998/img/Sumedang.jpg',
    jml_mahasiswa: 1500,
    jml_dosen: 200,
    jml_prodi: 9,
    wkt_lulus:'4.5 Tahun',
    kerjasama:' - 2020 UN\n - 2021 UM',
    fasilitas: ' - Kantin\n - Student Corner',
    ratio: '1:7.5',
  },
  {
    name: 'Purwakarta',
    slug: 'purwakarta',
    url_image: 'http://165.22.109.98:9998/img/Purwakarta.jpg',
    jml_mahasiswa: 1500,
    jml_dosen: 200,
    jml_prodi: 9,
    wkt_lulus:'4.5 Tahun',
    kerjasama:' - 2020 UN\n - 2021 UM',
    fasilitas: ' - Kantin\n - Student Corner',
    ratio: '1:7.5',
  },
  {
    name: 'Serang',
    slug: 'serang',
    url_image: 'http://165.22.109.98:9998/img/Serang.jpg',
    jml_mahasiswa: 1500,
    jml_dosen: 200,
    jml_prodi: 9,
    wkt_lulus:'4.5 Tahun',
    kerjasama:' - 2020 UN\n - 2021 UM',
    fasilitas: ' - Kantin\n - Student Corner',
    ratio: '1:7.5',
  },
]
module.exports = fakultas
