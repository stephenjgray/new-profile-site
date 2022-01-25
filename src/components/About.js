import React from 'react';

import {
  Grid,
  Icon,
  Paper,
  Typography,
  Hidden,
  makeStyles,
} from '@material-ui/core';

import { Link as LinkContainer } from 'react-scroll';

const useStyles = makeStyles((theme) => {
  return {
    cardContainer: {
      position: 'relative',
      zIndex: 1,
      perspective: '1000px',

      '&:hover $cardBody': {
        transform: 'rotateY(180deg)',
      },

      ':hover > $cardBody > $cardFront': {
        opacity: 0,
        visibility: 'hidden',
        transition: 'opacity 1s ease-in, visibility .75s linear',
      },
    },

    cardBody: {
      width: '100%',
      transformStyle: 'preserve-3d',
      transition: 'all .7s linear',
      height: '125px',
      justifyContent: 'center',
    },

    cardSide: {
      position: 'absolute',
      top: 0,
      overflow: 'hidden',
      height: '100%',
      color: '#212121',
      backgroundColor: '#fff',
      backfaceVisibility: 'hidden',
      boxShadow: '0 10px 35px rgba(50,50,93,.1),0 2px 15px rgba(0,0,0,.07)',
    },

    cardBack: {
      padding: '24px 6px 0 6px',
      transform: 'rotateY(180deg)',
    },
  };
});

const About = (props) => {
  const colours = ['#9265a4', '#826AAA', '	#6872A7', '#5e8098'];

  const classes = useStyles();

  return (
    <section name="about" className="about">
      <div className={props.root}>
        <Typography
          weight={'bold'}
          variant={'h2'}
          style={{ marginBottom: '8vh' }}
          className="handwriting"
        >
          Who Am I?
        </Typography>
        <Typography style={{ marginBottom: '8vh' }}>
          {props.objective}
          <br />
        </Typography>
        <Grid spacing={3} container style={{ marginBottom: '8vh' }}>
          {props.keySellingPoints.map((value, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              className={classes.cardContainer}
            >
              <Grid
                className={classes.cardBody}
                elevation={0}
                variant="outlined"
                style={{ borderTop: `4px solid ${colours[index]}` }}
              >
                {/* BACK */}
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  className={[classes.cardBack, classes.cardSide].join(' ')}
                >
                  <Grid item>
                    <Typography
                      variant={'subtitle2'}
                      component="strong"
                      align={'center'}
                    >
                      {props.personalAttributes[index]}
                    </Typography>
                  </Grid>
                </Grid>
                {/* FRONT */}
                <Grid
                  container
                  direction="column"
                  className={[classes.cardFront, classes.cardSide].join(' ')}
                  alignItems="center"
                >
                  <Grid item>
                    <Icon
                      fontSize="large"
                      style={{ marginTop: '10px', color: colours[index] }}
                    >
                      {value.icon}
                    </Icon>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant={'subtitle2'}
                      component="strong"
                      align="center"
                    >
                      {value.name}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Paper
          square
          elevation={3}
          style={{ backgroundColor: '#59759b', width: '100%', padding: '20px' }}
        >
          <Grid
            container
            alignContent="center"
            alignItems="center"
            spacing={10}
          >
            <Hidden only={'xs'}>
              <Grid item sm={2}>
                <Icon style={{ color: 'white', fontSize: '72px' }}>
                  help_outline
                </Icon>
              </Grid>
            </Hidden>
            <Grid item sm={10}>
              <Typography
                variant={'h5'}
                component="strong"
                style={{ color: 'white', display: 'block' }}
                gutterBottom
              >
                Want to make awesome things together?
              </Typography>
              <LinkContainer
                to={'contact'}
                offset={0}
                duration={500}
                smooth={true}
              >
                <Typography variant={'button'} style={{ color: 'white' }}>
                  Get in touch below...
                </Typography>
              </LinkContainer>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </section>
  );
};

export default About;
