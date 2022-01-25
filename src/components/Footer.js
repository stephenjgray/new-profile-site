import React from 'react';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
  Button,
  Divider,
  Grid,
  withStyles,
  Typography,
  Link,
} from '@material-ui/core';

const useStyles = ({ breakpoints }) => ({
  social: {
    [breakpoints.up('xs')]: {
      justifyContent: 'center',
    },
    [breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
    },
  },
  copyright: {
    [breakpoints.up('xs')]: {
      textAlign: 'center',
      justifyContent: 'center',
    },
    [breakpoints.up('sm')]: {
      justifyContent: 'flex-start',
      textAlign: 'left',
    },
  },
});

const Footer = (props) => {
  function Copyright() {
    return (
      <Typography variant="body2" style={{ color: 'white' }}>
        {'Copyright © '}
        <Link
          color="inherit"
          href="https://material-ui.com/"
          style={{ color: 'white' }}
        >
          {props.name}
        </Link>{' '}
        {new Date().getFullYear()}
        {'. | '}
        {'All rights reserved.'}
      </Typography>
    );
  }

  return (
    <div className="footer" style={{ backgroundColor: '#59759b' }}>
      <Divider />
      <br />
      <Grid container spacing={3}>
        <Grid
          className={props.classes.copyright}
          item
          xs={12}
          sm={6}
          style={{ alignSelf: 'center', paddingLeft: '24px' }}
        >
          <Copyright />
        </Grid>
        <Grid className={props.classes.social} container item xs={12} sm={6}>
          <Button
            href={props.urls.linkedIn}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon style={{ color: 'white' }} />
          </Button>
          <Button
            href={props.urls.gitHub}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon style={{ color: 'white' }} />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(useStyles)(Footer);
