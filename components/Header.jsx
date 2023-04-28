import React from 'react'
import trollFace from '/src/troll-face.png'
import '/App.css'

export default function Header() {
    
    return (
        <header className="header">
            <img 
                src={trollFace} 
                className="header--image"
            />
            <div className="stack" style={{'--stacks': 3}}>
                 <span style={{'--index': 0}}>Meme Generator</span>
                 <span style={{'--index': 1}}>Meme Generator</span>
                 <span style={{'--index': 2}}>Meme Generator</span>
            </div>
            
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}

