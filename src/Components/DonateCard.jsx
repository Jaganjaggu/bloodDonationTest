import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import hospitalimg from '../Assets/hospital.jpg';
import { useState } from 'react';
import { getallhospitalsAPI, getpersondonatestatusAPI, insertdonatestatusAPI } from '../Services/allAPI';
import './DonateCard.css'



function DonateCard() {
    const theme = useTheme();
    const [like, setLike] = useState(false)
    const [viewhospitallist, setViewhospitallist] = useState([])
    const [updateStatus, setUpdatestatus] = useState([])

    React.useEffect(() => {
        const viewallhospital = async () => {
            const token = sessionStorage.getItem('token')

            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await getallhospitalsAPI(reqHeader)
            setViewhospitallist(result.data.getallhospitals)
            // console.log(result,"jhgjh");
        }
        viewallhospital()
        // console.log(viewhospitallist);
    }, [])
    const getpersondonatestatus = async () => {
        const token = sessionStorage.getItem('token')
        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        const result = await getpersondonatestatusAPI(reqHeader)
        setUpdatestatus(result.data)
        console.log(updateStatus[0]);

    }
    React.useEffect(() => {

        getpersondonatestatus()
    }, [])

    const handleDonate = async (id) => {
        const token = sessionStorage.getItem('token')
        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }

        const reqbody = {

            hospitalid: id,
            donatestatus: "Requested"
        }

        await insertdonatestatusAPI(reqbody, reqHeader)
        getpersondonatestatus()

        // const result = await insertdonatestatusAPI(reqHeader)


    }

    const donatestatus = (id) => {
        console.log(id);
        const status = updateStatus.find((item) => (item.hospitalid === id))
        const result = status?status.donatestatus:"Donate"
        return result
    }



    return (
        <div className='card-collection'>
            {viewhospitallist?.map((item) => (

                <Card className='card-box' sx={{ display: 'flex' }}>
                    {/* {console.log(item)} */}
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {item.username}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {item.location}
                            </Typography>
                        </CardContent>
                        <div className='p-2 w-100 d-flex align-items-center  ' >
                            <button onClick={() => handleDonate(item._id)} className='btn btn-primary me-3'>{donatestatus(item._id)}</button>

                            <div>
                                {
                                    like === true ?
                                        <i onClick={() => setLike(false)} style={{ fontSize: 25, color: '#009cc34e' }} className="ri-heart-2-fill"> </i> :
                                        <i onClick={() => setLike(true)} style={{ fontSize: 25 }} className="ri-heart-2-line"></i>
                                }
                            </div>
                        </div>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={hospitalimg}
                        alt="Live from space album cover"
                    />
                </Card>
            ))

            }

        </div >

    )
}

export default DonateCard
