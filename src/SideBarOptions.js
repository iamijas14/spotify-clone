import "./sideBarOptions.css"

const SideBarOption = ({title, Icon}) => {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className= "sidebarOption-icon"/>}
            {Icon ? <h4>{title}</h4> : <p className="playlistName">{title}</p>}
        </div>
    )
}

export default SideBarOption;