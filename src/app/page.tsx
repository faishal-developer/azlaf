import Topbar from '@/component/Home/Navbar/Topbar.view'
import './globals.css'
import Navbar from '@/component/Home/Navbar/Navbar'
import Banner from '@/component/Home/Banner/Banner.view'
import IconSection from '@/component/Home/IconSection/IconSection'
import Products from '@/component/Home/Product/Products'
import MobileBanner from '@/component/Home/MobileBanner/MobileBanner.view'
import {homeStyle as style} from './Static/home.tailwind';

export default async function Home() {
  return (
    <main>
      
      <div>
        <div className={style.mobileNavbar}>
          <MobileBanner/>
        </div>
        <div className={style.pcNavbar}>
          <Topbar/>
          <Navbar/>
          <Banner/>
        </div>
      </div>
      
      <IconSection/>
      <Products/>
      <div className='mt-16'>
        <Banner/>
      </div>
    </main>
  )
}
