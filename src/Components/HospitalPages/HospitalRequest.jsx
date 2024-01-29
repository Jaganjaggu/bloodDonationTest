import React, { useEffect } from 'react'
import './HospitalRequest.css';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import { getRequetsAPI, getUserDetailsAPI, updateRequestAPI } from '../../Services/allAPI';

function HospitalRequest() {
  const [requests, setRequests] = useState([])

  const handleGetReqests = async () => {
    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await getRequetsAPI(reqHeader)
      setRequests(result.data)
    }

  }
  console.log(requests);



  useEffect(() => {
    handleGetReqests()
  }, [])


  const handleRequest = async (status, personid, personname) => {
    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const reqBody = {
        requestStatus: status,
        personid,
        personname
      }
      const result = await updateRequestAPI(reqBody, reqHeader)
      console.log(result);
    }
    handleGetReqests()

  }

  return (
    <div className='action-container' style={{ marginBottom: "60px" }}>
      <div className='action-section'>
        <h1>Requests</h1>
        <p>See The Activity</p>
      </div >
      {
        requests?.map((item) => (
          <div className='list-container' >
            <div className='list-section'>
              <div className='section1'>
                <div className='icon-section'>
                  <div className='section1-icon' >
                    <i class="ri-hospital-fill"></i>
                  </div>
                </div>
                <div >
                  <h4>{item.personname}</h4>
                  <h6>{item.location}</h6>

                </div>
              </div>
              <div className='button-section d-flex ' >
                {
                  item.requestStatus === "Accepted" || item.requestStatus === "Rejected" ?
                    (
                      <div>
                        <button className='btn btn-warning'>{item.requestStatus}</button>
                      </div>
                    ) :
                    (
                      <>
                        <button onClick={() => handleRequest("Accepted", item.personid,item.personname)} className='btn btn-success me-3'>Accept</button>
                        <button onClick={() => handleRequest("Rejected", item.personid,item.personname)} className='btn btn-danger'>Reject</button>

                      </>
                    )
                }

              </div>
            </div>
          </div>
        ))
      }


    </div>
  )
}
export default HospitalRequest

