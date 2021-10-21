import React from 'react';
import './song.css';

const Song = ({title, artist, image, url, preview, position}) => {
console.log(preview)
    return (
        <>
            <h2 id="position">{position}</h2>
            <a href={url}>
            <li className="song">
                
                <img src={image}/>
                
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
        </>
    );
}
    


export default Song;