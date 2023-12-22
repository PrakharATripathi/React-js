import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Forgot from "./pages/Forgot"
import Dashboard from "./pages/Dashboard"
import Layout from "./components/Layout"



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route index path="/forgot" element={<Forgot />} />
          <Route path="/" element={<Layout />}>
            <Route index path="/dashboard" element={<Dashboard />} />
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="blogs" element={<Blogs />} /> */}
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
