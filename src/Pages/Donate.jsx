import './Donate.css'
import React, { useContext, useState } from 'react';
import SwipeableEdgeDrawer from '../Components/SwipeableEdgeDrawer';
import Header from '../Components/Header'
import DonateCard from '../Components/DonateCard';
import RequestBlood from '../Components/RequestBlood';
import Action from '../Components/Action';
import { personViewContext } from '../Contexts/ContextShare';


function Donate() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const { personviewresponse, setPersonviewresponse } = useContext(personViewContext)
  return (
    <div>
      <div className='donate-container'>
        <div className='donate-section'>
          <Header setOpen={setOpen} open={open} />
          <div >
            <SwipeableEdgeDrawer open={open} setOpen={setOpen} />
          </div>

          {personviewresponse === "donate" &&
            <>
              <div className='donate-header'>
                <input type="text" placeholder='Search by location' />
                <i class="ri-search-eye-line"></i>
              </div>

              <div className='hospital-list'>
                <div className='d-flex justify-content-center mb-4'>
                  <DonateCard />
                </div>
              </div>
            </>
          }

          {personviewresponse === "receive" &&
            <RequestBlood />
          }
          {personviewresponse === "action" &&
            <Action />
          }
        </div>

      </div>  
    </div >
  )
}

export default Donate
