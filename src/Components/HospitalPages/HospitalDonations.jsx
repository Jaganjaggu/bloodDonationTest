import React, { useEffect } from 'react'
import './HospitalDonations.css';
import { useState } from 'react';
import { getHospitalDonateStatusAPI, getUserDetailsAPI, handleUpdateStatusAPI } from '../../Services/allAPI';

function HospitalDonations() {
  const [hospitalDonate, setHospitalDonate] = useState([])


  const [open, setOpen] = useState(Array(3).fill(false));
  // open[false,false,false]
  const handleCollapse = (index) => {
    // setOpen(...open,open[val]= !open[val])
    const newOpen = [...open]
    newOpen[index] = !newOpen[index]
    setOpen(newOpen)
  }

  const handleGetHospitalDonateStatus = async () => {
    try {
      const token = sessionStorage.getItem('token');
      const reqHeader = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

      const result = await getHospitalDonateStatusAPI(reqHeader);
      // Fetch user details for each donation
      const updatedHospitalDonate = await Promise.all(
        result.data.map(async (item) => {
          const userDetails = await getUserDetailsAPI(item.personid, reqHeader);
          console.log(userDetails.data[0].username)
          return {
            ...item,
            username: userDetails.data[0].username,
            location: userDetails.data[0].location,
          };
        })
      );

      setHospitalDonate(updatedHospitalDonate);
    } catch (error) {
      console.error('Error fetching hospital donate status:', error);
    }
  };
  const handleUpdateDonate = async (status, personid) => {
    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const reqBody = {
        donatestatus: status,
        personid
      }
      const result = await handleUpdateStatusAPI(reqBody, reqHeader)
      console.log(result);
    }
    handleGetHospitalDonateStatus()

  }


  useEffect(() => {
    handleGetHospitalDonateStatus()
  }, [])

  return (
    <div className='action-container'>
      <div className='action-section'>
        <h1>Donations</h1>
        <p>See The Activity</p>
      </div>
      {
        hospitalDonate?.map((item) => (
          <div className='list-container'>
            <div className='list-section'>
              <div className='section1'>
                <div className='icon-section'>
                  <div className='section1-icon' >
                    <i class="ri-hospital-fill"></i>
                  </div>
                </div>
                <div >
                  <h4>{item.username}</h4>
                  <h6>{item.location}</h6>
                </div>
              </div>
              <div className='button-section d-flex  '>
                {
                  item.donatestatus === "Accepted" || item.donatestatus === "Rejected" ?
                    (
                      <div>
                        <button className='btn btn-warning'>{item.donatestatus}</button>
                      </div>
                    ) :
                    (
                      <>
                        <button onClick={() => handleUpdateDonate("Accepted", item.personid)} className='btn btn-success me-3'>Accept</button>
                        <button onClick={() => handleUpdateDonate("Rejected", item.personid)} className='btn btn-danger'>Reject</button>
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
export default HospitalDonations

