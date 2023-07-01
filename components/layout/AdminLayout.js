import useAuth from 'api/auth'
import Navbar from 'components/navbar'
import Footer from 'components/footer'

function AdminLayout({children}){
    const {user} = useAuth({
        middleware: 'admin',
        redirectIfAuthenticated: '/'
    })

    return (
        <div className='relative overflow-hidden'>
			<Navbar/>
			{children}
			<Footer/>
		</div>
    )
}

export default AdminLayout