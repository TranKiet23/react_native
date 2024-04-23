import axios from "axios";

export const loginUser = async (data) => {
        return axios.post(
                `https://gw-tms-staging.gonsa.vn` + `/auth/api/login`, data)
};


export const getProfiles = (token) => {
        return axios.get(
                `https://gw-tms-staging.gonsa.vn` + `/auth/api/v1/users/profile`,
                { headers: {"Authorization" : `Bearer ${token}`} })
};

export const getLists = (token, params) => {
        return axios.get(
                `https://gw-tms-staging.gonsa.vn` + `/master-data/api/v1/gonsa/storage-conditions${params}`,
                { headers: {"Authorization" : `Bearer ${token}`} })
};