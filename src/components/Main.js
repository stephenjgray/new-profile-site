/* eslint-disable */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

const styles = ({ breakpoints }) => ({
  root: {
    padding: 16,
    [breakpoints.up('sm')]: {
      padding: 24,
      maxWidth: 500,
      margin: 'auto',
    },
    [breakpoints.up('md')]: {
      maxWidth: 700,
    },
    [breakpoints.up('lg')]: {
      maxWidth: 1060,
    },
    [breakpoints.up('xl')]: {
      maxWidth: 1720,
    },
  },
});

const Main = (props) => {
  const classes = props.classes;
  const profile = props.data.cv.profile;
  const experience = { experience: props.data.cv.experience };
  const education = { education: props.data.cv.education };
  const technicalSkills = { technicalSkills: profile.technicalSkills };
  const personalAttributes = { personalAttributes: profile.personalAttributes };
  const projects = { projects: props.data.cv.projects };

  return (
    <>
      <Hero {...classes} {...profile} />
      <About {...classes} {...profile} />
      <Skills {...classes} {...technicalSkills} />
      <Experience {...classes} {...experience} />
      {/* TODO   <Projects {...classes} {...projects} /> */}
      <Education {...classes} {...education} />
      <Contact {...classes} {...profile} />
      <Footer {...profile} />
    </>
  );
};

Main.propTypes = {};
Main.defaultProps = {};

export default withStyles(styles)(Main);
