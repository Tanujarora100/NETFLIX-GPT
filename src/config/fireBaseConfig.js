
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyBbdsLr9bkVmnqkragRuWflguxGI2w5daI",
    authDomain: "netflix-gpt-b06da.firebaseapp.com",
    projectId: "netflix-gpt-b06da",
    appId: "1:1093133802935:web:c284961959cce2a54adc32",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
export default auth;