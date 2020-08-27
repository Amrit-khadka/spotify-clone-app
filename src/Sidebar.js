import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const[{playlists}, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
      className="sidebar__logo"
      alt="spotify_logo" />

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption title= {playlist.name} />
      ))}

      <SidebarOption title="Hip Hop" />
      <SidebarOption title="RnB" />
      <SidebarOption title="Classic" />
    
    
    </div>
  )
}

export default Sidebar
