import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'
import Team from './components/Team'
// import Waitlist from './components/Waitlist'
import Comming from './components/Comming'
import { useEffect, useState } from 'react'
import Aos from 'aos'
import TokenSection from './components/TokenSection'
import preloader_gif from './assets/img/preloader.gif'

export default function App() {
  const [preloader, setPrelaoder] = useState(true)
  useEffect(() => {
    Aos.init({ duration: 1400 })
  }, [])
  useEffect(() => {
    setTimeout(() => {
      setPrelaoder(false)
    }, 3000)
  }, [preloader, setPrelaoder])
  return (
    <>
      {preloader ?
        <div className="preloader position-fixed top-0 start-0 w-100 vh-100 bg-primary" style={{ zIndex: '10' }}>
          <img src={preloader_gif} className='w-100 h-100 object-fit-cover' alt="" />
        </div>
        :
        <>
          <Header />
          <Banner />
          <TokenSection />
          <About />
          <Tokenomics />
          <Roadmap />
          <Team />
          {/* <Waitlist /> */}
          <Comming />
          <Footer />
        </>
      }
    </>
  )
}
