import React, { FC } from 'react';
import { WeatherData } from '../store/types';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';
import { useLocationList } from '../contexts/location/LocationList';

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const celsius = (data.main.temp - 273.15).toFixed(2);

  const { handleDelete } = useLocationList()

  return (
    <section className="section" style={{ marginTop: "-100px" }}>
      <div style={{ paddingLeft: "70vw", color: 'white'}}>
        <IconButton onClick={() => handleDelete(data.id)} aria-label="delete">
          <HighlightOffSharpIcon fontSize="small" color="disabled"/>
        </IconButton>
      </div>
      <div className="container" style={{ backgroundColor: "#D7E9F7", padding: "30px", borderRadius: "6px" }}>
        <h1 className="title has-text-centered" style={{ marginBottom: 25 }}>{data.name} - {data.sys.country}</h1>
        <div className="level" style={{ alignItems: 'flex-start' }}>        
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Wilgotność</p>
              <p className="title">{data.main.humidity}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Temperatura:</p>
              <div className="title">
                <p>{celsius}<sup>&#8451;</sup></p>
              </div>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">{data.weather[0].description}</p>
              <p className="title"><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" /></p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Ciśnienie</p>
              <p className="title">{data.main.pressure}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Wiatr</p>
              <p className="title">{data.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Weather;