import React, { useEffect, useState } from "react"
import memesData from "../memesData"

const Form = () => {

       
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState(memesData)

        useEffect(() =>{
            fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
        }, [])
   
    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
      <main>
        
       <div  className="grid grid-cols-2 grid-rows-2 justify-items-center ">
        <div>
            <label htmlFor="bottom-text" className="m-4"> Top text  
            <input 
                type="text" 
                name="topText" 
                id="top-text" 
                placeholder="Shut up" 
                className=" from-input ml-4 border border-slate-200 indent-1 rounded w-64 h-10" 
                value={meme.topText}
                onChange={handleChange}
            />
            </label>
        </div>  
        <div>
            <label htmlFor="bottom-text" className="m-4"> Bottom text               
            <input 
                type="text" 
                id='bottom-text'
                name="bottomText"
                placeholder="And take my money" 
                className=" from-input ml-4 border border-slate-200 indent-1 rounded w-64 h-10"
                value={meme.bottomText}
                onChange={handleChange}            
            />
            </label>
        </div>
                  

              <button
              className=" 
                    m-5
                    col-span-full
                    block
                    mx-auto
                    rounded
                    bg-gradient-to-r from-fuchsia-800 to-fuchsia-500
                    text-white
                    h-10
                    w-96
              "
              onClick={getMemeImage}
              > Get a new meme image  🖼</button>
                <div className=" meme flex place-items-center col-span-full">
                <img src={meme.randomImage} alt="" className="max-w-full bg-center" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
             </div>
              
          </div>
      </main>
    )
  }
  
  export default Form
