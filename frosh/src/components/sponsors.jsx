import React from "react";
import sponsor1 from '../assets/images/sponsor.webp'
import sponsor2 from '../assets/images/sponsor2.jpeg'


const Sponsors = ()=>{
    return(
        <div className="bg-sponsors" id="sponsors">
            <div className="sponsors title">
                <div className="sponsors-head">
                    <h1>TITLE</h1>
                    <h1>SPONSORS</h1>
                </div>
                <div className="sponsors-logo">

                    <div className="sponsor">
                        <img src={sponsor1} alt="" />
                    </div>
                    <div className="sponsor">
                        <img src={sponsor1} alt="" />
                    </div>
                    <div className="sponsor">
                        <img src={sponsor1} alt="" />
                    </div>
                </div>
            </div>
            <div className="sponsors associate">
                <div className="sponsors-head">
                    <h1>ASSOCIATE</h1>
                    <h1>SPONSORS</h1>
                </div>
                <div className="sponsors-logo">
                    <div className="sponsor">
                        <img src={sponsor2} alt="" />
                    </div>
                    <div className="sponsor">
                        <img src={sponsor2} alt="" />
                    </div>
                    <div className="sponsor">
                        <img src={sponsor2} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sponsors