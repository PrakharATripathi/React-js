import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PrivateLogInRoute = ({ children }) => {
    const [token, setToken] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            navigate("/user")
        } else {
            setToken(token);
        }
    }, [])
  
    return (
        token ? false : children
    )
}

export default PrivateLogInRoute;
