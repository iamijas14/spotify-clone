import "./header.css"
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDataLayerContext } from "./DataLayer";

const Header = () => {
    const [{user}, dispatch] = useDataLayerContext();
    return (
        <div className="header">
            <div className="header-left">
                <SearchIcon /> 
                <input placeholder="Search for Artists, Songs or Podcast"
                type="text" />
            </div>
            <div className="header-right">
                <Avatar src={user?.images[0]?.url} alt="user-img" />
                <h4>{user?.display_name}</h4>
                <ArrowDropDownIcon />
            </div>
        </div>
    )
}

export default Header;