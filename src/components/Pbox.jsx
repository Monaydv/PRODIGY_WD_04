import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import LaunchIcon from '@mui/icons-material/Launch';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import InfoIcon from '@mui/icons-material/Info';
export default function Pbox({ name, description, images, pending, link, git }) {
    const [classname, setclass] = useState("layer position-absolute pt-5")
    const handlehover = () => {
        setclass("layer d-flex flex-column align-items-center justify-content-center position-absolute top-0 w-100 h-100 layershow")
    }
    const handleout = () => {
        setclass("layer d-flex flex-column align-items-center justify-content-start position-absolute top-0 w-100 h-100 layerhide")
    }

    const handleinfo = () => {
        if (classname === "layer position-absolute top-0 w-100 h-100 layershow")
            setclass("layer d-flex flex-column align-items-center justify-content-start position-absolute top-0 w-100 h-100 layerhide")
        else
            setclass("layer d-flex flex-column align-items-center justify-content-start position-absolute top-0 w-100 h-100 layershow")
    }

    const getimage = (item) => {
        return require(`../photos/${item}.jpg`)
    }
    return (
        <>
            <div className='col-lg-4 col-md-6 col-sm-8 col-11  p-xl-5 p-lg-4 p-0 text-white '>
                <div className="p-0 m-0 w-100 innerone position-relative " onMouseEnter={() => handlehover()} onMouseLeave={() => handleout()} >
                    <InfoIcon className='position-absolute infobutton d-md-none d-block top-0 end-0' sx={{ color: "white", height: "30px", width: "30px" }} onClick={() => handleinfo()} />
                    <Carousel showThumbs={false} autoPlay={true} showStatus={false} interval={3000} transitionTime={2000} infiniteLoop={true} showIndicators={false} >
                        {images.map((item) => {
                            return (
                                <div className='w-100 position-relative'>

                                    <img src={getimage(item)} className='w-100 rounded-0' alt="" />
                                </div>
                            )
                        })}
                    </Carousel>
                    <div className={classname}>
                        <h3 className='text-center mt-sm-3 mt-2 mb-0 p-0'>{name} <span className={pending ? "d-inline fs-4" : "d-none"}>(progress)</span></h3>
                        <p className='text-center mt-0 px-2 pt-0 mb-0'>{description}</p>
                        <h6 className='mt-3 ms-auto me-3'>Full code at <Link to={`https://github.com/Monaydv/${git}`}>github</Link></h6>
                    </div>
                </div >


            </div >

        </>
    )
}
