// create your App component here
import React, {useEffect, useState} from "react";


function App(){
    const [isLoaded, setIsLoaded] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then((data) =>{
            setImages(data.message);
            setIsLoaded(true)
        })
    }, [])
if(!isLoaded) return <p>Loading...</p>

return(
    <>
    <img src={images} alt="A Random Dog"></img>
    </>
)
}

export default App
