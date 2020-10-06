const kelpos =[
{"id": "01", "kelpos":"01. Barang Impor yang Kewajiban Pabeannya Diselesaikan di Kantor Pabean Setempat"},
{"id": "02", "kelpos":"02. Barang Impor yang Diangkut Lanjut"},
{"id": "03", "kelpos":"03. Barang Impor yang Diangkut Terus"},
{"id": "04", "kelpos":"04. Barang Ekspor yang Diangkut Lanjut"},
{"id": "05", "kelpos":"05. Barang Ekspor yang Diangkut Terus"},
{"id": "07", "kelpos":"07. Barang Asal TLDDP yang Diangkut dari Satu Kawasan Pabean Lainnya melalui LDP"},
{"id": "08", "kelpos":"08. Peti Kemas Kosong (empty container) yang Kewaijab Pabeannya diselesaikan di Kantor Pabean Setempat"},
{"id": "11", "kelpos":"11. Peti Kemas Kosong (empty container) yang Diangkut Lanjut"},
{"id": "12", "kelpos":"12. Peti Kemas Kosong (empty container) yang Diangkut Terus"}
]
const jns_manifest = [
          {"id": "01", "manifest":"Outward Manifest"},
          {"id": "02", "manifest":"Inward Manifest"}
]
const jns_moda = [
          {"id": "01", "moda":"Laut"},
          {"id": "02", "moda":"Udara"}
]
const datakpbcs = [
           {
             "id": "000000",
             "kpbc": "Kantor Pusat DJBC"
           },
           {
             "id": "001000",
             "kpbc": "Sekretariat DJBC"
           },
           {
             "id": "001100",
             "kpbc": "Tenaga Pengkaji Bidang I"
           },
           {
             "id": "001200",
             "kpbc": "Tenaga Pengkaji Bidang II"
           },
           {
             "id": "001300",
             "kpbc": "Tenaga Pengkaji Bidang III"
           },
           {
             "id": "002000",
             "kpbc": "Direktorat Teknis Kepabeanan"
           },
           {
             "id": "003000",
             "kpbc": "Direktorat Fasilitas Kepabeanan"
           },
           {
             "id": "004000",
             "kpbc": "Direktorat Cukai"
           },
           {
             "id": "005000",
             "kpbc": "Direktorat Pencegahan dan Penyidikan"
           },
           {
             "id": "006000",
             "kpbc": "Direktorat Audit"
           },
           {
             "id": "007000",
             "kpbc": "Direktorat Kepabeanan Internasional"
           },
           {
             "id": "008000",
             "kpbc": "Direktorat Penerimaan dan Peraturan Kepabeanan dan Cukai"
           },
           {
             "id": "009000",
             "kpbc": "Direktorat Informasi Kepabeanan dan Cukai"
           },
           {
             "id": "010000",
             "kpbc": "Kanwil DJBC Sumatera Utara"
           },
           {
             "id": "010201",
             "kpbc": "Balai Pengujian dan Identifikasi Barang Medan"
           },
           {
             "id": "010700",
             "kpbc": "KPPBC Belawan"
           },
           {
             "id": "010800",
             "kpbc": "KPPBC Medan"
           },
           {
             "id": "010900",
             "kpbc": "KPPBC Pangkalan Susu"
           },
           {
             "id": "011000",
             "kpbc": "KPPBC Pematang Siantar"
           },
           {
             "id": "011100",
             "kpbc": "KPPBC Teluk Nibung"
           },
           {
             "id": "011200",
             "kpbc": "KPPBC Kuala Tanjung"
           },
           {
             "id": "011300",
             "kpbc": "KPPBC Sibolga, meliputi"
           },
           {
             "id": "011500",
             "kpbc": "KPPBC Teluk Bayur"
           },
           {
             "id": "020000",
             "kpbc": "Kanwil DJBC Kepulauan Riau"
           },
           {
             "id": "020100",
             "kpbc": "KPPBC Tanjung Balai Karimun"
           },
           {
             "id": "021900",
             "kpbc": "Pangkalan Sarana Operasi Tanjung Balai Karimun"
           },
           {
             "id": "020200",
             "kpbc": "KPPBC Sambu Belakang Padang"
           },
           {
             "id": "020300",
             "kpbc": "KPPBC Selat Panjang"
           },
           {
             "id": "020400",
             "kpbc": "KPU Batam"
           },
           {
             "id": "020500",
             "kpbc": "KPPBC Tanjung Pinang"
           },
           {
             "id": "020800",
             "kpbc": "KPPBC Dabo Singkep"
           },
           {
             "id": "020900",
             "kpbc": "KPPBC Dumai"
           },
           {
             "id": "021000",
             "kpbc": "KPPBC Bagan Siapiapi"
           },
           {
             "id": "021100",
             "kpbc": "KPPBC Bengkalis"
           },
           {
             "id": "021200",
             "kpbc": "KPPBC Pekanbaru"
           },
           {
             "id": "021300",
             "kpbc": "KPPBC Siak Sri Indrapura"
           },
           {
             "id": "021500",
             "kpbc": "KPPBC Tembilahan"
           },
           {
             "id": "021700",
             "kpbc": "KPPBC Tarempa"
           },
           {
             "id": "030000",
             "kpbc": "Kanwil DJBC Sumatera Bagian Selatan"
           },
           {
             "id": "030100",
             "kpbc": "KPPBC Palembang,"
           },
           {
             "id": "030200",
             "kpbc": "KPPBC Bengkulu"
           },
           {
             "id": "030300",
             "kpbc": "KPBC Pangkal Pinang"
           },
           {
             "id": "030500",
             "kpbc": "KPPBC Tanjung Pandan"
           },
           {
             "id": "030600",
             "kpbc": "KPPBC Jambi"
           },
           {
             "id": "030700",
             "kpbc": "KPPBC Bandar Lampung"
           },
           {
             "id": "040000",
             "kpbc": "Kanwil DJBC Jakarta"
           },
           {
             "id": "040101",
             "kpbc": "Pangkalan Sarana Operasi Tanjung Priok"
           },
           {
             "id": "040300",
             "kpbc": "KPU Tanjung Priok"
           },
           {
             "id": "040400",
             "kpbc": "KPPBC Jakarta"
           },
           {
             "id": "040500",
             "kpbc": "Balai Pengujian dan Identifikasi Barang Jakarta"
           },
           {
             "id": "040600",
             "kpbc": "KPPBC Kantor Pos Pasar Baru"
           },
           {
             "id": "050000",
             "kpbc": "Kanwil DJBC Jawa Barat"
           },
           {
             "id": "050100",
             "kpbc": "KPPBC Soekarno-Hatta"
           },
           {
             "id": "050300",
             "kpbc": "KPPBC Bogor"
           },
           {
             "id": "050400",
             "kpbc": "KPPBC Merak"
           },
           {
             "id": "050500",
             "kpbc": "KPPBC Bandung"
           },
           {
             "id": "050600",
             "kpbc": "KPPBC Tasikmalaya"
           },
           {
             "id": "050700",
             "kpbc": "KPPBC Cirebon"
           },
           {
             "id": "050800",
             "kpbc": "KPPBC Purwakarta"
           },
           {
             "id": "050900",
             "kpbc": "KPPBC Bekasi"
           },
           {
             "id": "060000",
             "kpbc": "Kanwil DJBC Jawa Tengah dan DI Yogyakarta"
           },
           {
             "id": "060100",
             "kpbc": "KPPBC Tanjung Emas"
           },
           {
             "id": "060200",
             "kpbc": "KPPBC Pekalongan"
           },
           {
             "id": "060300",
             "kpbc": "KPPBC Kudus"
           },
           {
             "id": "060400",
             "kpbc": "KPPBC Cilacap"
           },
           {
             "id": "060600",
             "kpbc": "KPPBC Surakarta"
           },
           {
             "id": "060700",
             "kpbc": "KPPBC Yogyakarta"
           },
           {
             "id": "061000",
             "kpbc": "KPPBC Tegal"
           },
           {
             "id": "062000",
             "kpbc": "KPPBC Purwokerto"
           },
           {
             "id": "070000",
             "kpbc": "Kanwil DJBC Jawa Timur I"
           },
           {
             "id": "070100",
             "kpbc": "KPPBC Tanjung Perak"
           },
           {
             "id": "070200",
             "kpbc": "KPPBC Kalianget"
           },
           {
             "id": "071400",
             "kpbc": "Balai Pengujian dan Identifikasi Barang Surabaya"
           },
           {
             "id": "070300",
             "kpbc": "KPPBC Gresik"
           },
           {
             "id": "070400",
             "kpbc": "KPPBC Bojonegoro"
           },
           {
             "id": "070500",
             "kpbc": "KPPBC Juanda"
           },
           {
             "id": "070600",
             "kpbc": "KPPBC Malang"
           },
           {
             "id": "070700",
             "kpbc": "KPPBC Blitar"
           },
           {
             "id": "070800",
             "kpbc": "KPPBC Kediri"
           },
           {
             "id": "070900",
             "kpbc": "KPPBC Tulung Agung"
           },
           {
             "id": "071000",
             "kpbc": "KPPBC Madiun"
           },
           {
             "id": "071100",
             "kpbc": "KPPBC Panarukan"
           },
           {
             "id": "071200",
             "kpbc": "KPPBC Probolinggo"
           },
           {
             "id": "071300",
             "kpbc": "KPPBC Pasuruan"
           },
           {
             "id": "080000",
             "kpbc": "Kanwil DJBC Bali, NTB dan NTT"
           },
           {
             "id": "080100",
             "kpbc": "KPPBC Ngurah Rai"
           },
           {
             "id": "080300",
             "kpbc": "KPPBC Mataram"
           },
           {
             "id": "080400",
             "kpbc": "KPPBC Bima"
           },
           {
             "id": "080500",
             "kpbc": "KPPBC Kupang"
           },
           {
             "id": "080700",
             "kpbc": "KPPBC Maumere"
           },
           {
             "id": "081200",
             "kpbc": "KPPBC Benoa"
           },
           {
             "id": "081300",
             "kpbc": "KPPBC Atapupu"
           },
           {
             "id": "090000",
             "kpbc": "Kanwil DJBC Kalimantan Bagian Barat"
           },
           {
             "id": "090100",
             "kpbc": "KPPBC Pontianak"
           },
           {
             "id": "090200",
             "kpbc": "KPPBC Entikong"
           },
           {
             "id": "090300",
             "kpbc": "Kantor Bantu Teluk Air (PL)"
           },
           {
             "id": "090400",
             "kpbc": "KPPBC Ketapang"
           },
           {
             "id": "090500",
             "kpbc": "KPPBC Sintete"
           },
           {
             "id": "090700",
             "kpbc": "KPPBC Sampit"
           },
           {
             "id": "090800",
             "kpbc": "KPPBC Pangkalan Buun"
           },
           {
             "id": "090900",
             "kpbc": "KPPBC Pulang Pisau"
           },
           {
             "id": "092000",
             "kpbc": "KPPBC Jagoi Babang"
           },
           {
             "id": "100000",
             "kpbc": "Kanwil DJBC Kalimantan Bagian Timur"
           },
           {
             "id": "100100",
             "kpbc": "KPPBC Banjarmasin"
           },
           {
             "id": "100200",
             "kpbc": "KPPBC Kotabaru"
           },
           {
             "id": "100300",
             "kpbc": "KPPBC Balikpapan"
           },
           {
             "id": "100500",
             "kpbc": "KPPBC Samarinda"
           },
           {
             "id": "100600",
             "kpbc": "KPPBC Bontang"
           },
           {
             "id": "100800",
             "kpbc": "KPPBC Tarakan"
           },
           {
             "id": "100900",
             "kpbc": "KPPBC Nunukan"
           },
           {
             "id": "101000",
             "kpbc": "KPPBC Sangata"
           },
           {
             "id": "110000",
             "kpbc": "Kanwil DJBC Sulawesi"
           },
           {
             "id": "110100",
             "kpbc": "KPPBC Makasar"
           },
           {
             "id": "111400",
             "kpbc": "Pangkalan Sarana Operasi Pantoloan"
           },
           {
             "id": "110300",
             "kpbc": "KPPBC Pare-pare"
           },
           {
             "id": "110400",
             "kpbc": "KPPBC Malili"
           },
           {
             "id": "110500",
             "kpbc": "KPPBC Bajoe"
           },
           {
             "id": "110600",
             "kpbc": "KPPBC Kendari"
           },
           {
             "id": "110700",
             "kpbc": "KPPBC Pomalaa"
           },
           {
             "id": "110800",
             "kpbc": "KPPBC Pantoloan"
           },
           {
             "id": "110900",
             "kpbc": "KPPBC Poso"
           },
           {
             "id": "111000",
             "kpbc": "KPPBC Luwuk"
           },
           {
             "id": "111100",
             "kpbc": "KPPBC Bitung"
           },
           {
             "id": "111200",
             "kpbc": "KPPBC Manado"
           },
           {
             "id": "111300",
             "kpbc": "KPPBC Gorontalo"
           },
           {
             "id": "120000",
             "kpbc": "Kanwil DJBC Maluku, Papua dan Irian Jaya Barat"
           },
           {
             "id": "120100",
             "kpbc": "KPPBC Ambon"
           },
           {
             "id": "120200",
             "kpbc": "KPPBC Ternate"
           },
           {
             "id": "120300",
             "kpbc": "KPPBC Sorong"
           },
           {
             "id": "120400",
             "kpbc": "KPPBC Manokwari"
           },
           {
             "id": "120500",
             "kpbc": "KPPBC Fak-Fak"
           },
           {
             "id": "120600",
             "kpbc": "KPPBC Jayapura"
           },
           {
             "id": "120700",
             "kpbc": "KPPBC Merauke"
           },
           {
             "id": "120800",
             "kpbc": "KPPBC Amamapare"
           },
           {
             "id": "120900",
             "kpbc": "KPPBC Biak"
           },
           {
             "id": "121000",
             "kpbc": "KPPBC Tual"
           },
           {
             "id": "122000",
             "kpbc": "KPPBC Bintuni"
           },
           {
             "id": "122100",
             "kpbc": "KPPBC Kaimana"
           },
           {
             "id": "122200",
             "kpbc": "KPPBC Nabire"
           },
           {
             "id": "130000",
             "kpbc": "Kanwil DJBC Nangroe Aceh Darussalam"
           },
           {
             "id": "130100",
             "kpbc": "KPPBC Banda Aceh (A4)"
           },
           {
             "id": "130300",
             "kpbc": "KPPBC Sabang (A4)"
           },
           {
             "id": "130400",
             "kpbc": "KPPBC Meulaboh (B)"
           },
           {
             "id": "130500",
             "kpbc": "KPPBC Lhok Seumawe (A4)"
           },
           {
             "id": "130600",
             "kpbc": "KPPBC Kuala Langsa (B)"
           },
           {
             "id": "140000",
             "kpbc": "Kanwil DJBC Riau dan Sumatra Barat"
           },
           {
             "id": "150000",
             "kpbc": "Kantor Wilayah DJBC Banten"
           },
           {
             "id": "150300",
             "kpbc": "KPPBC Tangerang"
           },
           {
             "id": "160000",
             "kpbc": "Kanwil DJBC Jawa Timur II"
           },
           {
             "id": "160200",
             "kpbc": "KPBC Sunda Kelapa"
           },
           {
             "id": "160700",
             "kpbc": "KPPBC Banyuwangi"
           }
]
const fields = [
{key : "no", label: "No"},
{key : "kelpos", label: "Kel. Pos"},
{key : "nomaster", label: "No. Master"},
{key : "tglmaster", label: "Tanggal Master"},
{key : "jmlhouse", label: "Jumlah House"},
{key : "posbc11", label: "Pos BC 1.1"},
{key : "respon", label: "Respon"},
{key : "status", label: "Status"},
{key : "action", label: "Action"},
]

const  fieldhostbl = [
{key : "no", label: "No"},
{key : "kelpos", label: "Kel. Pos"},
{key : "nomaster", label: "No. Master"},
{key : "tglhost", label: "Tanggal Master"},
{key : "action", label: "Action"},
]

export { fieldhostbl, fields, jns_manifest, jns_moda, datakpbcs, kelpos }
