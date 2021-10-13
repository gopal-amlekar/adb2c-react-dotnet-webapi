
import React from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const WeatherDataList = ({ weathers }) => {

    return (
     
        <TableContainer>
            <Table  style={{ width: 450 }}> 
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Temperature</TableCell>
                        <TableCell>Summary</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {weathers.map( (weatherData)=> (
                        <TableRow key={weatherData.date}>
                            <TableCell component="th" scope="row">
                                {/* {weatherData.date} */}
                                {/* {new Date(Date.parse(weatherData.date))} */}

                                {new Intl.DateTimeFormat("en-GB", {
                                    year: "numeric",
                                    month: "short",
                                    day: "2-digit",
                                    hour: 'numeric', minute: 'numeric', second: 'numeric',
                                    }).format(new Date(Date.parse(weatherData.date)))}

                            </TableCell>
                            <TableCell align="right">{weatherData.temperatureC} &deg;C / {weatherData.temperatureF} &deg;F</TableCell>
                            <TableCell>{weatherData.summary}</TableCell>
                        </TableRow>

                    ))} 
                    
                </TableBody>
                
            </Table>
        </TableContainer>



    )
}


export default WeatherDataList

