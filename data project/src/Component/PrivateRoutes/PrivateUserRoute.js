import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PrivateUserRoute = ({ children }) => {
    const [token, setToken] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (!token) {
            navigate("/logIn")
        } else {
            setToken(token);
        }
    }, [])

    return (
        token ? children : false
    )
}

export default PrivateUserRoute;