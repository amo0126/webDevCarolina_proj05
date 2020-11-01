import logo from './logo.svg';
import './contact.css';
import {Grid} from '@material-ui/core';
import {Box} from '@material-ui/core';
import {TextField} from "@material-ui/core";
import {InputLabel} from "@material-ui/core";
import {FormControl} from "@material-ui/core";
import {NativeSelect} from "@material-ui/core"
import {Button} from "@material-ui/core"

function App() {
  return (
    <div className="whole">
        <Grid container style={{ padding: 15 }}>
            <Grid item xs={4} style={{ padding: 15 }} class="box">
                <Box style={{borderWidth:1, alignItems:'center', justifyContent:'center', width:100, height:100,
                    backgroundColor:'white', borderRadius:10,}} class='text'>
                    <p color ='black'>We'd love to chat!</p>
                </Box>
            </Grid>
            <Grid item sm={8} style={{ padding: 15 }}>
                <Grid item xs={12} style={{ padding: 10 }}>
                    <InputLabel required id="demo-simple-select-placeholder-label-label" style={{ padding: 1 }}>Name</InputLabel>
                    <TextField label="First Name" style={{ padding: 2 }}  />
                    <TextField label="Last Name" style={{ padding: 2 }} />
                </Grid>
                <Grid item xs={12} style={{ padding: 10 }}>
                    <InputLabel required id="demo-simple-select-placeholder-label-label standard-required">Email</InputLabel>
                    <TextField/>
                </Grid>
                <Grid item xs={12} style={{ padding: 10 }}>
                    <InputLabel required id="demo-simple-select-placeholder-label-label standrd-required">Select an Option</InputLabel>
                    <FormControl>
                        <NativeSelect>
                            <option>None</option>
                            <option>Client Partner</option>
                            <option>Student Partner</option>
                            <option>Interest in Joining the Team</option>
                        </NativeSelect>
                    </FormControl>
                </Grid>
                <Grid item xs={12} style={{ padding: 10 }}>
                    <InputLabel id="demo-simple-select-placeholder-label-label">Message</InputLabel>
                    <TextField id="standard-full-width" placeholder="Write Message Here"
                               fullWidth margin="normal"/>
                </Grid>
                <Grid item xs={12} style={{ padding: 10 }} class = "submit">
                    <Button variant="contained" color="primary">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
