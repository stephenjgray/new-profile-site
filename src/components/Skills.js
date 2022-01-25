import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Skills = (props) => {
  return (
    <section className="skills" name="skills">
      <div className={props.root}>
        <Grid container>
          <Grid>
            <Grid>
              <Typography variant={'overline'}>My Specialties</Typography>
            </Grid>
            <Grid>
              <Typography
                weight={'bold'}
                variant={'h1'}
                component={'h2'}
                className="handwriting"
              >
                What I do...
              </Typography>
            </Grid>
            <Grid>
              <Typography variant={'button'} component={'h3'} align={'right'}>
                Amongst other things, I specialise in:
              </Typography>
            </Grid>
          </Grid>
          <Grid>
            <ul>
              {props.technicalSkills.map((value, index) => (
                <li className="" key={index}>
                  <Typography variant={'overline'}>{value}</Typography>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
        <Typography component={'div'}></Typography>
      </div>
    </section>
  );
};

export default Skills;
