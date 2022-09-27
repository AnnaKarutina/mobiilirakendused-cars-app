import React, {Component} from 'react';
import { View, Text } from "react-native";
import axios from 'axios';


class CarList extends Component {
  componentDidMount() {
    console.log('console output from car components');
    axios.get('https://givecars.herokuapp.com')
      .then(response => {
      console.log(response.data);
    });
  }

  render() {
    return (
      <View>
        <Text>Car List</Text>
      </View>
    );
  }
}

export default CarList;
