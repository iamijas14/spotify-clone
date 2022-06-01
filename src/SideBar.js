import "./sideBar.css"
import SideBarOption from "./SideBarOptions" 
import SideBarPlaylist from "./SideBarPlaylist";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { useDataLayerContext } from "./DataLayer";

export const SideBar = () => {
    const[{playlists}, dispatch] = useDataLayerContext();
    
    return (
        <div className="sideBar">
        <img className="sidebar-logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify-logo"/>
        <SideBarOption Icon={HomeIcon} title="Home"/>
        <SideBarOption Icon={SearchIcon} title="Search"/>
        <SideBarOption Icon={LibraryMusicIcon} title="Your Library"/>

        <buuton onClick = {() => dispatch({
            type: 'CREATE_PLAYLIST',
            toggle: true
        })}><SideBarOption Icon={AddBoxIcon} title="Create Playlist" /></buuton> 

        <SideBarOption Icon={FavoriteSharpIcon} title="Liked Songs" />
        
        <br/>
        <strong className="playlist">PLAYLIST</strong>
        <hr/>
        {playlists?.items?.map(playlist => (
            <SideBarPlaylist title ={playlist.name} />
        ))}
        </div>
    )
}

export default SideBar;