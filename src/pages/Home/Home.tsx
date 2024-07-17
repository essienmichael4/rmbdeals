import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Features from '../../components/Features'
import Process from '../../components/Process'
import Footer from '../../components/Footer'
import Faqs from '@/components/Faqs'
import Rate from '@/components/Rate'

const Home = () => {
  return (
    <div className='w-full overflow-x-hidden'>
        <Header />
        <div className='mx-auto container'>
            <Hero />
            <Rate />
            <Features />
            <Process />
            <Faqs />
        </div>
        <Footer />
    </div>
  )
}

export default Home
