import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

// register API
export const registerAPI = async (users) => {
    return await commonAPI("POST", `${BASE_URL}/users/register`, users, "")
}

// login
export const loginAPI = async (users) => {
    return await commonAPI("POST", `${BASE_URL}/users/login`, users, "")
}

//getallhospitals

export const getallhospitalsAPI = async (reqHeader) => {
    return await commonAPI("GET", `${BASE_URL}/users/hospital`, "", reqHeader)
}

//insertdonateStatus

export const insertdonatestatusAPI = async (reqbody, reqHeader) => {
    return await commonAPI("POST", `${BASE_URL}/donate/donatestatus`, reqbody, reqHeader)
}

//getpersondonatestatus

export const getpersondonatestatusAPI = async (reqHeader) => {
    return await commonAPI("GET", `${BASE_URL}/donate/getpersondonatestatus`, "", reqHeader)
}

//requestblood

export const requestbloodAPI = async (reqbody, reqHeader) => {
    console.log(reqbody, reqHeader);
    return await commonAPI("POST", `${BASE_URL}/request/bloodrequest`, reqbody, reqHeader)
}

//actions

export const actionAPI = async (reqHeader) => {
    console.log(reqHeader);
    return await commonAPI("GET", `${BASE_URL}/actions/actionstatus`, "", reqHeader)

}

// dlete blood request
export const deleteBloodRequestAPI = async (id,reqHeader) => {
    console.log(id,reqHeader);
    return await commonAPI("DELETE",`${BASE_URL}/request/deletebloodrequest/${id}`,{},reqHeader)
}

// Hospital________________________
export const getHospitalDonateStatusAPI = async (reqHeader) => {
    console.log(reqHeader);
    return await commonAPI("GET", `${BASE_URL}/hospital/donatestatus`, "", reqHeader)
}

export const getUserDetailsAPI = async (id,reqHeader) => {
    console.log(reqHeader);
    return await commonAPI("GET", `${BASE_URL}/hospital/userdetails/${id}`, "", reqHeader)
}

// update donate status to accept or reject 
export const handleUpdateStatusAPI = async (reqBody,reqHeader) => {
    return await commonAPI("PUT",`${BASE_URL}/hospital/updatedonatestatus`,reqBody,reqHeader)
}


export const getRequetsAPI = async (reqHeader) => {
    console.log(reqHeader);
    return await commonAPI("GET", `${BASE_URL}/hospital/requests`, "", reqHeader)
}


// update request status to accept or reject 
export const updateRequestAPI = async (reqBody,reqHeader) => {
    console.log(reqBody,"api");
    
    return await commonAPI("PUT",`${BASE_URL}/hospital/updaterequestsstatus`,reqBody,reqHeader)
}

//total donations

export const totalDonationAPI = async () => {
    return await commonAPI("GET", `${BASE_URL}/donate/total`, "", "")
}

//total requests

export const totalRequestsAPI = async () => {
    return await commonAPI("GET", `${BASE_URL}/requests/total`, "", "")
}