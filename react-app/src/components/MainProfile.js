import { Paper } from "@material-ui/core";
import useStyles from "../styles/useStyles";
import { useMsal } from '@azure/msal-react'
import Grid from "@material-ui/core/Grid";
import UserProfile from "./UserProfile";
import UserTokens from "./UserTokens";
import APIResponse from "./APIResponse.js";
import { useEffect, useState } from "react";

import Box from "@material-ui/core/Box";

const MainProfile = (props) => {
  const classes = useStyles();
  const [accToken, setaccToken] = useState('');
  const [idToken, setIdToken] = useState(props.idToken);

  useEffect(() => {
    if (props.idToken){
        setIdToken(props.idToken)
    }
  }, [props.idToken])
  
  const UpdateAccTokens = (idToken, accToken) => {

    setaccToken(accToken);
    setIdToken(idToken)
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>






      <div style={{flexGrow: 0}}>
        <Paper justify="center" elevation={5} className={classes.paper}>
          <Box
            // width={250}
            justifyContent="flex-start"
            m={2}
            p={1}
            alignItems="flex-start"
            // minHeight="70vh"
          >
            <UserProfile idToken={idToken}></UserProfile>
          </Box>
        </Paper>
      </div>

      <div style={{flexGrow: 1}}>
        <Paper justify="center" elevation={5} className={classes.paper}>
          <Box
            // width={300}
            justifyContent="flex-start"
            m={2}
            p={1}
            alignItems="flex-start"
            // minHeight="70vh"
          >
            <UserTokens onAcquireToken={UpdateAccTokens}></UserTokens>
            <APIResponse token={accToken}></APIResponse>
          </Box>
        </Paper>
      </div>
    </div>
  );
};

export default MainProfile;
