import "./body.css"
import Header from "./Header"
import { useDataLayerContext } from "./DataLayer"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from "./SongRow"
import Titles from "./Titles"
import CreatePlaylist from "./CreatePlaylist";
import { useEffect } from "react";

const Body = ({spotify}) => {

    const [{songDetails, setPlaylist}] = useDataLayerContext();

    // convert milliseconds into Hours:min format
    const duration = songDetails?.tracks.items.map(item => (
        item.track.duration_ms
          )).reduce((accumulator, currentItem) => accumulator + currentItem, 0);

    const totalDuration = (ms) => {
        const minutes = Math.floor((ms / (1000 * 60)) % 60),
        hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    
        return hours+" hr " + minutes + " min ";
    }

    const time = totalDuration(duration)

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
            <strong>{`${songDetails?.owner.display_name} . ${songDetails?.tracks.total} songs, `}</strong><span>{time}</span>
        </div>
        </div>
        <div className="body-songs">
            <div className="body-icons">
            <PlayCircleFilledIcon className="body-play" />
            <MoreHorizIcon className="body-moreIcon" />
            </div>
            <div>
                <Titles />
            </div>
            {songDetails?.tracks.items.map(item => (
                <SongRow item={item} />
            ))}
        </div>
        <CreatePlaylist spotify={spotify}/>
        </div>
    )
}

export default Body;  