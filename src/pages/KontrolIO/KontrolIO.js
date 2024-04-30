import React, { useEffect } from 'react'
import M from 'materialize-css'
import Navbar from '../../components/navbar/Navbar'
import Carousel from '../../components/carousel/Carousel'
import picture1 from './img/picture1.png'
import picture2 from './img/picture2.png'
import picture3 from './img/picture3.png'
import picture4 from './img/picture4.png'
import picture5 from './img/picture5.png'
import picture6 from './img/picture6.png'
import picture7 from './img/picture7.png'

const KontrolIO = () => {
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
          <h3 style={{ textAlign: 'center', marginTop: '30px', marginBottom: '50px' }}><b>Kontrol I/O melalui Node-RED</b></h3>

          <h4>INTRODUCTION</h4>
            <p>Selain menggunakan PLC, I/O CtrlX juga dapat di kontrol melalui aplikasi lain seperti Node-RED. hal tersebut dapat terjadi karena CtrlX menggunakan sistem Data Layer dimana setiap apps yang di install dalam CtrlX akan berbagi satu platform data yang sama, sehingga setiap apps dapat saling mengakses data satu sama lain dengan mudah.</p>
            
          <h4>A. Memepersiapkan Node-RED</h4>
            <p>1. Pastikan Node-RED sudah di install pada CtrlX</p>
            <p>2.	Pastikan CtrlX sudah memiliki License Node-RED</p>
            <p>3.	Koneksi internet diperlukan, namun bersifat opsional, berguna untuk mendownload beberapa Pallete(plug-in/library)</p>
            <p>4.	Buka Flow Editor pada Apps Node-RED</p>
            <div className='pct' style={{justifyContent: 'center'}}>
              <img className="materialboxed" src={picture1} alt="picture1" />
            </div>

          <h4>B. Membuat Flow Pada Node-RED</h4>
            <p>Flow merupakan untaian Node. dalam kasus ini Flow dibuat seperti pada gambar dibawah</p>
            <p>1.	Buat Flow untuk mengontrol I/O (ikuti contoh dibawah ini)</p>
            <div className='pct' style={{justifyContent: 'center'}}>
              <img className="materialboxed" src={picture2} alt="picture2" />
            </div>
            <p>2.	Untuk melakukan setting terhadap setiap Node, dapat dilakukan dengan cara mengklik dua kali node yang akan di setting. untuk memonitor channel 1 pada IO, cukup dengan cara menyalin path channel 1 di data layer,kemudian tempelkan pada kolom Path. pada Subscription, cukup isikan IP ctrlX dan kredensial CtrlX. lakukan pada semua node di setiap flow</p>
            <div className='pct' style={{justifyContent: 'center'}}>
              <img className="materialboxed" src={picture3} alt="picture3" />
            </div>
            <p>3.	Jika sudah selesai, tekan Deploy di pojok kanan atas</p>
            <div className='pct' style={{justifyContent: 'center'}}>
              <img className="materialboxed" src={picture4} alt="picture4" />
            </div>

          <h4>C. Menampilkan Dashboard Node-RED</h4>
            <p>1.	untuk melihat Dashboard, buka halaman utama CtrlX, kemudian pilih Node-RED, kemudian pilih Dashboard</p>
            <div className='pct' style={{justifyContent: 'center'}}>
              <img className="materialboxed" src={picture5} alt="picture5" />
            </div>
            <p>2.	kemudian tampilan dashboard akan muncul seperti berikut.</p>
            <div className='pct' style={{justifyContent: 'center'}}>
              <img className="materialboxed" src={picture6} alt="picture6" />
            </div>
            <div className='pct' style={{justifyContent: 'center'}}>
              <img className="materialboxed" src={picture7} alt="picture7" />
            </div>
        </lu>
      </div>
    </div>
  )
}

export default KontrolIO