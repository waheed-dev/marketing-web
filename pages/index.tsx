import type { NextPage } from 'next'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Features from '../components/features/Features'
import Mission from '../components/mission/Mission'
import Steps from '../components/steps/Steps'
import Footer from  '../components/footer/footer'
const Home: NextPage = () => {
  return (
    <div className={''}>

        <Hero/>
        <Features/>
        <Mission/>
        <Steps/>
    </div>
  )
}

export default Home
