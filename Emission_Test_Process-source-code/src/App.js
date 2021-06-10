import React, { useState, useEffect } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';
import mqtt from 'mqtt';

import axios from 'axios';

import { chartjs } from './helpers';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
// import './assets/scss/index.scss';
import validators from './common/validators';
import Routes from './Routes';

const browserHistory = createBrowserHistory();






export default function App() {


  useEffect(() => {
    // if (useflag == 0) {
    // setuseflag(1)
    // console.log("MqTT called")
    var client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt");
    client.on("message", (topic, payload) => {


      var mqttvalue = payload.toString();

      console.log("++++++++++++++++++")

      console.log(mqttvalue)
      console.log("++++++++++++++++++")

      var splits = mqttvalue.split(",");
      console.log(splits[0])
      console.log(splits[1])
      console.log(splits[2])
      console.log(splits[3])
      console.log(splits[4])
      console.log(splits[5])


      if (splits[5] == "1") {

     


    



     

                const admission_create = {
                  mobile_number:splits[0],
                  vehicle_number: splits[1],
                  air_pollution_level: splits[2],
                  lat:splits[3],
                  lon:splits[4],
              
                };


                const options = {
                  url: 'http://192.168.1.112:5008/pollution_api',
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },        
                  data: JSON.stringify(admission_create)
        
                }

                console.log (options)

                axios(options)
                .then(response => {
                  if (response.status == 200 ) {

                    console.log ("777777777777777777777777777777")
                    console.log(response.data)
                    console.log ("777777777777777777777777777777")



                  }

                })


            

         

      }


    });
    client.on("connect", () => {
      client.subscribe("panimalar_pollution");

      // client.publish("1999", "Updated!");
      console.log("++++++++++++++++++++Connected to MQTT Broker.++++++++++++++++++++++++++++++++");
    });

  }, [])




  return (

    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );



}
