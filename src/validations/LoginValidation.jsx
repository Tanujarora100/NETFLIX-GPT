export const checkValidData = (email, password, name) => {
    if (name !== null && name !== '') {
        if (name.length<3) {
            return "UserName is not valid";
        }
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (email === '' || password === '') {
            return "Email ID is not valid or Password is not valid";
        }
        if (!emailRegex.test(email)) {
            return "Email ID is not valid";
        }
        if (!passwordRegex.test(password)) {
            return "Password is not valid";
        }
    }
    return true;
};
