import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import WhatshotIcon from "@material-ui/icons/Whatshot"
import HomeIcon from "@material-ui/icons/Home"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import  VideoLibraryIcon  from "@material-ui/icons/VideoLibrary"
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandLessOutlined"
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined"
// import { Subscriptions } from '@material-ui/icons'
import HistoryIcon from "@material-ui/icons/History"
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo"
import WatchLaterIcon from "@material-ui/icons/WatchLater"

function Sidebar() {
    return (
        <div className='Sidebar'>
            <SidebarRow selected icon={HomeIcon} title="Home" />
            <SidebarRow icon={WhatshotIcon} title="Trending" />
            <SidebarRow icon={SubscriptionsIcon} title="Subscription" />
            <hr/>
            <SidebarRow icon = {VideoLibraryIcon} title = "Library"/>
            <SidebarRow icon = {HistoryIcon} title = "History"/>
            <SidebarRow icon = {OndemandVideoIcon} title = "Your Videos"/>
            <SidebarRow icon = {WatchLaterIcon} title = "Watch Later"/>
            <SidebarRow icon = {ThumbDownAltOutlinedIcon} title = "Liked Videos"/>
            <SidebarRow icon = {ExpandMoreOutlinedIcon} title = "Show more"/>
            <hr/>
        </div>
    )
}

export default Sidebar