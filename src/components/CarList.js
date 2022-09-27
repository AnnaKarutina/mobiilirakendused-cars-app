import React, {useState, useEffect} from 'react';
import { View, Text } from "react-native";
import axios from 'axios';

const CarList = () => {
  const [cars, getCars] = useState('');

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
      return <Text key={brand.model[0].name}>{brand.model[0].name}</Text>;
    });
  };

  return (
    <View>
      <Text>{renderList()}</Text>
    </View>
  );
};

export default CarList;
