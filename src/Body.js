import React from 'react';
import './Body.css';
import Header from './Header'
import SongRow from './SongRow'
import { useStateProviderValue } from './StateProvider'
// MATIRIAL UI ICONS
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useStateProviderValue();

  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className="body-info">
        <img src={discover_weekly?.images[0].url} alt="discover weekly"/>
        <div className="body-info-text">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
        <div className="body-songs">
          <div className="body-icons">
            <PlayCircleFilledIcon className='body-shuffle' />
            <FavoriteIcon fontSize='large' />
            <MoreHorizIcon />
          </div>
            <div className="diveder"></div>
          {discover_weekly?.tracks.items.map((item) => (
            <SongRow track={item.track} />
          ))}
        </div>
    </div>
  )
}

export default Body;
