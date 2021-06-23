import axios from "axios";

const baseUrl = "https://api-solar-system.herokuapp.com";

export const getAllPlanetsData = () => {
    let response = axios.get(`${baseUrl}/planets`);
    return response;
}