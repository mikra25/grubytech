import {Link} from "react-router-dom";

const MainHeader = () => {
    return(
        <div className="main-header">
            <h1><Link to="/" className="title">GrubyTech</Link></h1>
        </div>
    )
}

export default MainHeader;