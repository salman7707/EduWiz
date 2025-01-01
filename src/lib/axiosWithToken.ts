import axios from "axios";

const axiosWithToken = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_APIURL}`,
    headers: {
        "Content-Type": "application/json"
    }
})

axiosWithToken.interceptors.request.use(
    (config) => {
        const userString = localStorage.getItem("User");
        if (userString) {
            const user = JSON.parse(userString);
            config.headers.Authorization = `${user.token}`;
            // console.log("Auth Token ", config.headers.Authorization)
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosWithToken;