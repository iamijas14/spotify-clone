import "./Login.css"
import { loginURL } from "./spotifyLogin"

const Login = () => {
    return(
        <div className="login"> 
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify logo" />
            {/* login url to direct to login page */}
            <a href={loginURL}>LOGIN WITH SPOTIFY</a> 
        </div>
    )
}

export default Login;