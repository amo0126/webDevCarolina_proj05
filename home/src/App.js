import './App.css';
import {Grid, Box, Paper} from '@material-ui/core'

function App() {
  return (
    <div className='whole'>
      <Grid container xs={12}>
        <Grid container xs={9}>
          <Grid container xs={12} style={{padding:20, }}>
            <Grid item xs={3} className="box">
              <Box>
                <Paper><img src></img></Paper>
              </Box>
            </Grid>
          </Grid>
          <Grid container xs = {12} style={{padding:5, justifyContent:'center',}}>
            <Grid item xs={4} className="box">
            <Paper><img src></img></Paper>
            </Grid>
          </Grid>
          <Grid container xs = {12} style={{padding:5, }}>
            <Grid item xs={12} className="box">
              <p>INFORMATION BLURB</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={3}>
          //INSERT IMAGE HERE
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
