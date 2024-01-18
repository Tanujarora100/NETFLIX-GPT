import { useNavigate } from 'react-router-dom';
const navigate = useNavigate()

export const goToSignUpPage = () => {
    navigate('/signup')
}

export const goToHomePage = () => {
    navigate('/')
}