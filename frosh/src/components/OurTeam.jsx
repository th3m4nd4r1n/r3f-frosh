import React from 'react'
import {Link} from 'react-router-dom'

const OurTeam = () => {
    return (
        <div className='bg-ourTeam' id='about'>
            <div className="frosh-alpha">
                <div className="three">
                    <div className="one" >F</div>   
                    <div className="two" >FAMILY</div>
                    <p>Frosh aims to build a sense of faith amongst the three pillars holding the institute together with the faculty, the seniors, and the freshers.</p>
                </div>
                <div className="three">
                    <div className="one">R</div>   
                    <div className="two" >RELIABLE</div>
                    <p>Frosh provides a reliable support system to hold hands through times that one might face.</p>

                </div >
                <div className="three">
            
                    <div className="one" >O</div>   
                    <div className="two">OPTIMISTIC</div>
                    <p>Frosh believes in an optimistic approach while dealing with the challenges one has to face in life.</p>
                
                </div>
                <div className="three">
                    <div className="one" >S</div>   
                    <div className="two">SPRITED</div>
                    <p>Frosh creates an energetic and spirited environment for the freshers for them to comfortably express their talents.</p>
                
                </div>
                <div className="three">
                    <div className="one" >H</div>   
                    <div className="two"  >HUMBLE</div>
                    <p>Frosh lays out a humble atmosphere for the freshers to approach them without hesitation.</p>
                
                </div>
            </div>
            <div className="faculty-team">
                <Link to="/faculty" ><h1 className="faculty">FACULTY</h1></Link>
                <Link to="/team" ><h1 className="team">TEAM</h1></Link>

                
            </div>
        </div>
    )

}

export default OurTeam