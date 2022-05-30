import { display } from "@mui/system";
import "./CreatePlaylist.css"
import { useDataLayerContext } from "./DataLayer"

const CreatePlaylist = ({trigger}) => {

    const [{createPlaylist}, dispatch] = useDataLayerContext();

    return createPlaylist ? (
        <div className="createPlaylist-popup">
            <div className="popup-body">
                <textarea placeholder="Playlist name"></textarea>
                <textarea placeholder="Add an option description"></textarea>
                <button onClick={() => dispatch({
                    type: 'SAVE_PLAYLIST',
                    toggle: false
                })}>Save</button>
            </div>
        </div>
        ) : "";
}

export default CreatePlaylist;