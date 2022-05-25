import "./body.css"
import Header from "./Header"
import { useDataLayerContext } from "./DataLayer"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from "./SongRow"




const Body = ({spotify}) => {
    const [{songDetails}, dispatch] = useDataLayerContext();
    return (
        <div className="body">
        <Header spotify={spotify}/>

        <div className="body-info">
            <img src={songDetails?.images[0].url}
            alt="discover img" />
        <div className="body-infoText">
            <strong>PLAYLIST</strong>
            <h2>{songDetails?.name}</h2>
            <p>{songDetails?.description}</p>
        </div>
        </div>
        <div className="body-songs">
            <div className="body-icons">
            <PlayCircleFilledIcon className="body-play" />
            <MoreHorizIcon className="body-moreIcon" />
            </div>
            {songDetails?.tracks.items.map(item => (
                <SongRow track={item.track} />
            ))}
        </div>
        </div>
    )
}

export default Body;  