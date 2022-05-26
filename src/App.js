import { useEffect} from 'react';
import './App.css';
import Login from "./Login"
import Player from './Player';
import { getTokenFromUrl } from "./spotifyLogin"
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerContext } from "./DataLayer"



function App() {
  //create instance of spotify web api, allows to communicate to spotify
  const spotify = new SpotifyWebApi();

  //useContext;
  const [{ isToken }, dispatch] = useDataLayerContext();

  //once we click on login, take us to login page 
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash=" " //clears the access token from url 
    const token = hash.access_token;

    //if token is true 
    if(token){
      // setToken(token)
      dispatch({
        type: 'SET_TOKEN',
        token: token
      })
    } 

    // spotify api to set access token
    spotify.setAccessToken(token);
    //get user details
    spotify.getMe().then(user => {
      dispatch({
        type: 'SET_USER',
        user: user
      })
    })

    spotify.getUserPlaylists().then((playlist) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists : playlist

      })
    })

    spotify.getPlaylist('51ETeQvh3BOmqAh8yeunDf').then(response => {
      dispatch({
        type: "SET_PLAYLIST_DETAILS",
        songDetails: response,
      })
    })

  }, []);


  return (
    <div className="App">
      {
        isToken ? <Player spotify={spotify} /> : <Login />
      }    
    </div>
  );
}

export default App;
