export const checkValidData = (email, password) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (email === '' || password === '') {
        return "Email ID is not valid or Password is not valid";
    } else if (!emailRegex.test(email)) {

        return "Email ID is not valid";
    }
    else if (!passwordRegex.test(password)) {
        return "Password is not valid";
    }

    return true;
};
