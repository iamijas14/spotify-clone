import "./songRow.css"

const SongRow = ({item}) => {

    const trancate = (str, n) => {
        return str?.length > n ? str.substr(0, n -1 )  + "...": str;  
    } 

    const totalDuration = (ms) => {
        let minutes = Math.floor((ms / (1000 * 60)) % 60),
              seconds = Math.floor((ms/1000) % 60);

            // minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;
        
    
        return minutes + ":" + seconds;
    }

    return (
        <div className="songRow">
            <img className="song-img" src={item.track.album.images[0].url} alt="" />
            <div className="songRow-info">
                <h1>{trancate(item.track.name, 38)}</h1>
                {/* <p>{item.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {item.album.name}
                </p> */}
                <p>{item.track.artists.map((artist) => artist.name)}</p>
                </div>   
            <p className="album">{trancate(item?.track.album.name, 38)}</p>
            <p className="added-at">{item?.added_at.split("", 10)}</p>
            <p className="time">{totalDuration(item?.track.duration_ms)}</p>
        </div>
    )
}

export default SongRow;