/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react'
import M from 'materialize-css'
import Navbar from '../../components/navbar/Navbar'
import Carousel from '../../components/carousel/Carousel'
import picture1 from './img/Picture1.png'
import picture2 from './img/Picture2.png'
import picture3 from './img/Picture3.png'
import picture4 from './img/Picture4.png'
import picture5 from './img/Picture5.png'
import picture6 from './img/Picture6.png'
import picture7 from './img/Picture7.png'
import picture8 from './img/Picture8.png'
import picture9 from './img/Picture9.png'
import picture10 from './img/Picture10.png'
import picture11 from './img/Picture11.png'
import picture12 from './img/Picture12.png'
import picture13 from './img/Picture13.png'

const KeyValue = () => {
  useEffect (() => {
    const elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems, {})
  }, [])

  return (
    <div>
      <Navbar />
      <Carousel />
        <div className='container'>
          <lu>
            <h3 style={{ textAlign: 'center', marginTop: '30px', marginBottom: '50px' }}><b>Key-Value Database</b></h3>
            
            <h4>INTRODUCTION</h4>
              <p>Database Key Value (KVD), juga disebut Key Value Store, adalah database non-relasional dengan struktur sederhana untuk penyimpanan data yang handal dan berkinerja tinggi. Setiap entri database terdiri dari kunci, yaitu pengenal unik dan nilai yang terkait.</p>
              <p>Aplikasi Key Value Database memberikan opsi untuk membuat struktur data sendiri di ctrlX Data Layer yang dapat digunakan untuk menyimpan status atau bertukar data dengan aplikasi lain, seperti aplikasi Big Data atau IoT. Penyimpanan persisten adalah mungkin sehingga data dipertahankan bahkan melintasi reboot. Aplikasi Key Value Database tidak cocok untuk pengarsipan data seri waktu dan data historis.</p>

            <h4>INSTALLATION</h4>
              <p>Sebelum menggunakan KVD, diperlukan untuk men-download app KVD serta membeli license pada CtrlX Store. Setelah mengunduh melalui CtrlX store, berikut Langkah-langkah installasi:</p>
              <p>1.	Pastikan versi server yang di download sesuai dengan CtrlX OS yang dimiliki.</p>
              <p>2.	Sambungkan CtrlX CORE dengan device yang digunakan.</p>
              <p>3.	Buka CtrlX OS melalui alamat IP CtrlX CORE, masukkan informasi login yang sesuai. IP address dapat berubah sesuai port dan metode alokasi IP address yang digunakan.</p>
              <div className='pct' >
                <img className="materialboxed" src={picture1} alt="picture1" />
              </div>
              <p>4.	Jika sudah masuk, pastikan keadaan CtrlX CORE dalam keadaan <b><i>service.</i></b></p>
              <div className='pct'>
                <img className="materialboxed" src={picture2} alt="picture2" />
              </div>
              <p>5.	Navigasi ke settings -- installed app -- klik Install Apps from File</p>
              <div className='pct'>
                <img className="materialboxed" src={picture3} alt="picture3" />
              </div>
              <p>6.	Pilih file server yang sudah di download, pastikan memilih file yang benar!</p>
              <p>Tunggu hingga file terinstall. Jika sudah, maka dapat langsung digunakan.</p>

            <h4>USE</h4>
              <p>KVD tidak dapat diakses seperti aplikasi pada umumnya. Untuk dapat mengakses KVD, diperlukan untuk membuka <b>Manage App Data.</b> Untuk membukanya, dapat melakukan berikut:</p>
              <p>1. Membuka ctrlX CORE seperti biasa, dan masuk ke halaman utama.</p>
              <p>2. Memilih opsi <b>Manage App Data</b> sesuai gambar dibawah. Untuk tombolnya pun ada di halaman utama ctrlX CORE</p>
              <div className='pct'>
                <img className="materialboxed" src={picture4} alt="picture4" />
              </div>
              <p>3.	Berikutnya akan dialihkan kedalam halaman aktif. Dimana kita dapat memilih KVD sebagai berikut:</p>
              <div className='pct'>
                <img className="materialboxed" src={picture5} alt="picture5" />
              </div>
              <p>4.	Setelah memilih KVD Configuration, maka akan dialihkan kepada halaman KVD. Dimana pada halaman ini berisikan contoh penggunaan KVD, sample JSON code, serta dokumentasi singkat penggunaan KVD.</p>
              <div className='pct'>
                <img className="materialboxed" src={picture6} alt="picture6"  />
              </div>
              <div className="alert card blue lighten-4 blue-text text-darken-3">
                <div className="card-content">
                  <p><i className="material-icons">info</i>Pastikan ketika ingin menggunakan KVD sebagai database, gunakan <i>removeable storage!</i></p>
                </div>
              </div>
              <p>Yang dapat dilakukan dengan menggunakan KVD adalah sebagai berikut:</p>
              <lu>
                <li><b>Membaca Nilai Node: </b>Dengan memanggil metode baca yang sesuai. Argumennya harus berupa alamat dari node tersebut.</li>
                <li><b>Menulis Nilai Node: </b></li>
                    <p>o Membuat node dari nodeClass Variable dengan memanggil metode tulis yang sesuai. Argumennya harus berupa Variant yang memegang nilai dari jenis data apa pun. (Menggunakan mode <b>create-on-write</b>).</p>
                    <p>o Membuat Node secara Implisit yang tidak ada sebagai node anak dari node root implisit, dengan awalnya menulis nilai kepadanya. Ini dapat dilakukan dengan hanya menulis nilai apa pun, yang menciptakan node implisit dari nodeClass Variable dengan jenis data yang diberikan. Jenis data awal dari node akan diatur dan persisten. Penulisan berikutnya ke nilai node akan gagal, jika jenis data dari jenis data yang ditulis tidak cocok dengan tepat.</p>
                <li><b>Membuat Node: </b>Dengan memanggil metode buat yang sesuai TIDAK DIDUKUNG. Silakan gunakan buat-pada-tulis. Hapus node Hapus node dengan memanggil metode hapus yang sesuai untuk menghapus node. Argumennya harus berupa alamat dari node tersebut. Hanya didukung untuk node implisit.</li>
              </lu>
              <table className='centered'>
                <thead>
                    <tr>
                        <th>Operation</th>
                        <th>Variable</th>
                        <th>Resouce</th>
                        <th>Collection</th>
                        <th>Folder</th>
                        <th>Type</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Read</td>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                        <td></td>
                        <td>X</td>
                    </tr>

                    <tr>
                        <td>Write</td>
                        <td>X</td>
                        <td>X</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>Create</td>
                        <td></td>
                        <td>X</td>
                        <td>X</td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>Delete</td>
                        <td></td>
                        <td>X</td>
                        <td>X</td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>Browse</td>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                    </tr>
                </tbody>
              </table>
              
            <h4>Membuat Dynamic Data Layer</h4>
              <div className="alert card blue lighten-4 blue-text text-darken-3">
                <div className="card-content">
                  <p><i className="material-icons">info</i>Pastikan sudah memiliki App Node-RED untuk melanjutkan bagian berikut!</p>
                </div>
              </div>
              <p>1. Membuka Flow Editor Node-RED</p>
              <p>2.	Membuat flow sebagai berikut:</p>
              <div className='pct'>
                <img className="materialboxed" src={picture7} alt="picture7" /> 
              </div>
              <p>Dimana dengan konfigurasi Function Node sebagai berikut:</p>
              <div className='pct'>
                <img className="materialboxed" src={picture8} alt="picture8" /> 
              </div>
              <p>Dan konfigurasi ctrlX Request Node sebagai berikut:</p>
              <div className='pct'>
                <img className="materialboxed" src={picture9} alt="picture9" /> 
              </div>
              <p>Pastikan pada Function dan Request Node memiliki path yang sama.</p>
              <p>3.	Deploy flow dan klik button di sebelah Timestamp Node</p>
              <p>4.	Lalu buka ctrlX Data Layer, dan masuk kedalam directory samples -- kvd -- implici -- xyz</p>
              <div className='pct'>
                <img className="materialboxed" src={picture10} alt="picture10" /> 
              </div>
              <p>5.	Jika kita buka file abc, maka kita akan melihat nilai value yang disimpan abc seperti berikut:</p>
              <div className='pct'>
                <img className="materialboxed" src={picture11} alt="picture11" /> 
              </div>
              <p>Kita dapat mengubah value dari ctrlX Data Layer secara langsung, mari kita coba ubah menjadi 42 dan klik save.</p>
              <div className='pct'>
                <img className="materialboxed" src={picture12} alt="picture12" /> 
              </div>
              <p>6.	Buat flow seperti pada nomor 2, namun hapus Function Node dan mengubah method dari WRITE menjadi READ. Deploy dan klik tombol disebelah timestamp. Maka akan di dapat hasil sebagai berikut:</p>
              <div className='pct'>
                <img className="materialboxed" src={picture13} alt="picture13" /> 
              </div>
          </lu>
        </div>
    </div>
  )
}

export default KeyValue