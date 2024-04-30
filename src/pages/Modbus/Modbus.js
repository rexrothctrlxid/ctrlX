/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import Navbar from '../../components/navbar/Navbar'
import Carousel from "../../components/carousel/Carousel"
import { useEffect } from "react"
import M from "materialize-css"
import picture1 from './img/picture1.png'
import picture2 from './img/picture2.png'
import picture3 from './img/picture3.png'
import picture4 from './img/picture4.png'
import picture5 from './img/picture5.png'
import picture7 from './img/picture7.png'

const Modbus = () => {
  useEffect (() => {
    const elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems, {});
  }, []);

  return(
    <div>
      <Navbar />
      <Carousel />
      <div className="container">
        <h3 style={{ textAlign: 'center', marginTop: '30px' }}><b>Cara Akses Modbus TCP ctrlX</b></h3>
        
        <h4>Requirements:</h4>
          <ul>
            <li>ctrlX CORE - x3 atau x7 dengan ctrlX OS</li>
            <li>Aplikasi Modbus TCP minimum versi 1.20 + license</li>
            <li>Device Slave/Server</li>
          </ul>
        
        <h4 style={{ marginTop: '30px' }}>Topologi Modbus</h4>
          <div className='pct' style={{justifyContent: 'center'}}>
            <img className="materialboxed" src={picture7} alt="picture7" />
          </div>
        
        <h4>Set-Up Komunikasi</h4>
          <ul>
            <li>1. Buka ctrlX web server, click Modbus TCP, click “Add Modbus TCP Device”.</li>
            <div className='pct' style={{justifyContent: 'center'}}>
              <img className="materialboxed" src={picture1} alt="picture1" />
            </div>
            <li>2. Masukkan informasi Modbus TCP pada window (nama, IP addres, Port, dan unit ID) lalu klik save.</li>
            <div className='pct' style={{justifyContent: 'center'}}>
              <img className="materialboxed" src={picture2} alt="picture2" />
            </div>
            <li>3. Klik pada tombol (+) untuk menambahkan subskripsi baru, kemudian isi subskripsi</li>
            <div className='pct' style={{justifyContent: 'center'}}>
              <img className="materialboxed" src={picture3} alt="picture3" />
            </div>
            <div className='pct' style={{justifyContent: 'center'}}>
              <img className="materialboxed" src={picture4} alt="picture4" />
            </div>
            <li>4. Setelah device berhasil terhubung, maka tampilanya akan seperti dibawah ini.</li>
            <div className='pct' style={{justifyContent: 'center'}}>
              <img className="materialboxed" src={picture5} alt="picture5" />
            </div>
          </ul>
      </div>
    </div>
  )
}

export default Modbus
