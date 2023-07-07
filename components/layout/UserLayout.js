import useAuth from 'api/auth'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import { Children } from 'react'

function UserLayout({Children}){
    const {user} = useAuth({middleware: 'user'})

    return (
        <div className='relative overflow-hidden'>
			<Navbar/>
			<main>{Children}</main>
			<Footer/>
		</div>
    )
}

export default UserLayout