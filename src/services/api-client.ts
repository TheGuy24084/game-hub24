import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "1949a52846894c2a8cf4d7f8a72b7684"
    }
})