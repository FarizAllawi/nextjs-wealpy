
import useAuth from 'api/auth'
import Navbar from 'components/navbar'
import Footer from 'components/footer'

function GuestLayout({children}){
    return (
        <div className='relative overflow-hidden'>
			<Navbar/>
			<main>{children}</main>
			<Footer/>
		</div>
    )
}

export default GuestLayout