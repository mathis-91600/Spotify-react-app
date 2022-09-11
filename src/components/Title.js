import { Link } from "react-router-dom"
import "./Title.css"

const Title = (props) => {
    return(
        <Link to="/"><h1>{ props.title }</h1></Link>
    )
}

export default Title