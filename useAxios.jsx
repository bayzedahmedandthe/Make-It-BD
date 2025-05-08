import axios from "axios";

const customAxios = axios.create({
 baseURL: "http://localhost:5000/"
});

const useAxios = () => {
    return customAxios;
}

export default useAxios;