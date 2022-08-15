
import {useEffect, useState} from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import MainProfile from "./components/MainProfile"

import { ThemeProvider  } from '@material-ui/core/styles';
import { theme } from "./styles/theme";
import { useMsal } from '@azure/msal-react';

import {tokenRequest} from './authConfig';

function App() {

  const [idToken, setIdToken] = useState('');
  const {instance, accounts} = useMsal();

  // useEffect(() => {
  //   if (accounts.length > 0){
  //     instance.acquireTokenSilent({
  //       ...tokenRequest,
  //       account: accounts[0]
  //     }).then(response => {
  //       if (response.idToken){
  //         setIdToken(response.idToken);
  //       }
  //     })
  //   }  
  // }, [accounts, instance])
  
  const onLogin = (idToken) => {
    setIdToken (idToken);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header title="ADB2C Demo (Protecting API) " onLogin={onLogin}></Header>
      <Intro width="100px"></Intro>
      <MainProfile idToken={idToken}></MainProfile>
    </ThemeProvider>

  )
  
}

export default App;
