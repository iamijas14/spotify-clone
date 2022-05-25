export const authEndpoint ="https://accounts.spotify.com/authorize"

const redirectUri = "http://localhost:3000/"

const clientID = "0426647a7bda4f7f8566a5da4c8ad63f"

//where permission are given for the action to performs 
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read", 
    "user-modify-playback-state",
    ]

    // get the response token once the authentication is done
    //window.location.hash pulls the token after '#' symbol
    //substring divide
    //split at particular point 
    export const getTokenFromUrl = () => {
        return window.location.hash
            .substring(1)
            .split("&")
            .reduce((initial, item) => {
                var parts = item.split("=");
                initial[parts[0]] = decodeURIComponent(parts[1]); //should read about it
            return initial;
            }, {});
        }
// url which helps to login to spotify //scopes.join("20%") is used to join array and all the spaces i.e 20% 
export const loginURL = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`; 