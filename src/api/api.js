import axios from "axios";

export default axios.create({
    baseURL: `https://api.grubytech.pl/wp-json/wp/v2/`
});