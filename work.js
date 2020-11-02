import React from 'react';
import '.work.css';
import {Grid} from '@material-ui/core'

function Work() {
  return (
    <Grid container direction='row' justify="space-evenly">
      <Grid item xs={4} className="left-section">
        <p>Interested in partnering with us? <br/> Here are some ways we can work together</p>
      </Grid>
      <Grid item container direction='column' className="right-section" xs={6} spacing={6}>
        <Grid item container direction ='column' className= "blurb">
          <Grid item className="title-box">
            <p>01</p>
          </Grid>
          <div className="space"></div>
          <Grid item className="box">
            Blurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb OneBlurb One
          </Grid>
        </Grid>
        <Grid item container direction ='column' className= "blurb">
          <Grid item className="title-box">
            <p>02</p>
          </Grid>
          <div className="space"></div>
          <Grid item className="box">
            Blurb Two
          </Grid>
        </Grid>
        <Grid item container direction ='column' className= "blurb">
          <Grid item className="title-box">
            <p>03</p>
          </Grid>
          <div className="space"></div>
          <Grid item className="box">
            Blurb Three
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Work;


