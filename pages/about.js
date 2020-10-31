import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Grid, Typography, withStyles } from '@material-ui/core';

const styles = () => ({
  text: {
    fontSize: 18,
  },
  title: {
    textAlign: 'center',
  },
});

const AboutPage = ({ classes }) => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <main>
        <Grid container direction="row">
          <Grid item xs={1} />
          <Grid item xs={3}>
            <Grid container direction="column" spacing={4}>
              <Grid item className={classes.title}>
                <Typography variant="h3">Purpose</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  This site was created to share information and video lectures about
                  JavaScript and it&apos;s ecosystem of libraries, frameworks.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={3}>
            <Grid container direction="column" spacing={4}>
              <Grid item className={classes.title}>
                <Typography variant="h3">Creator</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Alecx Moritz is an Indianapolis based software engineer and
                  educator.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </main>
    </div>
  );
};

AboutPage.propTypes = {
  classes: PropTypes.shape({
    text: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default withStyles(styles)(AboutPage);
