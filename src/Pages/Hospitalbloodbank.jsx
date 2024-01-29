import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import './Hospitalbloodbank.css'
import SwipeableEdgeDrawer from '../Components/SwipeableEdgeDrawer';
import Header from '../Components/Header';
import HospitalDashboard from '../Components/HospitalPages/HospitalDashboard';
import HospitalRequest from '../Components/HospitalPages/HospitalRequest';
import HospitalDonations from '../Components/HospitalPages/HospitalDonations';
import { hospitalViewContext } from '../Contexts/ContextShare';
import { useNavigate } from 'react-router-dom';
import { getHospitalDonateStatusAPI } from '../Services/allAPI';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

function Hospitalbloodbank(props) {
    const { hospitalviewResponse, setHospitalviewresponse } = useContext(hospitalViewContext)
console.log(hospitalviewResponse);
    const { window } = props;
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;
    const navigate = useNavigate()

    const handlehospitalview = (val) => {
        setHospitalviewresponse(val)
        navigate('/Hospitalbloodbank')
    }




    return (
        <div>
            <Root>
                <CssBaseline />
                <Global
                    styles={{
                        '.MuiDrawer-root > .MuiPaper-root': {
                            height: `calc(50% - ${drawerBleeding}px)`,
                            overflow: 'visible',
                        },
                    }}
                />
                <Header setOpen={setOpen} />
                <SwipeableDrawer
                    container={container}
                    anchor="bottom"
                    open={open}

                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    swipeAreaWidth={drawerBleeding}
                    disableSwipeToOpen={false}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    <StyledBox
                        sx={{
                            position: 'absolute',
                            top: -drawerBleeding,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            visibility: 'visible',
                            right: 0,
                            left: 0,
                        }}
                    >
                        <Puller />
                        <Typography sx={{ p: 2, color: 'text.secondary' }}>51 results</Typography>
                    </StyledBox>
                    <StyledBox
                        sx={{

                            px: 2,
                            pb: 2,
                            height: '100%',
                            overflow: 'auto',

                        }}
                    >

                        {/* <Skeleton variant="rectangular" height="100%" /> */}

                        <div className='menu-card'>

                            <div onClick={() => handlehospitalview("donate")} style={{ backgroundColor: "#006270" }}><i class="ri-service-fill"></i><p>Donate</p></div>


                            <div onClick={() => handlehospitalview("request")} style={{ backgroundColor: "#009394" }}><i class="ri-hand-heart-fill"></i><p>Request</p></div>

                            <div onClick={() => handlehospitalview("dashboard")} style={{ backgroundColor: "#00e0c7" }}><i class="ri-dashboard-fill"></i><p>Dashboard</p></div>

                        </div>

                    </StyledBox>
                </SwipeableDrawer>
            </Root>
            {hospitalviewResponse === "donate" &&
                <HospitalDonations />}

            {hospitalviewResponse === "request" &&

                <HospitalRequest />}
            {hospitalviewResponse === "dashboard" &&
                <HospitalDashboard />}

        </div>
    );
}

SwipeableEdgeDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Hospitalbloodbank;
