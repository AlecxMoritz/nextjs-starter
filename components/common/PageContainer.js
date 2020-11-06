import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { withStyles } from '@material-ui/core';

const styles = () => ({
  container: {
    height: '100vh',
    width: '100vw',
  },
});

const PageContainer = ({ classes, children, title }) => (
  <div className={classes.container}>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </div>
);

PageContainer.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.element,
  title: PropTypes.string,
};

export default withStyles(styles)(PageContainer);
