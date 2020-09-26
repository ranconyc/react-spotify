import React from 'react';
import './SideBar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateProviderValue } from './StateProvider'

const SideBar = () => {
  const [{ playlists }, dispatch] = useStateProviderValue();
  return (
    <div className='side-bar'>
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo"/>
      <SidebarOption Icon={HomeIcon} title='Home' />
      <SidebarOption Icon={SearchIcon} title='Search' />
      <SidebarOption Icon={LibraryMusicIcon} title='Your Library' />
      <br/>
      <strong className='sidebar-title'>Playlists</strong>
      <hr/>
      <div className="sidebar-playlists">
        {playlists?.items?.map((playlist) => (
          <SidebarOption title={playlist.name} />
        ))}
      </div>
    </div>
  )
}

export default SideBar;