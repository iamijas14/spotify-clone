import { useEffect, useState } from "react";
import "./CreatePlaylist.css"
import { useDataLayerContext } from "./DataLayer"
import SpotifyWebApi from 'spotify-web-api-js';

const CreatePlaylist = () => {

    const [{toggle, setPlaylist}, dispatch] = useDataLayerContext();
    const spotify = new SpotifyWebApi();

    const [isPlaylist, setPlaylist1] = useState();

    return toggle ? (
        <div className="createPlaylist-popup">
            <div className="popup-body">
                <textarea onChange={(event) => setPlaylist1(event.target.value)} placeholder="Playlist name"></textarea>
                <textarea placeholder="Add an option description"></textarea>
                <button onClick={() => {
                    dispatch({
                    type: 'SET_PLAYLIST',
                    set: isPlaylist

                })}
                
                }>Save</button>
            </div>
        </div>
        ) : "";
}

export default CreatePlaylist;