import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';


const GoBackButton = () => {
    const navigate = useNavigate();

    return (
        <>
            <Button variant="contained" color="inherit"><ArrowBackOutlinedIcon fontSize="large" onClick={() => navigate(-1)} /></Button>
        </>
    );
};

export default GoBackButton