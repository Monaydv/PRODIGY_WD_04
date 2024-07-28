import React, { useState } from 'react'
import Pbox from './Pbox'

import stavya from '../photos/stavya.png'
import hodo from '../photos/hodo2.png'
import nutrifit from '../photos/nutrifit.png'

const data = [

    {
        name: "HODO",
        description: "Hodo is a Social community app where people posts their moments and get views from people , also it tells you if there is any more hodo user nearby to get connected.",
        images: ["hodo1", "hodo2", "hodo3"],
        pending: false,
        link: "https://hodoofficial.onrender.com",
        git: "https://github.com/UvYadav04/Hodo"

    },
    {
        name: "STAVYA",
        description: "Stavya is a Cultural website of a fest named 'Stavya' which hosts many events including dance, drama, songs and various events are based on Indian traditions.",
        images: ["stavya1", "stavya2", "stavya3", "stavya4"],
        pending: false,
        link: "https://officialstavya.onrender.com/",
        git: "https://github.com/UvYadav04/Stavya"

    },
    {
        name: "NUTRIFIT",
        description: "Nutrifit is basically a diet routine website, On this platform ,various diet plant, workout plans and home remedies for disease are available.",
        images: ["nutri1", "nutri2", "nutri3", "nutri4"],
        pending: false,
        link: "https://nutrifit-2lm8.onrender.com",
        git: "https://github.com/UvYadav04/Nutrifit"
    }
]

export default function Projects() {

    const [index, setindex] = useState(0)
    return (
        <div className='propage container-fluid  p-0 mt-md-5 mt-5 pt-lg-5 pt-md-5 pt-sm-3 pt-0 pb-lg-3 pb-sm-5 pb-2 '>
            <div className="text-center py-3 mb--3 mb-0 text-white"><h1>RECENT PROJECTS</h1></div>
            <div className="row d-lg-flex d-none prow p-0 justify-content-around  position-relative " id='projects'>

                <Pbox name={data[0].name} description={data[0].description} images={data[0].images} pending={data[0].pending} link={data[0].link} />
                <Pbox name={data[1].name} description={data[1].description} images={data[1].images} pending={data[1].pending} link={data[1].link} />
                <Pbox name={data[2].name} description={data[2].description} images={data[2].images} pending={data[2].pending} link={data[2].link} />


            </div>
            <div className="row  crow m-0 p-0 d-lg-none d-flex justify-content-sm-around justify-content-center  align-items-center position-relative flex-sm-row flex-column-reverse" id='projects'>

                <div className="col-sm-2 col-12 d-lg-none gap-sm-4 gap-0 mt-sm-0 mt-3  m-0 p-0 d-flex flex-sm-column flex-row align-items-center justify-content-sm-between justify-content-around ">
                    <img src={hodo} className='' alt="" onClick={() => setindex(0)} />

                    <img src={stavya} className='' alt="" onClick={() => setindex(1)} />

                    <img src={nutrifit} className='' alt="" onClick={() => setindex(2)} />
                </div>
                <Pbox name={data[index].name} description={data[index].description} images={data[index].images} pending={data[index].pending} link={data[index].link} />



            </div>


        </div>
    )
}