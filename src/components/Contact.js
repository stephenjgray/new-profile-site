import React from 'react';
import { loadCSS } from 'fg-loadcss';

import cv from '../assets/StephenJGray - November2021.pdf';

import {
  Grid,
  Avatar,
  Card,
  CardMedia,
  CardContent,
  Link,
  Typography,
  makeStyles,
} from '@material-ui/core';

import {
  AlternateEmail,
  PhonelinkRingOutlined,
  DescriptionOutlined,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  skype: {
    '& a:hover': {
      textDecoration: 'none',
    },
  },
  skypeContent: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  contactCard: {
    display: 'flex',
    borderRadius: '0',
    width: '100%',
  },
  contactCardLink: {
    color: 'white',
    lineHeight: '18.5px',
    display: 'contents',
  },
  contactCardMedia: {
    width: '75px',
    height: '100%',
    backgroundColor: '#4f698b',
  },
  contactCardContent: {
    backgroundColor: '#58759b',
    width: '100%',
    padding: '16px',

    '&:last-child': {
      paddingBottom: '16px',
    },
  },
}));

const Contact = (props) => {
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css')
    );
  }, []);

  const classes = useStyles();

  return (
    <section className="contact" name="contact">
      <div className={[classes.root, props.root].join(' ')}>
        <Grid container spacing={5} direction="row">
          <Grid
            container
            spacing={2}
            item
            sm={12}
            md={6}
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Typography variant={'overline'}>Want to know more?</Typography>
            <Typography variant={'h2'} component={'h2'} className="handwriting">
              Let's have a chat...
            </Typography>
          </Grid>
          <Grid
            container
            spacing={2}
            item
            sm={12}
            md={6}
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item style={{ width: '100%' }}>
              <Card className={classes.contactCard}>
                <Link
                  className={classes.contactCardLink}
                  href={`mailto:${props.email}`}
                >
                  <CardMedia>
                    <Avatar
                      variant="square"
                      className={classes.contactCardMedia}
                    >
                      <AlternateEmail fontSize="large" />
                    </Avatar>
                  </CardMedia>

                  <CardContent className={classes.contactCardContent}>
                    {props.email}
                  </CardContent>
                </Link>
              </Card>
            </Grid>
            <Grid item style={{ width: '100%' }}>
              <Card className={classes.contactCard}>
                <Link
                  className={classes.contactCardLink}
                  href={`tel:${props.mobile}`}
                >
                  <CardMedia>
                    <Avatar
                      variant="square"
                      className={classes.contactCardMedia}
                    >
                      <PhonelinkRingOutlined fontSize="large" />
                    </Avatar>
                  </CardMedia>
                  <CardContent className={classes.contactCardContent}>
                    {props.mobile}
                  </CardContent>
                </Link>
              </Card>
            </Grid>
            <Grid item style={{ width: '100%' }}>
              <Card className={classes.contactCard}>
                <Link className={classes.contactCardLink} href={cv} download>
                  <CardMedia>
                    <Avatar
                      variant="square"
                      className={classes.contactCardMedia}
                    >
                      <DescriptionOutlined fontSize="large" />
                    </Avatar>
                  </CardMedia>
                  <CardContent className={classes.contactCardContent}>
                    Download CV
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <br />
      </div>
    </section>
  );
};

export default Contact;
