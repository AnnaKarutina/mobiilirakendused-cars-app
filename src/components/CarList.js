import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView } from "react-native";
import axios from 'axios';

import CarDetail from './CarDetail'

const CarList = () => {
  const [cars, getCars] = useState([]);

  useEffect(() => {
    getAllCars();
  }, []);

  const getAllCars = () => {
    axios.get('https://givecars.herokuapp.com')
      .then(response => {
        const allCars = response.data;
        getCars(allCars);
    })
      .catch(error => console.log(`Error: ${error}`));
  }

  console.log(cars)

  const renderList = () => {
    return cars.map(brand => {
      return <CarDetail key={brand.model[0].name} brand={brand}/>;
    });
  };

  return (
    <View>
      <ScrollView>{renderList()}</ScrollView>
    </View>
  );
};

export default CarList;
