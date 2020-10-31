import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Grid, Typography, withStyles } from '@material-ui/core';

const styles = () => ({
  topTitle: {
    fontSize: 18,
  },
  descContainer: {
    paddingRight: 120,
  },
  topicsContainer: {
    paddingTop: 16,
    position: 'fixed',
  },
});

const CoursePage = ({ classes }) => {
  return (
    <div>
      <Head>
        <title>Course</title>
      </Head>
      <main>
        <Grid container direction="row">
          <Grid item xs={1} />
          <Grid item xs={8}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <img
                  src={
                    'https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                  }
                  height={500}
                  width={800}
                />
              </Grid>
              <Grid item>
                <Typography variant="h4">Course Title</Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  spacing={2}
                  className={classes.descContainer}
                >
                  <Grid item>
                    <Typography variant="body1">
                      Dream of the mind&apos;s eye muse about the sky calls to us
                      extraplanetary with pretty stories for which there&apos;s
                      little good evidence as a patch of light. Not a sunrise but a
                      galaxyrise permanence of the stars are creatures of the cosmos
                      not a sunrise but a galaxyrise descended from astronomers
                      across the centuries? Sea of Tranquility vastness is bearable
                      only through love Hypatia not a sunrise but a galaxyrise from
                      which we spring rich in heavy atoms.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1">
                      Kindling the energy hidden in matter emerged into consciousness
                      of brilliant syntheses star stuff harvesting star light concept
                      of the number one shores of the cosmic ocean. Extraordinary
                      claims require extraordinary evidence two ghostly white figures
                      in coveralls and helmets are softly dancing Vangelis cosmic
                      ocean from which we spring corpus callosum. Something
                      incredible is waiting to be known vastness is bearable only
                      through love intelligent beings dream of the mind's eye laws of
                      physics hearts of the stars and billions upon billions upon
                      billions upon billions upon billions upon billions upon
                      billions.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container direction="column" className={classes.topicsContainer}>
              <Typography variant="overline" className={classes.topTitle}>
                Topics Covered
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </main>
    </div>
  );
};

CoursePage.propTypes = {
  classes: PropTypes.shape({
    descContainer: PropTypes.string,
    topTitle: PropTypes.string,
  }),
};

export default withStyles(styles)(CoursePage);
