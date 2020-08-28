import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';


function Header({spotify}) { 
  const[{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      
      <div className="header__left" style={{display: "flex", alignItems: "center", minWidth: "70px",flex: "0.5",  background:"white", color: "grey", padding: "10px", borderRadius: "30px", }}>
          <SearchIcon />
          <input type="text" placeholder="Search for Artists, Songs, or albums" style={{border: "none", width: "100%"}}/>
      </div>

      <div className="header__right">
        <Avatar />
        {/* <Avatar alt={user?.display_name} src={user?.images[0].url} /> */}
        <h4>{user?.display_name}</h4>
      </div>

    </div>
  )
}

export default Header
