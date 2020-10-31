import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {
  Grid,
  Typography,
  withStyles,
  FormControl,
  InputAdornment,
  TextField,
  Paper,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';

const pseudoCourses = [
  {
    name: 'React - Just Add Water',
    desc:
      'Culture take root and flourish tingling of the spine descended from astronomers great turbulent clouds rogue. A still more glorious dawn awaits a very small stage in a vast cosmic arena stirred by starlight courage of our questions the carbon in our apple pies worldlets. A very small stage in a vast cosmic arena shores of the cosmic ocean laws of physics finite but unbounded courage of our questions the sky calls to us and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
    imgUrl:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
  },
  {
    name: 'NextJS - Upgrading to V10',
    desc:
      'Culture take root and flourish tingling of the spine descended from astronomers great turbulent clouds rogue. A still more glorious dawn awaits a very small stage in a vast cosmic arena stirred by starlight courage of our questions the carbon in our apple pies worldlets. A very small stage in a vast cosmic arena shores of the cosmic ocean laws of physics finite but unbounded courage of our questions the sky calls to us and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
    imgUrl:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
  },
  {
    name: 'Testing Vanilla JS with Jest',
    desc:
      'Culture take root and flourish tingling of the spine descended from astronomers great turbulent clouds rogue. A still more glorious dawn awaits a very small stage in a vast cosmic arena stirred by starlight courage of our questions the carbon in our apple pies worldlets. A very small stage in a vast cosmic arena shores of the cosmic ocean laws of physics finite but unbounded courage of our questions the sky calls to us and billions upon billions upon billions upon billions upon billions upon billions upon billions.',
    imgUrl:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
  },
];

const styles = () => ({
  searchInput: {
    width: '60%',
  },
  searchFilterArea: {
    position: 'fixed',
  },
  courseRow: {
    marginTop: 80,
  },
});

const CoursesPage = ({ classes }) => {
  const renderCourseCard = (course) => {
    const { title, desc, imgUrl } = course;
    return (
      <Paper>
        <Grid container direction="column">
          <Grid item>
            <img src={imgUrl} height={150} width={250} />
          </Grid>
          <Grid item>
            <Typography>{title}</Typography>
          </Grid>
          <Grid item>
            <Typography>{desc}</Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  };

  return (
    <div>
      <Head>
        <title>Courses</title>
      </Head>
      <main>
        <Grid container direction="column">
          <Grid item>
            <Grid container direction="row" className={classes.searchFilterArea}>
              <Grid item xs={6}>
                <FormControl className={classes.searchInput}>
                  <TextField
                    id="search-input"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment>
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <Grid container direction="row" spacing={4} justify="flex-end">
                  <Grid item>
                    <Typography>React</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Next JS</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Vanilla JS</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.courseRow}>
            <Grid container direction="row" wrap>
              {pseudoCourses.map((course, i) => {
                const card = renderCourseCard(course);
                return (
                  <Grid key={i} item xs={3}>
                    {card}
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

CoursesPage.propTypes = {
  classes: PropTypes.shape({
    searchInput: PropTypes.string,
  }),
};

export default withStyles(styles)(CoursesPage);
