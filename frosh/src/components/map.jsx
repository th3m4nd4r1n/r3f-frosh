import React , { useState, useEffect } from "react";
import closeBtn from '../assets/delete.png' 
import { Link } from "react-router-dom";

const Map = ()=>{
    const [zoom, setZoom] = useState(0);
    const [folds, setFolds] = useState([]);
    const [closeMapVisible, setCloseMapVisible] = useState(false);
    const [mapRotate, setMapRotate] = useState(false)
    const[width , setWidth] = useState(window.innerWidth)
    // const [mapHeight , setMapHeight] = useState

    useEffect(() => {
        const foldsElements = document.getElementsByClassName("fold");
        setFolds(Array.from(foldsElements));


    }, []);

    

    const handleCardClick = () => {
        setZoom(1);
        folds.forEach((fold, index) => {
        if (index % 2 === 0) {
            if(width>395 && width<=450){
                document.getElementsByClassName("map")[0].style.height = "80vh"
                document.getElementById("card").style.transform = "scale(4.4) rotate(90deg)";
                // document.getElementById("card").style.rotate = "90deg";
            }
            else if(width<395){
                
                document.getElementById("card").style.transform = "scale(3) rotate(90deg)";
            }
            else{

                document.getElementById("card").style.transform = "scale(3)";
            }
            fold.style.transform = `skewY(0deg)`;
            fold.style.filter = "brightness(1)";
        } else {
            fold.style.transform = `skewY(0deg)`;
            fold.style.filter = "brightness(1)";
        }
        });
        document.querySelector(':root').style.setProperty('--bcolor', 'transparent');
        setTimeout(() => {
        setCloseMapVisible(true);
        }, 500);
    };

    const handleCardMouseEnter = () => {
        if (!zoom) {
        document.querySelector(':root').style.setProperty('--bcolor', 'white');
        document.getElementById("card").style.transform = "scale(1.2)";
        }
    };

    const handleCardMouseLeave = () => {
        document.querySelector(':root').style.setProperty('--bcolor', 'transparent');
        if (!zoom) {
        document.getElementById("card").style.transform = "scale(1)";
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
        setZoom(0);
        folds.forEach((fold, index) => {
            if (index % 2 === 0) {
            fold.style.transform = `skewY(-45deg)`;
            fold.style.filter = "brightness(1.25)";
            } else {
            fold.style.transform = `skewY(45deg)`;
            fold.style.filter = "brightness(0.75)";
            }
        });
        setCloseMapVisible(false);
        }
    };

    const handleCloseMapClick = () => {
        setCloseMapVisible(false);
        folds.forEach((fold, index) => {
        if (index % 2 === 0) {
            if(width<=450){
                document.getElementsByClassName("map")[0].style.height = "60vh"
                document.getElementById("card").style.rotate = "";
            }
            document.getElementById("card").style.transform = "scale(1.4)";
            fold.style.transform = `skewY(-45deg)`;
            fold.style.filter = "brightness(1.25)";
        } else {
            fold.style.transform = `skewY(45deg)`;
            fold.style.filter = "brightness(0.75)";
        }
        });
        setTimeout(() => {
        setZoom(0);
        }, 500);
    };

    const navigateHover=()=>{

    }

    return(
        <div className="map" id="map">
            <div className={`map-element ${zoom===1?"map-zoomed" : ""}`} >
                <div class="card" id="card" onClick={handleCardClick} onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave} >
                    <div class="fold"></div>
                    <div class="fold"></div>
                    <div class="fold"></div>
                    <div class="fold"></div>
                </div>
            </div>
            <div class="closeMap" id="closeMap" style={closeMapVisible?{"display":"block"} : {"display":"none"}} onClick={handleCloseMapClick}>
                <img src={closeBtn} alt=""/>
            </div>
            <div className={`navigate ${closeMapVisible || zoom===1?"navigate-no-display" : ""}`}>
                <h1>Campus Map</h1>
                <Link to="/map"><h2>Click Here to Navigate!</h2></Link>
            </div>

        </div>        

    )
}

export default Map