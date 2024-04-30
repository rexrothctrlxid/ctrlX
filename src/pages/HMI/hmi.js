/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import M from 'materialize-css';
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
import picture11 from './img/Picture11.png'
import picture12 from './img/Picture12.png'
import picture13 from './img/Picture13.png'
import picture14 from './img/Picture14.png'
import picture15 from './img/Picture15.png'
import picture16 from './img/Picture16.png'
import picture17 from './img/Picture17.png'
import picture18 from './img/Picture18.png'
import picture19 from './img/Picture19.png'
import picture20 from './img/Picture20.png'
import picture21 from './img/Picture21.png'
import picture22 from './img/Picture22.png'
import picture23 from './img/Picture23.png'



const HMI = () => {
  useEffect (() => {
    const elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems, {})
  }, [])

  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="container">
        <lu>
        <h3 style={{ textAlign: 'center', marginTop: '30px', marginBottom: '50px' }}><b>HMI (WebIQ & Node-RED)</b></h3>
        <p>HMI atau Human-Machine Interface adalah antarmuka yang memungkinkan interaksi antara manusia dan mesin. HMI bertujuan untuk memudahkan pengguna atau operator dalam mengontrol, memantau, dan berinteraksi dengan peralatan atau sistem mesin. Pada CtrlX, terdapat aplikasi yang tersedia pada CtrlX Store yang dapat digunakan, yaitu WebIQ dan Node-Red. Pada artikel ini akan menjelaskan tahapan dari installasi hingga penggunaannya.</p>
        
        <h4 style={{ textAlign: 'center', marginTop: '50px' }}>WebIQ</h4>
        
        <h4>INTRODUCTION</h4>
          <p>WebIQ merupakan sistem HMI yang bekerja pada web. Dikembangkan oleh Smart HMI, memiliki fitur desain yang responsif untuk semua ratio layar yang digunakan. Sehingga tampilan HMI dapat dilihat melalui smartphone hingga desktop dengan lancar. WebIQ menggunakan basis open-web technology seperti OPC-UA, HTML5, CSS, dan JavaScript. WebIQ menyediakan support penuh hingga layout HMI dan custom widgets.</p>
          <p>WebIQ terdiri dari dua aplikasi, yaitu</p>
          <p style={{ marginTop: '5px' }}><b>- WebIQ Server:</b>Merupakan runtime app untuk web HMI. Server diinstall langsung pada CtrlX CORE <i>constroller</i></p>
          <p style={{  marginBottom: '5px' }}><b>- WebIQ Designer:</b>Merupakan aplikasi untuk mendesain dan membuat web HMI tanpa <i>programming</i></p>
        
        <h4>INSTALLATION</h4>
          <p>Sebelum menggunakan webIQ, diperlukan untuk men-download server WebIQ serta membeli license pada CtrlX Store.</p>
          <h6><b>WebIQ Server</b></h6>
          <p>Untuk menggunakan WebIQ Designer, diperlukan untuk meng-install WebIQ server pada CtrlX CORE. Setelah men-download server melalui CtrlX store, berikut Langkah-langkah installasi:</p>
          <p>1. Pastikan versi server yang di download sesuai dengan CtrlX OS dan WebIQ Designer yang dimiliki.</p>
          <p>2. Sambungkan CtrlX CORE dengan device yang digunakan. Petunjuk dapat dilihat disini. </p>
          <p>3. Buka CtrlX OS melalui alamat IP CtrlX CORE, masukkan informasi login yang sesuai. IP address dapat berubah sesuai port dan metode alokasi IP address yang digunakan.</p>
          <div className='pct'>
              <img className="materialboxed" src={picture1} alt="picture1" />
            </div>
          <p>4. Jika sudah masuk, pastikan keadaan CtrlX CORE dalam keadaan <b><i> service.</i></b></p>
          <div className='pct'>
              <img className="materialboxed" src={picture2} alt="picture2" />
            </div>
          <p>5. Navigasi ke settings -- installed app -- klik Install Apps from File </p>
          <div className='pct'>
              <img className="materialboxed" src={picture3} alt="picture3" />
            </div>
          <p>6. Pilih file server yang sudah di download, pastikan memilih file yang benar!</p>
          <div className='pct'>
              <img className="materialboxed" src={picture4} alt="picture4" />
            </div>
          <p>Tunggu hingga file terinstall. Jika sudah, maka dapat langsung digunakan. Jika belum memiliki license, maka dapat melihat penjelasannya disini.</p>
          
          <h6 style={{ marginTop: '30px' }}><b>WebIQ Designer</b></h6>
          <p>Setelah WebIQ Server telah di install, maka perlu menginstall WebIQ Designer. Untuk WebIQ Designer, diinstall langsung pada os device penertjaan. Dimana langkah sebagai berikut:</p>
          <p>1. Download file install disini</p>
          <p>2. Install WebIQ Designer sesuai dengan panduan instalasi. Pastikan untuk mendownload support untuk ctrlX</p>
          <div className='pct'>
            <img className="materialboxed" src={picture5} alt="picture5" />
          </div>
          <p>3. Setelah dipastikan bahwa sudah terpasang, klik kanan pada shortcut designer dan klik properties, lakukan perubahan pada “Target” sebagai berikut:</p>
          <lu>
            <li>Tambahkan string “ --ws-host=xxx.xxx.xxx.xxx” (di mana xxx.xxx.xxx.xxx adalah IP CORE ctrlx Anda alamat)</li>
            <li>Tambahkan string “ --ws-port=10123” (10123 adalah alamat port default Server WebIQ)</li>
            <li>Tambahkan string “ --user-data=webiq-designerctrlx” (di mana “webiq-designerctrlx” adalah ruang kerja nama terletak di folder %AppData%) </li>
            <li>Pastikan ada ruang kosong di antara setiap entri </li>
          </lu>
          <div className='pct'>
            <img className="materialboxed" src={picture6} alt="picture6" />
          </div>

        <h4>USE</h4>
          <h6><b>WebIQ Server</b></h6>
          <p>Setelah server terpasang, kita dapat mengakses server. Ketika pertama kali mengakses server WebIQ, kita akan diarahkan untuk membuat credential login seperti berikut:</p>
          <div className='pct'>
            <img className="materialboxed" src={picture7} alt="picture7" />
          </div>
          <p>Setelah membuat akun untuk login, kita akan dibawa pada tampilan utama sebagai berikut: </p>
          <div className='pct'>
            <img className="materialboxed" src={picture8} alt="picture8" />
          </div>
          <p>-- HMI Projects: Halaman yang menjukkan proyek-proyek HMI yang dimiliki. Dimana pengguna dapat mengatur konfigurasi HMI tiap proyek serta mengubah status HMI.</p>
          <p>-- License Activation: Halaman yang digunakan untuk mengaktivasi lisensi. </p>
          <p>-- License Management: Halaman yang menunjukkan lisensi yang digunakan serta berapa lama waktu lisensi dapat digunakan. Juga tersedia informasi dimana saja lisensi dipasang.</p>
          <p>-- Settings: Halaman yang digunakan untuk mengatur WebIQ server.</p>
          <p>-- Version Information: Halaman yang menunjukkan versi WebIQ server yang digunakan.</p>
          <p>-- Logout: Digunakan untuk keluar dari WebIQ server dan kembali ke halaman CtrlX OS.</p>
          <h6 style={{ marginTop: '30px' }}><b>WebIQ Designer</b></h6>
          <p>Setelah menginstall WebIQ Designer dan melakukan konfigurasi agar dapat menggunakan lisensi CtrlX, akan diarahkan pada tampilan berikut:</p>
          <div className='pct'>
            <img className="materialboxed" src={picture9} alt="picture9" />
          </div>
          <p>Dimana pada halaman utama, kita dapat melihat list proyek HMI yang telah dibuat baik secara lokal maupun yang ada pada CtrlX. Dimana fitur yang ada pada WebIQ Designer adalah sebagai berikut:</p>
          <p>-- New HMI Project: Digunakan untuk membuat proyek HMI baru.</p>
          <p>-- Import HMI Project: Digunakan untuk mengimport proyek HMI yang ada pada lokal.</p>
          <p>-- Reload HMI Project List: Digunakan untuk memuat ulang proyek yang ada.</p>
          <p>-- Remote Runtime Manager: Digunakan untuk mengakses Runtime Manager secara remote menggunakan alamat</p>
          <p>-- IP. View Demos: Melihat demo HMI yang tersedia pada website WebIQ.</p>
          <p>-- What’s New: Melihat informasi terbaru seputar WebIQ.</p>
          <p style={{ marginTop: '30px' }}>Ketika menggunakan membuat atau merombak suatu proyek, kita akan diarahkan keapda tampilan berikut</p>
          <div className='pct'>
            <img className="materialboxed" src={picture13} alt="picture13" />
          </div>
          <p>1. Navbar: Berisikan menu yang dimana dapat menyimpan proyek, melihat live preview, mengedit proyek, dan melihat tampilan proyek dengan ratio layar yang berbeda.</p>
          <p>2. Widget List: Berisikan widget yang dapat digunakan pada proyek. Untuk menggunakannya, dapat langsung drag and drop saja.</p>
          <p>3. Config, Style, dan Hierarchy Tab: Merupakan tab untuk mengedit widget secara satu persatu dan mengetahui dimana widget diletakkan.</p>
          <p>4. Edit Area: Tempat untuk membuat tampilan proyek.</p>

      <h4 style={{ textAlign: 'center', marginTop: '50px' }}>Node-RED</h4>
      <h4>INTRODUCTION</h4>
          <p>Node-RED adalah platform alur kerja visual yang dikembangkan oleh IBM, dirancang untuk mempermudah pembuatan alur kerja otomatis tanpa memerlukan keahlian pemrograman yang mendalam. Dengan antarmuka grafis yang intuitif, pengguna dapat dengan mudah menyusun dan menghubungkan "node" untuk menjalankan fungsi atau tugas tertentu. Aplikasi ini mendukung berbagai platform dan protokol, memungkinkan integrasi yang fleksibel dengan perangkat dan sistem yang beragam.</p>
          <p>Node-RED terdiri dari tiga komponen utama, yaitu node panel, the sheets panel and the info and debug panel. Tab Dasbor Node-RED memberikan akses ke dasbor data langsung yang dibuat melalui serangkaian node dari panel node pada Editor Alur. Tata letak dasbor harus dianggap sebagai grid, di mana berbagai objek dapat diatur sesuai dengan kebutuhan aplikasi.</p>
        
      <h4>INSTALLATION</h4>
        <p>Sebelum menggunakan Node-RED diperlukan untuk men-download-nya dan membeli license pada CtrlX Store. Setelah men-download kedua server melalui CtrlX store, berikut Langkah-langkah installasi:</p>
        <p>1. Pastikan versi server yang di download sesuai dengan CtrlX OS yang dimiliki.</p>
        <p>2. Sambungkan CtrlX CORE dengan device yang digunakan. </p>
        <p>3. Buka CtrlX OS melalui alamat IP CtrlX CORE, masukkan informasi login yang sesuai. IP address dapat berubah sesuai port dan metode alokasi IP address yang digunakan.</p>
        <div className='pct'>
          <img className="materialboxed" src={picture1} alt="picture1" />
        </div>
        <p>4. Jika sudah masuk, pastikan keadaan CtrlX CORE dalam keadaan <b><i> service.</i></b></p>
        <div className='pct'>
          <img className="materialboxed" src={picture2} alt="picture2" />
        </div>
        <p>5. Navigasi ke settings -- installed app -- klik Install Apps from File </p>
        <div className='pct'>
          <img className="materialboxed" src={picture4} alt="picture4" />
        </div>
        <p>6. Pilih file yang sudah di download, pastikan memilih file yang benar</p>
        <div className='pct'>
          <img className="materialboxed" src={picture14} alt="picture14" />
        </div>
        <p>Tunggu hingga file terinstall. Jika sudah, maka dapat langsung digunakan</p>
      
      <h4>USE</h4>      
        <p>Pada Node-RED, kita dapat melakukan banyak hal dari mengambil data melalui data layer yang dimiliki oleh CtrlX hingga HMI, pada dokumentasi ini akan berfokuskan pada pengaplikasian Node-RED sebagai HMI. Pertama, ketika membuka dashboard Node-RED, kita akan disuguhkan dengan tampilan sebagai berikut:</p>
        <div className='pct'>
          <img className="materialboxed" src={picture11} alt="picture11" />
        </div>
        <p>Untuk dapat menggunakan node-RED sebagai HMI, kita dapat menggunakan node dashboard. Pada ctrlX node ini sudah tersedia, namun jika belum, node dapat diinstal disini. Pastikan ctrlX memiliki koneksi internet untuk mendownload pallet/node. Pada node dashboard, dilengkapi dengan widgets yang berguna untuk membuat HMI, dimana nama dari node merepresentasikan widget yang digunakan.</p>
        <div className='pct'>
              <img className="materialboxed" src={picture12} alt="picture12" />
            </div>
        <p>Pada ctrlX, node-RED memiliki node khusus untuk mengakses data layer yang bekerja dengan sistem request dan subscription.</p>
        <div className='pct'>
          <img className="materialboxed" src={picture15} alt="picture15" />
        </div>
        <p>Untuk melihat dashboard, terdapat dua cara yang dapat dilakukan. Dimana adalah: </p>
        <p>1. Melaui ctrlX CORE</p>
        <div className='pct'>
          <img className="materialboxed" src={picture16} alt="picture16" />
        </div>
        <p>2. Melalui Node-RED Flow Editor</p>
        <div className='pct'>
          <img className="materialboxed" src={picture17} alt="picture17" />
        </div>
        <p>Untuk mengatur dashboard, kita dapat menggunakan pengaturan dashboard, untuk mengakses pengaturan, buka toolbar pada bagian kanan dari flow-editor, dan klik tanda panah bawah dan klik dashboard seperti pada ilustrasi berikut:</p>
        <div className='pct'>
          <img className="materialboxed" src={picture18} alt="picture18" />
        </div>
        <p>Pada dashboard, kita dapat menemukan 5 bagian utama. Pertama, tab Layout digunakan untuk mengatur elemen pada dashboard untuk HMI. Tab bekerja seperti halaman. Dimana tampilan tiap tab dapat berbeda-beda dan disesuaikan dengan kebutuhan. Berikutnya, di dalam tab terdapat group yang bekerja seperti div pada html. Sehingga pada mengaturan layout, kita dapat mengatur perubahan layout sesuai group. Terakhir, dalam group terdapat elemen yang digunakan pada dashboard.</p>
        <div className='pct'>
          <img className="materialboxed" src={picture19} alt="picture19" />
        </div>
        <p>Kita dapat mengatur layout dari tab dengan menggunakan layout pada opsi tab. Sistem yang digunakan adala grid dan bekerja secara drag and drop untuk mengubah layoutnya. Dimana tampilannya sebagai berikut:</p>
        <div className='pct'>
          <img className="materialboxed" src={picture20} alt="picture20" />
        </div>
        <p>Kedua, tab Site yang memungkinkan pengaturan antarmuka web dashboard secara keseluruhan. Dimana kita dapat mengatur judul, opsi tampilan web, format tanggal yang digunakan, dan pengaturan untuk bentuk widget.</p>
        <div className='pct'>
          <img className="materialboxed" src={picture21} alt="picture21" />
        </div>
        <p>Ketiga, tab Theme digunakan untuk mengatur tema yang digunakan oleh web dashboard. Pengaturan yang dapat diubah seperti mode dan font yang digunakan.</p>
        <div className='pct'>
          <img className="materialboxed" src={picture22} alt="picture22" />
        </div>
        <p>Dan yang terakhir, terdapat tab Angular yang berisikan pengaturan warna pada web</p>
        <div className='pct'>
          <img className="materialboxed" src={picture23} alt="picture23" />
        </div>
        </lu>
      </div>
      
    </div>
  )
}

export default HMI