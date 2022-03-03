import { useState } from "react"
import Button from '@mui/material/Button';



const Footer = () =>{

    const [dark, setDark] = useState(false);

    
    const toggleDarkMode = () => {
        setDark(!dark);
    }

    return (
        <footer>
            <Button onClick={toggleDarkMode} variant={dark ? "contained" : "outlined"} color={dark ? "secondary" : "primary"}>Toggle Theme</Button>
            <p>Theme: {dark ? "Dark" : "Light"}</p>
        </footer>
    )
}

export default Footer;