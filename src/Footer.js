import "./footer.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from "@mui/material";
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <img className="footer-albumLogo" src="https://m.media-amazon.com/images/M/MV5BM2FjZGYxOGMtZGQwOS00ZWRhLTg0NTAtYTlhM2NmMDNkZWU0XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg" alt="album-logo" />
                <div className="footer-songInfo" >
                    <h4>Hamari Adhuri Kahani</h4>
                    <p>Jeet Gannguli, Arijit Singh</p>
                </div>
                <FavoriteBorderIcon className="footer-favIcon"/>
            </div>

            <div className="songPlayer" >
            <div className="footer-center">
                <ShuffleIcon className="footer-icon" />
                <SkipPreviousIcon className="footer-icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer-icon" />
                <SkipNextIcon className="footer-icon" />
                <RepeatIcon className="footer-icon" /> 
            </div>
            <div className="footer-songProgressBar">
            <div>0:00</div>
            <input type="range" className="progressBar"/>
            <div>6:38</div>
            </div>
            </div>

            <div className="footer-right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon className="footer-playListIcon" />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon className="footer-volumeIcon" />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;