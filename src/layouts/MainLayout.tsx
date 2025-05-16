import { Container } from '@/components/container'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col h-screen bg-[#0a0a0a]'>
        <Header />

        <Container className="flex-grow">
          <main className='flex-grow'> 
            <Outlet />
          </main>
        </Container>

        <Footer />
    </div>
  )
}

export default MainLayout
