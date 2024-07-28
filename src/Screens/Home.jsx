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
    // const [loading, setloading] = useState(true)
    const [style, setstyle] = useState({ height: "40px", width: "40px" })


    // useEffect(() => {
    //     setloading(true);
    //     setTimeout(() => {
    //         setloading(false);
    //     }, 3800);
    // }, []);

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
            <div className={'position-relative w-100 p-0 homepage'}>
                <Navbar />
                <Intro />
                <Myself />
                <Skill />
                <Projects />
                <Contact />
                <img src={abs} className='abs position-absolute top-0 w-100 d-sm-inline d-none' alt="" />
                <img src={abs2} className='abs2 position-absolute top-0  d-sm-none d-inline' alt="" />
            </div>

        </div>
    )
}
// 