import React from 'react';
import './Footer.css';
// material-ul icons
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slide, Slider } from '@material-ui/core';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <img src="https://upload.wikimedia.org/wikipedia/en/f/f5/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png" alt="album-cover"/>
        <div className="song-info">
          <h4>Love Agian</h4>
          <p>Dua Lipa</p>
        </div>
      </div>
      <div className='footer-center'>
          <ShuffleIcon className='icon-green' />
          <SkipPreviousIcon className='icon' />
          <PlayCircleOutlineIcon fontSize='large' className='icon' />
          <SkipNextIcon className='icon' />
          <RepeatIcon className='icon-green' />
      </div>
      <div className='footer-right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer;
