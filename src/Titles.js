import "./titles.css"
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';

const Titles = () => {
    return (
        <div className="heading">
        <div className="titles">
            <p>TITLE</p>
            <p>ALBUM</p>
            <p>DATE ADDED</p>
            <p><AccessTimeSharpIcon /></p>
        </div>
        <hr/>
        </div>
    )
}

export default Titles;