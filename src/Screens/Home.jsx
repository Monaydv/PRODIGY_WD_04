import React, { useEffect, useLayoutEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Myself from '../components/Myself'
import Skill from '../components/Skill'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import RedditIcon from '@mui/icons-material/Reddit';
import abs from '../photos/bg4.jpg'
import abs2 from '../photos/r7.jpeg'

import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function Home() {
    const [loading, setloading] = useState(true)
    const [style, setstyle] = useState({ height: "40px", width: "40px" })


    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 3800);
    }, []);

    // useEffect(() => {
    //     if (window.innerWidth === 768)
    //         console.log(window.innerWidth)
    // }, window.innerWidth)

    gsap.fromTo('.abs',
        {
            opacity: 0,
        },
        {
            scrollTrigger: {
                trigger: ".homepage",
                toggleActions: "play none none none",
                scroller: "body",
                start: "top 10%",
                // end: "bottom 60%",
                // markers: true

            },
            opacity: 1,
            duration: 8,
        }
    )


    return (
        <div className='position-relative'>
            <div className={loading ? "d-none" : 'position-relative w-100 p-0 homepage  '}>
                <Navbar />
                <Intro />
                <Myself />
                <Skill />
                <Projects />
                <Contact />
                <img src={abs} className='abs position-absolute top-0 w-100 d-sm-inline d-none' alt="" />
                <img src={abs2} className='abs2 position-absolute top-0  d-sm-none d-inline' alt="" />
            </div>

            <div className={loading ? "loader position-absolute top-0 loader text-center" : "d-none"}>
                <svg width="100%" height="70vh" viewBox="0 0 200 100">

                    <path d="M85,25 V45 C87,43.5 90,43.5 92,45 V20 S89,25 85,25" stroke="white" stroke-width="0.5" fill="none" stroke-dasharray="300" stroke-dashoffset="300">
                        <animate attributeName="stroke-dashoffset" from="300" to="0" dur="12s" fill="freeze" />
                    </path>
                    <path d="M85,47 C87,45.5 90,45.5 92,47 V72 S98,76 104,72 V57 S107,62 111,62 V95 S99,87 87,95 Q90,91 86.5,87 Q96,84 104,85.5 Q101,82 104,78.7 Q95,82 85,76.2  Q75,72 65,76 Q57,66 65,57 Q73,52 85,56 V47" stroke="white" stroke-width="0.5" fill="none" stroke-dasharray="300" stroke-dashoffset="300">
                        <animate attributeName="stroke-dashoffset" from="300" to="0" dur="3s" fill="freeze" />
                    </path>
                    <path d="M85,62.7 V70 Q75,67 68,69 Q66,65.5 68,62 Q76,59 85,62.7" stroke="white" stroke-width="0.5" fill="none" stroke-dasharray="300" stroke-dashoffset="300">
                        <animate attributeName="stroke-dashoffset" from="300" to="0" dur="12s" fill="freeze" />
                    </path>
                </svg>
                <h5 className='text-center text-white opacity-50 position-relative hr-lines'>great to see you </h5>

            </div >

            {/* <div className={!loading ? "sidebar position-absolute d-md-inline d-none top-0 px-1 pt-3    start-0" : "d-none"}>
                <ul className='p-0 text-start text-white'>
                    <li className='list-style-none w-auto mb-3 ms-0 '><Link to={"https://www.linkedin.com/in/dinesh-yadav-264113265/"} className='text-decoration-none text-white '><LinkedInIcon sx={{ fontSize: "35" }} /></Link></li>
                    <li className='list-style-none  mb-3 ms-0 '><Link to={"https://www.instagram.com/mr.oggiii?igsh=MXNieXpmMDBrZXJzcQ=="} className='text-decoration-none text-white '><InstagramIcon sx={{ fontSize: 35 }} /></Link></li>
                    <li className='list-style-none  mb-3 ms-0 ' ><Link to={"https://x.com/dineshnirban04?t=hZTTivl1xtnSlB8dvyHlPw&s=09"} className='text-decoration-none text-white '><XIcon sx={{ fontSize: 35 }} /></Link></li>
                    <li className='list-style-none  mb-3 ms-0 '><Link to={"https://www.reddit.com/u/uvyadav_04/s/O3mcaRamyH"} className='text-decoration-none text-white '><RedditIcon sx={{ fontSize: 35 }} /></Link></li>
                    <li className='list-style-none  ms-0 '><Link to={"https://github.com/UvYadav04"} className='text-decoration-none text-white '><GitHubIcon sx={{ fontSize: 35 }} /></Link></li>
                </ul>
            </div> */}
        </div>
    )
}
// 