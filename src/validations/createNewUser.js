import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/fireBaseConfig";
export const createNewUser = createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage + errorCode);
    });