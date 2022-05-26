export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // isToken: "BQBAiAq79y2cPR4MxSPlJ-d6lz4WQ1yOVBL-SPB18ZDeQT_4yH8GEkgcVz7VZRIHrAnvUAmkl_76WScBeao5XOhkOUgbxCLo3WsvJJuMNZKxhQJizn6-OneUJyI1RB1fknwmMdGhAH9goSl2UOscHpXYU0zp4_ArFGR89pRrPg2rVeAk7VWm"
}

const reducer = (state, action) => {
    
    switch(action.type) {
        case 'SET_USER': 
        return {
                ...state, user: action.user
            } 
        
        case 'SET_TOKEN' : 
        return {
                ...state, isToken: action.token
            }

        case 'SET_PLAYLISTS' :
            return {
                ...state, playlists: action.playlists
            }

        case 'SET_PLAYLIST_DETAILS' :
            return {
                ...state, songDetails: action.songDetails
            }

        default:
             return state
    }
}

export default reducer;