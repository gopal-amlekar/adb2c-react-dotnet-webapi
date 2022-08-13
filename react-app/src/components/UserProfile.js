import React from 'react'
import { useMsal } from '@azure/msal-react'
import { useAccount } from '@azure/msal-react'
import IdTokensTable from './IdTokensTable'
import Typography from '@material-ui/core/Typography';

const UserProfile = ({idToken}) => {

  const { instance, accounts, inProgress } = useMsal();

  const account = useAccount(accounts?.[0] || {} );

  return (


    <div style={{ display: 'flex', flexDirection: 'column'}}>
        <div style={{padding: '4px'}}>
          <Typography variant="overline" color="primary" >Id Token</Typography>
        </div>
        
        {idToken ?
        <div className="nobreak" style={{padding: '4px', width: '100%'}}> 
            {idToken}
        </div>
        :
        <div>
          <Typography variant="subtitle1" color="error" >
            Log in to obtain and view Id token   
          </Typography>
          <Typography variant="caption" color="info" >
            Note: Obtaining an access token also updates Id token
          </Typography>
        </div>
        }
        {/* <Typography variant="h5" color="primary">Id Token</Typography>
      
      <div className="nobreak"> {idToken} </div> */}


      </div>

  )
}

export default UserProfile