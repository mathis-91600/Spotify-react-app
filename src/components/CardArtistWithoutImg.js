import "./CardArtist.css"

const CardArtistWithoutImg = (props) => {
    return(
        <div className="bg-artist">
            <p>{props.name}</p>
            <p>{props.type}</p>
        </div>
    )
}

export default CardArtistWithoutImg