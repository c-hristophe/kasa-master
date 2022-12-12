import React from "react";
import list from '../datas/list.json'
import '../styles/home.css'
import Banner from "../compoments/Banner";
import { Link } from "react-router-dom";
import imageBanner from "../images/banner.png";
import { useEffect } from 'react'

function Home() {
    const title= "Trouvez votre appartement"
    useEffect(() => {
		document.title = `${title}`
	}, [])
    return (
        
        <div className="App">
            <Banner image={imageBanner} text="Chez vous, partout et ailleurs" />

        <div className="card">
            
            {list.map((list) => (
                
                <div key={list.id} className="thumb">
                    <Link to={`/products/${list.id}`}>
                        <img className="thumb--img" src={list.cover} alt="" />
                        <h2 className="thumb--title">{list.title}</h2>
                    </Link>
                </div>
                
            ))}
        </div>
        </div>
   

    )
}

export default Home