import { Paper } from '@material-ui/core'
import useStyles from "../styles/useStyles"
import Grid from '@material-ui/core/Grid';
import UserProfile from './UserProfile';
import UserTokens from './UserTokens'
import APIResponse from './APIResponse.js'
import { useState } from 'react'

import Box from '@material-ui/core/Box';

const MainProfile = () => {
    const classes = useStyles()
    const [accToken, setaccToken] = useState([])

    const UpdateAccTokens = (accessToken) => {
        console.log('Recd access token in main page: ' + accessToken)
        setaccToken(accessToken)
    }

    
    return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
            <Grid item>
                <Paper justify="center" elevation={5}  className={classes.paper}>
                    <Box
                        width={300}  
                        justifyContent="flex-start" 
                        m={2} p={1}
                        alignItems="flex-start"
                        minHeight="100vh">
                        <UserProfile ></UserProfile>
                    </Box>
                </Paper>
            </Grid>

            <Grid  item>
            <Paper justify="center" elevation={5}  className={classes.paper}>
                    <Box 
                        width={300} 
                        justifyContent="flex-start" 
                        m={2} p={1}
                        alignItems="flex-start"
                        minHeight="100vh"
                        >
                        <UserTokens onAcquireToken={UpdateAccTokens}></UserTokens>
                    </Box>
                </Paper>
            </Grid>
            
            <Grid  item>
                <Paper justify="center" elevation={5} className={classes.paper}>
                    <Box 
                        width={500} 
                        justifyContent="flex-start" 
                        m={2} p={1}
                        alignItems="flex-start"
                        minHeight="100vh">
                        <APIResponse token={accToken}></APIResponse>
                    </Box>
                    {/* {accToken? 
                        <div 
                        className="nobreak" 
                        style={{maxHeight: 200, width: 400, overflow: 'auto'}}> 
                        {accToken}
                        </div>
                        : 
                        <p>No token</p>
                    } */}
                </Paper>
            </Grid>


          </Grid>
      </Grid>
    </Grid>
    )
}

export default MainProfile