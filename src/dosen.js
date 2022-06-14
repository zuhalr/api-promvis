//base image path
const baseImagePath = './public/images/dosen/'

const dosen = [
  // FPMIPA
  {
    nama: "Rasim",
    jabatan: "lektor",
    pendidikan : "S3",
    status:"tetap",
    slug: 's1-ilmu-komputer',
    url_image: 'http://localhost:3000/img/profile.png',
    riwayat_pendidikan: '- STMIK IM S1\n - Institut Teknologi Bandung S2\n - Institut Teknologi Bandung S3',  
    riwayat_pengajaran:'- TEKNIK MULTIMEDIA 2021\n - TEORI BAHASA DAN AUTOMATA 2021\n - GRAFIKA KOMPUTER DAN MULTIMEDIA 2021' ,
    riwayat_prestasi:'- 10 Besar Dosen Terbaik FPMIPA UPI 2020\n - Pembimbing Finalis Gemastik ICT Scientific Paper 2021' ,   
  },  
  {
    nama: "Rosa Ariani Sukamto",
    jabatan: "lektor",
    pendidikan : "S2",
    status:"tetap",
    slug: 's1-ilmu-komputer',
    url_image: 'http://localhost:3000/img/women.png',
    riwayat_pendidikan: '- Institut Teknologi Bandung S1\n - Institut Teknologi Bandung S2',  
    riwayat_pengajaran:'- ALGORITMA DAN PEMROGRAMAN 1 2021\n - GAME APPLICATION DEVELOPMENT 2021\n - STRUKTUR DATA' ,
    riwayat_prestasi:'10 Besar Dosen Terbaik Ilmu Komputer UPI 2021' ,   
  },
  {
    nama: "Eddy Prasetyo Nugroho",
    jabatan: "lektor",
    pendidikan : "S2",
    status:"tetap",
    slug: 's1-ilmu-komputer',
    url_image: 'http://localhost:3000/img/profile.png',
    riwayat_pendidikan: '- Sekolah Tinggi Teknologi Telkom S1\n - Institut Teknologi Bandung S2',  
    riwayat_pengajaran:'- SISTEM CERDAS 2021\n - JARINGAN KOMPUTER 2021' ,
    riwayat_prestasi:'10 Besar Dosen Terbaik Ilmu Komputer UPI 2021' ,   
  },
  {
    nama: "Rizky Rachman Judhie P",
    jabatan: "lektor",
    pendidikan : "S2",
    status:"tetap",
    slug: 's1-ilmu-komputer',
    url_image: 'http://localhost:3000/img/profile.png',
    riwayat_pendidikan: '- Universitas Gunadarma S1\n - Universitas Gadjah Mada S2',  
    riwayat_pengajaran:'- E-BUSINESS 2021\n - JARINGAN KOMPUTER 2021\n - SEMINAR 2021' ,
    riwayat_prestasi:'10 Besar Dosen Terbaik Ilmu Komputer UPI 2021' ,   
  },
  {
    nama: "Jajang Kusnendar",
    jabatan: "lektor",
    pendidikan : "S2",
    status:"tetap",
    slug: 's1-pendidikan-ilmu-komputer',
    url_image: 'http://localhost:3000/img/profile.png',
    riwayat_pendidikan: '- 	STMIK Bandung S1\n - Institut Teknologi Bandung S2',  
    riwayat_pengajaran:'- ALGORITMA DAN PEMROGRAMAN 2021\n - SISTEM OPERASI 2021' ,
    riwayat_prestasi:'10 Besar Dosen Terbaik Pendidikan Ilmu Komputer UPI 2021' ,   
  },
  {
    nama: "Diah Kusumawaty",
    jabatan: "lektor",
    pendidikan : "S3",
    status:"tetap",
    slug: 's1-biologi',
    url_image: 'http://localhost:3000/img/women.png',
    riwayat_pendidikan: '- 	Institut Teknologi Bandung S1\n - Institut Teknologi Bandung S2\n - Institut Teknologi Bandung S3',  
    riwayat_pengajaran:'- PROYEK KONSULTANSI 2021\n - EVALUASI PEMBELAJARAN BIOLOGI 2021\n - BIOMODELING 2021' ,
    riwayat_prestasi:'10 Besar Dosen Terbaik Biologi UPI 2021' ,   
  },
  {
    nama: "Mimin Nurjhani K",
    jabatan: "lektor",
    pendidikan : "S3",
    status:"tetap",
    slug: 's1-pendidikan-biologi',
    url_image: 'http://localhost:3000/img/profile.png',
    riwayat_pendidikan: '- 	Universitas Pendidikan Indonesia S1\n - Universitas Pendidikan Indonesia S2\n - Universitas Pendidikan Indonesia S3',  
    riwayat_pengajaran:'- BIOLOGI DASAR 2021\n - MICROTEACHING 2021\n - BELAJAR PEMBELAJARAN BIOLOGI 2021' ,
    riwayat_prestasi:'10 Besar Dosen Terbaik Pendidikan Biologi UPI 2021' ,   
  },
  {
    nama: "Moh. Arifin",
    jabatan: "lektor",
    pendidikan : "S3",
    status:"tetap",
    slug: 's1-fisika',
    url_image: 'http://localhost:3000/img/profile.png',
    riwayat_pendidikan: '- 	Universitas Pendidikan Indonesia S1\n - Australian National University S2\n - Hokkaido University S3',  
    riwayat_pengajaran:'-	EKSPERIMEN LISTRIK MAGNET DAN GELOMBANG 2021\n - SEMINAR FISIKA 2021\n - FISIKA KUANTUM 2021' ,
    riwayat_prestasi:'10 Besar Dosen Terbaik Fisika UPI 2021' ,   
  },
  {
    nama: "Hera Novia",
    jabatan: "lektor",
    pendidikan : "S3",
    status:"tetap",
    slug: 's1-pendidikan-fisika',
    url_image: 'http://localhost:3000/img/women.png',
    riwayat_pendidikan: '- 	Institut Teknologi Bandung S1\n - Institut Teknologi Bandung S2\n - Universitas Pendidikan Indonesia S3',  
    riwayat_pengajaran:'-	BAHASA INGGRIS 2021\n - EKSPERIMEN FISIKA DASAR I 2021\n - MEKANIKA UNTUK SEKOLAH 2021' ,
    riwayat_prestasi:'10 Besar Dosen Terbaik Pendidikan Fisika UPI 2021' ,   
  },
  {
    nama: "Soja Siti Fatimah",
    jabatan: "lektor",
    pendidikan : "S3",
    status:"tetap",
    slug: 's1-kimia',
    url_image: 'http://localhost:3000/img/women.png',
    riwayat_pendidikan: '- Universitas Padjadjaran S1\n - Universitas Padjadjaran S2\n - Universitas Padjadjaran S3',  
    riwayat_pengajaran:'- KAPITA SELEKTA KIMIA ANALITIK 2021\n - KIMIA ZAT PADAT 2021\n - KETERAMPILAN DASAR LABORATORIUM 2021' ,
    riwayat_prestasi:'10 Besar Dosen Terbaik Kimia UPI 2021' ,   
  },
  {
    nama: "Sri Mulyani",
    jabatan: "lektor",
    pendidikan : "S3",
    status:"tetap",
    slug: 's1-pendidikan-kimia',
    url_image: 'http://localhost:3000/img/women.png',
    riwayat_pendidikan: '- Universitas Pendidikan Indonesia S1\n - Institut Teknologi Bandung S2\n - Universitas Pendidikan Indonesia S3',  
    riwayat_pengajaran:'- KIMIA DASAR 2 2021\n - SIMULASI PEMBELAJARAN KIMIA 2021\n - METODOLOGI PENELITIAN PENDIDIKAN KIMIA 2021' ,
    riwayat_prestasi:'10 Besar Dosen Terbaik Pendidikan Kimia UPI 2021' ,   
  },
  {
    nama: "Cece Kustiawan",
    jabatan: "lektor",
    pendidikan : "S3",
    status:"tetap",
    slug: 's1-matematika',
    url_image: 'http://localhost:3000/img/women.png',
    riwayat_pendidikan: '- Universitas Pendidikan Indonesia S1\n - Universitas Gadjah Mada S2\n - Institut Teknologi Bandung S3',  
    riwayat_pengajaran:'- ANALISIS MULTIVARIABEL 2021\n - PERSAMAAN DIFERENSIAL BIASA 2021\n - TEORI DIFERENSIAL FUNGSI REAL 2021' ,
    riwayat_prestasi:'10 Besar Dosen Terbaik Matematika UPI 2021' ,   
  },  
  {
    nama: "Dian Usdiyana",
    jabatan: "lektor",
    pendidikan : "S3",
    status:"tetap",
    slug: 's1-pendidikan-matematika',
    url_image: 'http://localhost:3000/img/women.png',
    riwayat_pendidikan: '- Universitas Pendidikan Indonesia S1\n - Universitas Gadjah Mada S2\n - Universitas Pendidikan Indonesia S3',  
    riwayat_pengajaran:'- TEORI GRUP 2021\n - METODE NUMERIK 2021\n - TEORI DAN PRAKTIK DALAM PEMBELAJARAN MATEMATIKA BERBASIS ICT 2021' ,
    riwayat_prestasi:'10 Besar Dosen Terbaik Pendidikan Matematika UPI 2021' ,   
  },
  {
    nama: "Rika Rafikah Agustin",
    jabatan: "lektor",
    pendidikan : "S2",
    status:"tetap",
    slug: 's1-ipse',
    url_image: 'http://localhost:3000/img/women.png',
    riwayat_pendidikan: '- Universitas Pendidikan Indonesia S1\n - Universitas Pendidikan Indonesia S2',  
    riwayat_pengajaran:'- PHYSICAL CHEMISTRY 2021\n - TEACHING PREPARATION 2021\n - LABORATORY TECHNIQUE AND MANAGEMENT 2021' ,
    riwayat_prestasi:'10 Besar Dosen Terbaik IPSE UPI 2021' ,   
  },
  // FIP
  {
    nama: "Asra",
    jabatan: "lektor",
    pendidikan : "S2",
    status:"tetap",
    slug: 's1-teknologi-pendidikan',
    url_image: 'http://localhost:3000/img/women.png',
    riwayat_pendidikan: '- Universitas Negeri Jakarta S1\n - Universiti Malaya S2',  
    riwayat_pengajaran:'- MANAJEMEN TEKNOLOGI PENDIDIKAN 2021\n - DESAIN PESAN 2021\n - TEKNOLOGI KINERJA 2021' ,
    riwayat_prestasi:'10 Besar Dosen Terbaik Teknologi Pendidikan UPI 2021' ,   
  },
  {
    nama: "Yayah Rahyasih",
    jabatan: "lektor",
    pendidikan : "S3",
    status:"tetap",
    slug: 's1-administrasi-pendidikan',
    url_image: 'http://localhost:3000/img/women.png',
    riwayat_pendidikan: '- Universitas Negeri Jakarta S1\n - Universitas Pendidikan Indonesia S2\n - Universitas Pendidikan Indonesia S3',  
    riwayat_pengajaran:'- MANAJEMEN PENGEMBANGAN SUMBER DAYA MANUSIA 2021\n - MANAJEMEN PERUBAHAN 2021\n - 	KURIKULUM DAN PEMBELAJARAN 2021' ,
    riwayat_prestasi:'10 Besar Dosen Terbaik Administrasi Pendidikan UPI 2021' ,   
  },
  {
    nama: "Herlina",
    jabatan: "lektor",
    pendidikan : "S3",
    status:"tetap", 
    slug: 's1-psikologi',
    url_image: 'http://localhost:3000/img/women.png',
    riwayat_pendidikan: '- Universitas Indonesia S1\n - Universitas Pendidikan Indonesia S2\n - Universitas Pendidikan Indonesia S3',  
    riwayat_pengajaran:'- TES INTELIGENSI 2021\n - SEMINAR PSIKOLOGI PERKEMBANGAN DAN PENDIDIKAN 2021\n - BIBLIOTHERAPY 2021' ,
    riwayat_prestasi:'10 Besar Dosen Terbaik Psikologi UPI 2021' ,   
  },
  {
    nama: "Neni Meiyani",
    jabatan: "lektor",
    pendidikan : "S3",
    status:"tetap",
    slug: 's1-pendidikan-khusus',
    url_image: 'http://localhost:3000/img/women.png',
    riwayat_pendidikan: '- Universitas Pendidikan Indonesia S1\n - Universitas Pendidikan Indonesia S2\n - Universitas Pendidikan Indonesia S3',  
    riwayat_pengajaran:'- MODEL PEMBELAJARAN ANAK DENGAN HAMBATAN PENGLIHATAN 2021\n - TULISAN BRAILLE DASAR 2021\n - PENGANTAR ORIENTASI, MOBILITAS, SOSIAL DAN KOMUNIKASI 2021' ,
    riwayat_prestasi:'10 Besar Dosen Terbaik Pendidikan Khusus UPI 2021' ,   
  },
  // FPTK
  {
    nama: "Fauzi Rahmanullah",
    jabatan: "lektor",
    pendidikan : "S2",
    status:"tetap",
    slug: 's1-pendidikan-teknik-arsitektur',
    url_image: 'http://localhost:3000/img/women.png',
    riwayat_pendidikan: '- Universitas Pendidikan Indonesia S1\n - Institut Teknologi Bandung S2',  
    riwayat_pengajaran:'- PRAKTEK INDUSTRI 2021\n - STRUKTUR DAN KONSTRUKSI BANGUNAN 3 2021\n - MANAJEMEN KONSTRUKSI 2021',
    riwayat_prestasi:'10 Besar Dosen Terbaik Pendidikan Teknik Arsitektur UPI 2021' ,   
  },  
  {
    nama: "Dandhi Kuswardhana",
    jabatan: "lektor",
    pendidikan : "S3",
    status:"tetap",
    slug: 's1-pendidikan-teknik-elektro',
    url_image: 'http://localhost:3000/img/profile.png',
    riwayat_pendidikan: '- Universitas Pendidikan Indonesia S1\n - Institut Teknologi Bandung S2\n - Japan Advanced Institute Of Science And Technology S3',  
    riwayat_pengajaran:'- DESAIN SISTEM DIGITAL 2021',
    riwayat_prestasi:'10 Besar Dosen Terbaik Pendidikan Teknik Elektro UPI 2021' ,   
  },
  {
    nama: "Erna Krisnanto",
    jabatan: "lektor",
    pendidikan : "S3",
    status:"tetap",
    slug: 's1-arsitektur',
    url_image: 'http://localhost:3000/img/women.png',
    riwayat_pendidikan: '- Universitas Gadjah Mada S1\n - Institut Teknologi Bandung S2',  
    riwayat_pengajaran:'- STRUKTUR DAN KONSTRUKSI 4 2021\n - STRUKTUR DAN KONSTRUKSI 2 2021\n - STRUKTUR DAN KONSTRUKSI BANGUNAN 3\2021',
    riwayat_prestasi:'10 Besar Dosen Terbaik Arsitektur UPI 2021' ,   
  },
  {
    nama: "Dadang Lukman Hakim",
    jabatan: "lektor",
    pendidikan : "S3",
    status:"tetap",
    slug: 's1-teknik-elektro',
    url_image: 'http://localhost:3000/img/profile.png',
    riwayat_pendidikan: '- Universitas Teknologi Surabaya S1\n - Institut Teknologi Bandung S2\n - Universitas Pendidikan Indonesia S3',  
    riwayat_pengajaran:'- SCADA 2021\n - SISTEM KENDALI 2021',
    riwayat_prestasi:'10 Besar Dosen Terbaik Teknik Elektro UPI 2021' ,   
  },
  //FPOK
  {
    nama: "Nidaul Hidayah",
    jabatan: "lektor",
    pendidikan : "S3",
    status:"tetap",
    slug: 's1-pko',
    url_image: 'http://localhost:3000/img/profile.png',
    riwayat_pendidikan: '- Universitas Padjadjaran S1\n - Institut Teknologi Bandung S2\n - Universitas Pendidikan Indonesia S3',  
    riwayat_pengajaran:'- 	STATISTIKA 2021\n - TES DAN PENGUKURAN OLAHRAGA 2021\n - SEJARAH DAN FILSAFAT OLAHRAGA 2021',
    riwayat_prestasi:'10 Besar Dosen Terbaik PKO UPI 2021' ,   
  },
  {
    nama: "Jajat Darajat Kusumah N",
    jabatan: "lektor",
    pendidikan : "S3",
    status:"tetap",
    slug: 's1-pjkr',
    url_image: 'http://localhost:3000/img/profile.png',
    riwayat_pendidikan: '- Universitas Pendidikan Indonesia S1\n - Universitas Padjadjaran S2\n - Universitas Indonesia S3',  
    riwayat_pengajaran:'- STATISTIKA 2021\n - BIOMEKANIKA OLAHRAGA 2021\n - DIMENSI FISIOLOGIS DALAM OLAHRAGA 2021',
    riwayat_prestasi:'10 Besar Dosen Terbaik PJKR UPI 2021' ,   
  },
  {
    nama: "Didin Budiman",
    jabatan: "lektor",
    pendidikan : "S3",
    status:"tetap",
    slug: 's1-pendidikan-jasmani',
    url_image: 'http://localhost:3000/img/profile.png',
    riwayat_pendidikan: '- Universitas Pendidikan Indonesia S1\n - Universitas Pendidikan Indonesia S2',  
    riwayat_pengajaran:'- PERTUMBUHAN PERKEMBANGAN ANAK DAN REMAJA 2021\n - KOMUNIKASI DAN INTERAKSI SOSIAL ANAK 2021\n - PEMBELAJARAN SENAM III 2021',
    riwayat_prestasi:'10 Besar Dosen Terbaik Pendidikan Jasmani UPI 2021' ,   
  },
  {
    nama: "Ahmad Hamidi",
    jabatan: "lektor",
    pendidikan : "S3",
    status:"tetap",
    slug: 's1-ilmu-keolahragaan',
    url_image: 'http://localhost:3000/img/profile.png',
    riwayat_pendidikan: '- Universitas Pendidikan Indonesia S1\n - Universitas Pendidikan Indonesia S2\n - Univesitas Negeri Jakarta S3',  
    riwayat_pengajaran:'- ANALIS KEOLAHRAGAAN 2021\n - SEPAKBOLA 2021\n - SOSIOLOGI OLAHRAGA 2021',
    riwayat_prestasi:'10 Besar Dosen Terbaik Ilmu Keolahragaan UPI 2021' ,   
  },
]

module.exports = dosen
