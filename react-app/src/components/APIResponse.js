import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper, Typography } from '@material-ui/core';
import { useState, useEffect } from 'react'

import MyButton from './MyButton'
import WeatherDataList from './WeatherDataList'

const APIResponse = ( TokenData ) => {

    const token = TokenData.token
    const [apiResp, setAPIResponse] = useState()
    const [status, setStatus] = useState()
    const [apiRespData, setAPIResponseData] = useState()

    useEffect( () => {
        //setStatus("")
    })

    const callAPI = async() => {
        if (token) {
            console.log(token)
            setStatus("Calling API with Access token")
        }
        else
        {
            setStatus("Calling API Without Access Token")
        }
        const ath = 'Bearer ' + token
        const x = await fetch (
          'https://localhost:5001/WeatherForecast', 
          {
            method: 'GET',
            headers: {
              'Authorization': ath,
              'Content-Type': 'application/json'
            },
          }
          ).then(async (response) => {
              if(response.ok){
                  const resp = await response.json()
                  console.log(resp)
                  setAPIResponse(resp)
                  const arr = []
                  //Object.keys(resp).forEach(key => arr.push({name: key, value:resp[key]}))
                  setAPIResponseData(resp)
                  setStatus("API response code: " + response.status)
                }
                else{
                    setAPIResponse(response.status)
                    console.log(response)
                    setStatus("API response code: " + response.status)
                }
          }).catch( (err) =>{
              setAPIResponse(err)
          });
          
        // console.log(x)
        // console.log(x.res)
        // const d = await x.json()
        // console.log(d)
    
      }

return (
    <div >
      <MyButton text="Call API" variant="contained" color="primary" onClick={callAPI}> </MyButton>
      <p></p>
      <div>
      <Typography variant="caption">{status}</Typography>
      {/* <Typography variant="subtitle1">{apiResp}</Typography> */}
      </div>
      {apiRespData?
        // <div>{apiResp[0].temperatureC + apiResp[0].summary}</div>
        <WeatherDataList weathers={apiRespData}></WeatherDataList>
        :
        <div></div>
      }
      
      
      

      </div>
)


}

export default APIResponse