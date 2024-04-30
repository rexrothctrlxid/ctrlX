import React, { useEffect } from 'react'
import M from 'materialize-css';
import Navbar from '../../components/navbar/Navbar'
import Carousel from '../../components/carousel/Carousel'
import pic1 from './img/Picture1.png'
import pic2 from './img/Picture2.png'
import pic3 from './img/Picture3.png'
import pic4 from './img/Picture4.png'
import pic5 from './img/Picture5.png'
import pic6 from './img/Picture6.png'
import pic7 from './img/Picture7.png'
import pic8 from './img/Picture8.png'
import pic9 from './img/Picture9.png'
import pic10 from './img/Picture10.png'
import pic11 from './img/Picture11.png'
import pic12 from './img/Picture12.png'

const Sorting = () => {
  useEffect (() => {
    const elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems, {})
  }, [])

  return (
    <div>
      <Navbar />
      <Carousel />      
      <div className="container">
        <h3 style={{ textAlign: 'center', marginTop: '30px' }}><b>Cara Storing Data kedalam Influxdb dengan ctrlX</b></h3>
        <div className='pct' style={{justifyContent: 'center'}}>
          <img className="materialboxed" src={pic1} alt="picture1" />
        </div>
        
        <h4>A. Node-red + Influxdb</h4>
        <ul>
          <li>1. Buka aplikasi node-red, install pallete influxdb “node-red-contrib-influxdb”</li>
          <div className='pct' style={{justifyContent: 'center'}}>
            <img className="materialboxed" src={pic2} alt="picture2" />
          </div>
        
        <h4>B. Setup aplikasi influxdb</h4>
          <li>1. Masukan SD Card ke dalam ctrlX, Masuk ke menu setting - storage - format SD Card kedalam format Ext4</li>
          <div className='pct' style={{justifyContent: 'center'}}>
            <img className="materialboxed" src={pic3} alt="picture3" />
          </div>
          <li>2. Masuk ke “Manage app data”, edit file konfigurasi influxdb, sesuaikan konfigurasi seperti gambar dibawah ini.</li>
          <div className='pct' style={{justifyContent: 'center'}}>
            <img className="materialboxed" src={pic4} alt="picture4" />
          </div>
          <li style={{ marginTop: '5px', marginBottom: '30px'}}>3. REBOOT ctrlX</li>

        <h4>C. Setting influxDB</h4>
          <li>1. Masuk kedalam aplikasi influxdb, klik “Get Started”</li>
          <div className='pct' style={{justifyContent: 'center'}}>
            <img className="materialboxed" src={pic5} alt="picture5" />
          </div>
          <li>2. Setting “Username”, “Password”, “Nama organisasi”, “Bucket” (Tempat penyimpanan data), klik continue</li>
          <div className='pct' style={{justifyContent: 'center'}}>
            <img className="materialboxed" src={pic6} alt="picture6" />
          </div>
          <li>3. Buat API Token (digunakan untuk mengamankan database), Klik “Data” - “API Tokens” - “Generate API Tokens”</li>
          <div className='pct' style={{justifyContent: 'center'}}>
            <img className="materialboxed" src={pic7} alt="picture7" />
          </div>
          <li>4. Copy API Tokens</li>
          <div className='pct' style={{justifyContent: 'center'}}>
            <img className="materialboxed" src={pic8} alt="picture8" />
          </div>

        <h4>D. Setting Node-RED</h4>
        <li>1. Buka example code untuk konfigurasi node-red dan influxdb</li>
          <div className='pct' style={{justifyContent: 'center'}}>
            <img className="materialboxed" src={pic9} alt="picture9" />
          </div>
          <li>2. Double Klik pada node influxdb, Masukan konfigurasi server, pilih versi 2.0, masukan token, organization, bucket (sesuai dengan settingan influx sebelumnya) dan measurement (data yang kita ingin masukan ke dalam database), lakukan seperti dibawah ini.</li>
          <div className='pct' style={{justifyContent: 'center'}}>
            <img className="materialboxed" src={pic10} alt="picture10" />
          </div>
          <div className='pct' style={{justifyContent: 'center'}}>
            <img className="materialboxed" src={pic11} alt="picture11" />
          </div>
          <li style={{ marginTop: '5px', marginBottom: '30px' }}>3. Apabila setting telah selesai, deploy program</li>
          <li>4. Masuk ke dashboard influxdb, ikuti langkah pada gambar dibawah ini untuk mngecek apakah nilai sudah berhasil masuk atau belum.</li>
          <div className='pct' style={{justifyContent: 'center'}}>
            <img className="materialboxed" src={pic12} alt="picture12" />
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Sorting