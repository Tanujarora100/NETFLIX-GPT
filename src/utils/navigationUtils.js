

import { useNavigate } from 'react-router-dom';
export const goToSignUpPage = () => {
    const navigateTo = useNavigate();
    navigateTo('/signup');
};

export const goToHomePage = () => {
    const navigateTo = useNavigate();
    navigateTo('/');
}
export const goToBrowsePage = () => {
    const navigateTo = useNavigate();
    navigateTo('/browse');
}