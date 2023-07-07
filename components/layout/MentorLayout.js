import Navbar from 'components/navbar'
import useAuth from 'api/auth'
import Footer from 'components/footer'

function MentorLayout({children}){
    const {user} = useAuth({middleware: 'mentor'})

    return (
        <div className='relative overflow-hidden'>
			<Navbar/>
			{children}
			<Footer/>
		</div>
    )
}

export default MentorLayout