import { Link } from "react-router-dom";
import { Button } from "@mui/material";


const InfoButton = (props) => {
    return (
        <Link className="styleRemove dropShadow" to={/item/ + props.slug}><Button id="detailsButton" variant="contained">More Details</Button></Link>
    )
}

export default InfoButton