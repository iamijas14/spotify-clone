import "./sideBar.css"
import SideBarOption from "./SideBarOptions" 
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerContext } from "./DataLayer";

export const SideBar = () => {
    const[{playlists}, dispatch] = useDataLayerContext();

    return (
        <div className="sideBar">
        <img className="sidebar-logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify-logo"/>
        <SideBarOption Icon={HomeIcon} title="Home"/>
        <SideBarOption Icon={SearchIcon} title="Search"/>
        <SideBarOption Icon={LibraryMusicIcon} title="Your Library"/>
        
        <br/>
        <strong className="playlist">PLAYLIST</strong>
        <hr/>

        {playlists?.items?.map(playlist => (
            <SideBarOption title ={playlist.name} />
        ))}
        </div>
    )
}

export default SideBar;