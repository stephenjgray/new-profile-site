import React from 'react';
import { Grid } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';

const Experience = (props) => {
  return (
    <section className="experience" name="experience">
      <Typography variant={'h2'} component={'h2'} align={'center'} gutterBottom>
        Professional Experience
      </Typography>
      <Grid container direction="column" className="timeline-container">
        {props.experience.map((value, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-item-content">
              <Typography variant={'h5'} component={'h3'}>
                {value.jobTitle}
              </Typography>
              <Typography variant={'subtitle2'} component={'h4'}>
                {value.dates}
              </Typography>
              {value.company && (
                <Typography
                  variant={'overline'}
                  component={'h4'}
                  style={{ padding: '6px 0' }}
                >
                  {value.company}
                </Typography>
              )}
              {/* <Typography variant={"body2"}> */}
              {value.description.map((descLine, descIndex) => (
                <Typography
                  style={{ textAlign: 'justify', paddingBottom: '12px' }}
                  key={'descIndex-' + descIndex}
                  variant={'body2'}
                >
                  {descLine}
                </Typography>
              ))}
              {/* </Typography> */}
              <div className="timeline-item-content-circle"></div>
            </div>
          </div>
        ))}
      </Grid>
    </section>
  );
};

export default Experience;
