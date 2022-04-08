import React from "react";
import audio from '../../assests/audio.svg'
import "./selectedBird.css"

const SelectedBird = ({bird})=>{
    if(bird === "")return null;
    return(        
        <div className="selectedBirdPage">
                <div className="selectedBird">
                    <div className="firstColumn">
                         <div className=" firstColumn name"> {bird.name} </div>
                            <div className="attributes"> 
                               <img className="sound" src={audio} alt="Sound" onClick={()=>new Audio(bird.sound).play()}/>
                                <div className="location">{`Lat: ${bird.location.lat} Lng: ${bird.location.lng}`}</div>
                            </div>
                    </div>
                    <div className="secondColumn">
                       <div className="selectedBirdPictureBox"> <img className="selectedBirdPicture" src ={bird.image} alt="Bird"/> </div>
                       <div className="selectedBirdMapBox"> <img className="selectedBirdMap" src ={`https://maps.googleapis.com/maps/api/staticmap?center=${bird.location.lat},${bird.location.lng}&zoom=4&size=400x400&maptype=roadmap&markers=color:red%7Clabel:%7C${bird.location.lat},${bird.location.lng}&key=${process.env.REACT_APP_GoogleKeyBoogies}`} alt="Map"/> </div>
                    </div>
            </div>
        </div>
    );
} 
export default SelectedBird;