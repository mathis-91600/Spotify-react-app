import "./CardArtist.css"

const CardArtistWithImg = (props) => {
    return(
        <div className="bg-artist">
            <div className="bg-artist-photo">
                <img src={props.url} alt={props.name} />
            </div>
            <p>{props.name}</p>
            <p>{props.type}</p>
        </div>
    )
}

export default CardArtistWithImg