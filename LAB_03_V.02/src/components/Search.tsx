import { BlockRounded } from '@material-ui/icons';
import React, { FC, useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocationList } from '../contexts/location/LocationList';
import { setAlert } from '../store/actions/alertActions';
import { addLocation } from '../store/actions/locationActions';
import { locationReducer } from './../store/reducers/locationsReducer';
import { LocationState } from './../store/types'
import { getWeather, setLoading } from '../store/actions/weatherAction';



interface SearchProps {
  title: string;
}


const Search: FC<SearchProps> = ({ title }) => {
  const { locations, handleSubmit } = useLocationList()

  const dispatch = useDispatch();
  //const locations = useSelector<LocationState, LocationState["locations"]>((state) => state.locations)
  const [city, setCity] = useState('');
  

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  }
  
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addEachLocation(city)

    if (city.trim() === '') {
      return dispatch(setAlert('Miasto jest wymagane!'));
    }

    dispatch(setLoading());

    dispatch(getWeather(city));
    handleSubmit(city);
    setCity('');

  }
  const addEachLocation = (note: string) => {
    console.log("Dodaj lokację z szukajki!")
    dispatch(addLocation(city));
  }

  return (
    <div className="hero is-dark has-text-centered" style={{ height: "220px" }}>
      <div className="hero-body">
        <div className="container" >
          <h1 className="title">{title}</h1>
          <form className="py-0" onSubmit={submitHandler}>
            <input
              className="input has-text-centered mb-2"
              onChange={changeHandler}
              placeholder="Wprowadź nazwę miasta..."
              style={{ maxWidth: 400 }}
              type="text"    
              value={city}             
            />
            <button className="button is-info is-fullwidth" style={{ maxWidth: 400, height: 50, margin: '0 auto'}}>Szukaj</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;