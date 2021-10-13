const WeatherData = ({ date, temperatureC, summary }) => {
    
    console.log('Date :' + new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
        }).format(date))   


    return (
    <div>
      <div>
        <p>
            {new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long",
            day: "2-digit"
            }).format(date)}

            {/* {date} */}
        </p>
        <p>{temperatureC}</p>
        <p>{summary}</p>
      </div>
    </div>
    )
}

  export default WeatherData