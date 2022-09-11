import { useEffect, useState } from "react"
import CardArtistWithImg from "../components/CardArtistWithImg";
import CardArtist from "../components/CardArtistWithImg";
import CardArtistWithoutImg from "../components/CardArtistWithoutImg";
import { getArtistAlbums } from "../services/artistsService";
import { getArtistData } from "../services/artistsService";
import { getAuth } from "../services/authService"
import "./Search.css"



const Search = () => {

    const [searchInput, setSearchInput] = useState("");
    const [searchArtistsId, setSearchArtistsId] = useState([]);

    return(
        <div className="search-view">
            <div className="searchForm">
                <input 
                    placeholder="Write the artist you're looking for"
                    type="input"
                    onKeyPress={event => {
                        if (event.key === "Enter"){
                            console.log("pressed enter key")
                        }
                    }}
                    onChange={(event) => {
                        setSearchInput(event.target.value)
                    }}
                />
                
                <button
                    onClick={() => {
                        getArtistData(searchInput).then((res) => {
                            setSearchArtistsId(res.artists.items)
                        })
                    }}
                >
                    Rechercher
                </button>

                <button
                    className="login"
                    onClick={getAuth} 
                >
                    Log In
                </button>
            </div>

            <h2>Résultat de votre recherche pour :</h2>
            <p className="search-input">"{ searchInput }"</p>

            <div className="result-search">
                {searchArtistsId ?
                    searchArtistsId.map((data) => {
                        if (data.images[1]){
                            return(
                                <CardArtistWithImg
                                    url={data.images[1].url}
                                    name={data.name}
                                    type={data.type}
                                />
                            )
                        } else {
                            return(
                                <CardArtistWithoutImg
                                    name={data.name}
                                    type={data.type}
                                />
                            )
                        }
                    })
                : null  }
            </div>
        </div>
    )
}

export default Search