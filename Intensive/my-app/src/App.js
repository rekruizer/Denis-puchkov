import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row  from 'react-bootstrap/lib/Row';
import Col  from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
    <div className='wrapper'>
        <h1>Hello world</h1>
      </div>

    );  
  }
}



function SayFullName(props){
  return(
    <div>
    <h1> Моё имя {props.name}, фамилия - {props.surname}</h1>
    <a href={props.link}> Ссылка на мой профиль</a>
    </div>
    )
}

const element = <SayFullName name='Дибил' surname='Дибилов' link='https://www.vk.com/imyaro'/>


export default App;
