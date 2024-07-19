import React , { useState, useEffect } from "react";
import closeBtn from '../assets/delete.png' 

const Map = ()=>{
    const [zoom, setZoom] = useState(0);
    const [folds, setFolds] = useState([]);
    const [closeMapVisible, setCloseMapVisible] = useState(false);

    useEffect(() => {
        const foldsElements = document.getElementsByClassName("fold");
        setFolds(Array.from(foldsElements));
    }, []);

    const handleCardClick = () => {
        setZoom(1);
        folds.forEach((fold, index) => {
        if (index % 2 === 0) {
            document.getElementById("card").style.transform = "scale(3)";
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
        folds.forEach((fold, index) => {
        if (index % 2 === 0) {
            document.getElementById("card").style.transform = "scale(1)";
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
        setCloseMapVisible(false);
    };

    return(
        <div className="map">
            <div class="card" id="card" onClick={handleCardClick} onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave} >
                <div class="fold"></div>
                <div class="fold"></div>
                <div class="fold"></div>
                <div class="fold"></div>
            </div>
            <div class="closeMap" id="closeMap" style={closeMapVisible?{"display":"block"} : {"display":"none"}} onClick={handleCloseMapClick}>
                <img src={closeBtn} alt=""/>
            </div>
        </div>
    )
}

export default Map