import React from 'react'
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsalAuthentication } from "@azure/msal-react"
import MyButton from './MyButton'
import { useMsal } from '@azure/msal-react'
import { useAccount } from '@azure/msal-react'
import IdTokensTable from './IdTokensTable'
import { tokenRequest } from '../authConfig'
import { useState, useEffect } from 'react'
import { TextareaAutosize, Paper, Box, Container, Typography } from '@material-ui/core';

import '../index.css';

function UserTokens ({ onAcquireToken }) {
  
// const { login, result, error } = useMsalAuthentication("popup")

  const { instance, accounts, inProgress } = useMsal();
  const [accToken, setaccToken] = useState([])
  const [idToken, setidToken]  = useState([])
  const [tokenStatus, setTokenStatus] = useState([])

  const account = useAccount(accounts?.[0] || {} );

  const GetTokens = () => {
    console.log("Getting Tokens")
    

    if (account)
    {
      getTokenSilent();
    }
    else{
      setTokenStatus("Authenticating user before acquiring token\n")
      const result = instance.acquireTokenPopup(tokenRequest).then(response => {
        if (response.accessToken)  {
          console.log('Token Response: ', response)
          setidToken(response.idToken)
          setaccToken(response.accessToken)

          setTokenStatus("Acquired Token")
          onAcquireToken(response.accessToken)

          //callAPI(response.accessToken)

        }
        else
        {
          setaccToken("")
          setTokenStatus("Failed token acquisition\n")
        }

      }).catch(err => {
        setTokenStatus("Failed token acquisition\n")
        console.error(err);
      })
    }

    // if (accToken)
    // {
    //   callAPI(accToken)
    // }

    

  }
  const getTokenSilent = async () => {
    setTokenStatus("Acquiring Token for Logged in User\n")
    setaccToken("")
    setidToken("")
    const accessToken = instance.acquireTokenSilent({
      ...tokenRequest,
      account: accounts[0],
    }).then(response => {
      if (response.accessToken) {
        console.log(response.accessToken)
        setidToken(response.idToken)
        setaccToken(response.accessToken)
        setTokenStatus("Acquired Token silently")
        onAcquireToken(response.accessToken)

        //callAPI(response.accessToken)

      }
      else
      {
        setaccToken("")
        setTokenStatus("Failed token acquisition\n")  
      }

    }).catch(error => {
      setTokenStatus("Failed token acquisition\n")
      console.error("Error in token acquisition: " + error);
    });
    
  }
  

   useEffect ( () => {
     // getTokenSilent();

   }, [])

  return (
    //   <div>
    //       Hello
    //       <AuthenticatedTemplate>
    //       Some user is signed in.
    //       </AuthenticatedTemplate>
    //       <UnauthenticatedTemplate>
    //         <p>No user is signed in</p>
    //        </UnauthenticatedTemplate>

    // </div>

    <div >
      <MyButton text="Get Tokens" variant="contained" color="primary" onClick={GetTokens}> </MyButton>
      
      <p></p>
      
      <div><Typography variant="subtitle2" gutterBottom>{tokenStatus}</Typography></div>
      
      <p></p>
      
        <Typography variant="overline">Access Token</Typography>

      {accToken? 
      
          <div 
          className="nobreak" 
          style={{maxHeight: 200, width: 300, overflow: 'auto'}}> 
          {accToken}
          </div>
          
        : 
        <p></p>
        // <Typography variant="caption">No token</Typography>
        }
        <p>
        <Typography variant="overline">ID Token</Typography>
        </p>
      {idToken? 
        <div className="nobreak" style={{maxHeight: 200, width: 300, overflow: 'auto'}}>
          {idToken}
        </div> 
        : 
        <p></p>}
      



        {/* <p>Some user is signed in. {result.account.idTokenClaims.name}</p>
        <div>
          <small>
            {JSON.stringify(result.account.idTokenClaims)}
          </small>
        </div>
        <ul>
          <li>Name: {result.account.idTokenClaims.name}</li>
          <li>Surame: {result.account.idTokenClaims.family_name}</li>
          <li>City: {result.account.idTokenClaims.city}</li>
          <li>Job Title: {result.account.idTokenClaims.jobTitle}</li>
          <li>Country: {result.account.idTokenClaims.country}</li>
        </ul> */}
    </div>
  )
}

export default UserTokens