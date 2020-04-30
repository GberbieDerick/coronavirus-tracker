
import React, { Component } from 'react';


import {fetchData} from './api/index';
import CoronaImage from './images/image.png';

import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';


class App extends Component {

  state = {
    data :{ },
    country: ''
  }
  async componentDidMount(){
    const fetchdata = await fetchData();

    console.log(fetchdata);
    this.setState({data:fetchdata});
    

  }
  handleCountryChange = async(country)=>{
    const fetchdata = await fetchData(country );
    this.setState({data:fetchdata,country:country});
     console.log(fetchdata);
     
    


  }
  
  render() { 
    const {data,country}= this.state;
    return ( 
      <div className={styles.container}>
        <img className={styles.image} src={CoronaImage}  alt="COVID-19"/>
        <Cards data={data}/>

        <CountryPicker  handleCountryChange={this.handleCountryChange}/>
        <Charts data={data} country={country}/>


   </div>
     );
  }
}
 
export default App;

