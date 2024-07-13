import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Features from '../../components/Features'
import Process from '../../components/Process'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <Header />
        <div className='mx-auto container'>
            <Hero />
            <Features />
            <Process />
        </div>
        <Footer />
    </div>
  )
}

export default Home
