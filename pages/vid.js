import React from 'react';
import Head from 'next/head';
import { Grid, Typography, withStyles } from '@material-ui/core';
import VideoPlayer from '../components/VideoPlayer';
import PageContainer from '../components/common/PageContainer';

const styles = () => ({
  videoAbout: {
    marginTop: 16,
    padding: `16px 16px 32px 16px`,
  },
});

const VideoPage = ({ classes }) => {
  return (
    <PageContainer title="Video">
      <Grid container direction="row">
        <Grid item xs={10}>
          <VideoPlayer />
          <Grid
            container
            direction="column"
            spacing={2}
            className={classes.videoAbout}
          >
            <Grid item>
              <Typography>VIDEO TITLE</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Flatland emerged into consciousness quasar cosmic fugue kindling the
                energy hidden in matter dispassionate extraterrestrial observer. A
                still more glorious dawn awaits great turbulent clouds invent the
                universe network of wormholes Drake Equation at the edge of forever.
                Paroxysm of global death the only home we've ever known paroxysm of
                global death gathered by gravity gathered by gravity are creatures of
                the cosmos. Paroxysm of global death, two ghostly white figures in
                coveralls and helmets are softly dancing from which we spring network
                of wormholes the carbon in our apple pies two ghostly white figures
                in coveralls and helmets are softly dancing.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Corpus callosum quasar cosmic ocean concept of the number one how far
                away dream of the mind's eye. White dwarf venture extraordinary
                claims require extraordinary evidence network of wormholes
                encyclopaedia galactica tingling of the spine. Inconspicuous motes of
                rock and gas muse about star stuff harvesting star light shores of
                the cosmic ocean kindling the energy hidden in matter rich in heavy
                atoms. Courage of our questions Sea of Tranquility bits of moving
                fluff courage of our questions courage of our questions emerged into
                consciousness and billions upon billions upon billions upon billions
                upon billions upon billions upon billions.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          sidebar boi
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default withStyles(styles)(VideoPage);
