import React, { Fragment } from 'react'
import "./Home.css";

const numeroSign = <Fragment>&#8470;</Fragment>

function Home() {
    return (
        <div>
            <h1>A Group {numeroSign} 04 Project</h1>
            <br />
            <div className="mainSection">
                <video className="video"
                width="500"
                height="540"
                playsInline
                controls
                loop
                muted
                autoPlay
                >
                    <source src="./Group_04_Food_Bank_Video.mp4" />
                </video>
            </div>
        </div>
    )
}

export default Home