import React, { useState } from 'react'
import Pbox from './Pbox'

import pic4 from '../photos/pic4.jpg'
import pic3 from '../photos/pic3.jpg'
import pic1 from '../photos/pic1.jpg'

const data = [

    {
        name: "Stopwatch",
        description: "Hodo is a Social community app where people posts their moments and get views from people , also it tells you if there is any more hodo user nearby to get connected.",
        images: ["pic4"],
        git: "-PRODIGY_WD_02-.git"

    },
    {
        name: "Weather",
        description: "Stavya is a Cultural website of a fest named 'Stavya' which hosts many events including dance, drama, songs and various events are based on Indian traditions.",
        images: ["pic3"],
        git: "-PRODIGY_WD_05-.git"

    },
    {
        name: "TIC TAC TOE",
        description: "Nutrifit is basically a diet routine website, On this platform ,various diet plant, workout plans and home remedies for disease are available.",
        images: ["pic1"],
        git: "-PRODIGY_WD_03-.git"
    }
]

export default function Projects() {

    const [index, setindex] = useState(0)
    return (
        <div className='propage container-fluid  p-0 mt-md-5 mt-5 pt-lg-5 pt-md-5 pt-sm-3 pt-0 pb-lg-3 pb-sm-5 pb-2 '>
            <div className="text-center py-3 mb--3 mb-0 text-white"><h1>RECENT PROJECTS</h1></div>
            <div className="row d-lg-flex d-none prow p-0 justify-content-around  position-relative " id='projects'>

                <Pbox name={data[0].name} description={data[0].description} images={data[0].images} pending={data[0].pending} link={data[0].link} git={data[0].git} />
                <Pbox name={data[1].name} description={data[1].description} images={data[1].images} pending={data[1].pending} link={data[1].link} git={data[1].git} />
                <Pbox name={data[2].name} description={data[2].description} images={data[2].images} pending={data[2].pending} link={data[2].link} git={data[2].git} />


            </div>
            <div className="row  crow m-0 p-0 d-lg-none d-flex justify-content-sm-around justify-content-center  align-items-center position-relative flex-sm-row flex-column-reverse" id='projects'>

                <div className="col-sm-2 col-12 d-lg-none gap-sm-4 gap-0 mt-sm-0 mt-3  m-0 p-0 d-flex flex-sm-column flex-row align-items-center justify-content-sm-between justify-content-around ">
                    <img src={pic4} className='' alt="" onClick={() => setindex(0)} />

                    <img src={pic3} className='' alt="" onClick={() => setindex(1)} />

                    <img src={pic1} className='' alt="" onClick={() => setindex(2)} />
                </div>
                <Pbox name={data[index].name} description={data[index].description} images={data[index].images} pending={data[index].pending} link={data[index].link} />



            </div>


        </div>
    )
}