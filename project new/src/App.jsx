import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
// console.log(process.env.REACT_APP_APPWRITE_URL)
// console.log(import.meta.env.VITE_APPWRITE_URL)
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
      .then((res) => {
        if (res) {
          dispatch(login({ res }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])
  return !loading ? (

    <div className='min-h-screen flex flex-wrap  content-between  bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
         todo:{/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>

  ) : null
}

export default App
