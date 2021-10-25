import React from 'react';
import './song.css';

const Song = ({title, artist, image, url, preview, position}) => {
    return (
        
            <a href={url} target="_blank">
            <li className="song">
                <p id="position">{position}</p>
                
                <img src={image} alt="The artist's album cover"/>
                
                <div className="details">
                    <h3>{title}</h3>
                    <p>{artist}</p> 
                    
                </div>
                <div className ="audioPreview">
                    <audio controls>
                        <source src={preview} type="audio/mpeg" />
                    </audio>
                </div>    
            </li>
            </a>
            
    );
}
    


export default Song;