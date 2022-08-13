import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";

import MyButton from "./MyButton";
import WeatherDataList from "./WeatherDataList";

const APIResponse = ({token}) => {
  
  const [status, setStatus] = useState('');
  const [apiRespData, setAPIResponseData] = useState();


  useEffect(() => {
    setStatus('')
    setAPIResponseData(null)
  }, [token])
  
  const callAPI = async () => {
    if (token) {
      console.log(token);
      setStatus("Calling API with Access token");
    } else {
      setStatus("Calling API Without Access Token");
    }
    const ath = "Bearer " + token;
    await fetch("https://localhost:5001/WeatherForecast", {
      method: "GET",
      headers: {
        Authorization: ath,
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
        if (response.ok) {
          const resp = await response.json();
          console.log(resp);
          setStatus(`API responsded ${response.status} ${response.statusText}`);
          setAPIResponseData(resp);
        } else {
          setStatus(
            `An error occurred while fetching data. API responsded: ${response.status} ${response.statusText}`
          );
          // setAPIResponseData(`An error occurred while fetching data. API responsded: ${response.status} ${response.statusText}`)
          console.log(response);
        }
      }).catch((err) => {
        setStatus(`An error occurred ${err}`);
      });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row", paddingBottom: '10px' }}>
        <div style={{ flexGrow: 0, flexBasis: "12em" }}>
          <MyButton
            text="Call API"
            variant="contained"
            color="primary"
            onClick={callAPI}
          >
            {" "}
          </MyButton>
        </div>

        <div style={{ flexGrow: 1}}>
          <Typography variant="caption">{status}</Typography>
        </div>
      </div>

      {apiRespData && (
        <WeatherDataList weathers={apiRespData}></WeatherDataList>
      )}
    </div>
  );
};

export default APIResponse;
