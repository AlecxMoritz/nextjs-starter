import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Grid, Typography, withStyles } from '@material-ui/core';

const styles = () => ({
  paraText: {
    fontSize: 18,
  },
});

const VidPage = ({ classes }) => {
  return (
    <div>
      <Head>
        <title>Post</title>
      </Head>
      <main>
        <Grid container direction="row">
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <img
                  height="300"
                  width="500"
                  src={
                    'https://images.unsplash.com/photo-1555963153-11ff60182d08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
                  }
                />
              </Grid>
              <Grid item>
                <Typography variant="h5">Blog Post Title Here</Typography>
                <Typography variant="overline">Date here</Typography>
              </Grid>
              <Grid item>
                <Grid container direction="column" spacing={3}>
                  <Grid item>
                    <Typography variant="body1" className={classes.paraText}>
                      With pretty stories for which there&apos;s little good evidence
                      shores of the cosmic ocean made in the interiors of collapsing
                      stars astonishment hydrogen atoms Hypatia? Vanquish the
                      impossible a still more glorious dawn awaits inconspicuous
                      motes of rock and gas stirred by starlight inconspicuous motes
                      of rock and gas muse about?
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" className={classes.paraText}>
                      Dream of the mind&apos;s eye extraordinary claims require
                      extraordinary evidence permanence of the stars gathered by
                      gravity vastness is bearable only through love finite but
                      unbounded. Science Sea of Tranquility finite but unbounded
                      intelligent beings galaxies from which we spring. A mote of
                      dust suspended in a sunbeam prime number at the edge of forever
                      Drake Equation something incredible is waiting to be known
                      preserve and cherish that pale blue dot. Two ghostly white
                      figures in coveralls and helmets are softly dancing citizens of
                      distant epochs a still more glorious dawn awaits two ghostly
                      white figures in coveralls and helmets are softly dancing the
                      ash of stellar alchemy something incredible is waiting to be
                      known.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" className={classes.paraText}>
                      Kindling the energy hidden in matter trillion billions upon
                      billions worldlets inconspicuous motes of rock and gas of
                      brilliant syntheses. Muse about gathered by gravity
                      encyclopaedia galactica not a sunrise but a galaxyrise a very
                      small stage in a vast cosmic arena great turbulent clouds? A
                      still more glorious dawn awaits hydrogen atoms something
                      incredible is waiting to be known invent the universe descended
                      from astronomers the ash of stellar alchemy and billions upon
                      billions upon billions upon billions upon billions upon
                      billions upon billions.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </main>
    </div>
  );
};

VidPage.propTypes = {
  classes: PropTypes.shape({
    paraText: PropTypes.string,
  }),
};

export default withStyles(styles)(VidPage);
