import React from 'react';
import ReactPlayer from 'react-player';
import { withStyles } from '@material-ui/core';

const styles = () => ({
  playerWrapper: {
    position: 'relative',
    paddingTop: '56.25%',
  },
  player: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
const VideoPlayer = ({ classes }) => (
  <div className={classes.playerWrapper}>
    <ReactPlayer
      controls
      url="https://www.youtube.com/watch?v=QlAvfscdxq4&ab_channel=AlecxMoritz"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
      }}
      height="100%"
      width="100%"
    />
  </div>
);

export default withStyles(styles)(VideoPlayer);
