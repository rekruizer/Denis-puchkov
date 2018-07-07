import React, { Component } from 'react';


import Row  from 'react-bootstrap/lib/Row';
import Col  from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
width: 248px;
height: 41px;
color: #464646;
font-size: 18px;
font-weight: 300;
line-height: 22px;
`
const Worktime = styled.div`
width: 181px;
height: 38px;
color: #2a2a2a;
font-family: Roboto;
font-size: 12px;
font-weight: 300;

	span{
		display:block;
		color: #464646;
		font-size: 21px;
		font-weight: 700;
	}
`
const Calls = styled.div`
width: 181px;
height: 38px;
color: #2a2a2a;
font-family: Roboto;
font-size: 12px;
font-weight: 300;

	span{
		display:block;
		color: #464646;
		font-size: 21px;
		font-weight: 700;
	}
`
const CallButton = styled.button`
width: 176px;
height: 48px;
border-radius: 30px;
background-color: #3fc7db;
color: #ffffff;
font-size: 14px;
font-weight: 400;
`


class Tel extends React.Component {
	render(){
		return(
			<span> {this.props.tel}</span>
			) 
	}
}

class Adress extends React.Component {
	render(){
		return(
			<span> {this.props.addr}</span>
			)
	}
}
class Menu extends React.Component {
	render() {
		return (
			<Row>
				<Col lg={3} md={3}>
					<Repair>Ремонт айфонов в сервисном центре и на выезде</Repair>
				</Col>
				<Col lg={3} md={3} lgOffset={1}>
					<Worktime>Пн-пт с 10 до 20, сб,вс с 11 до 18
					<Adress addr="Ленинская,31"/>
					</Worktime>
				</Col>
				<Col lg={3} md={3}>
					<Calls>Звонки принимаются 24 часа
					<Tel tel="8 (846) 922 55 44" />
					</Calls>

				</Col>
				<Col lg={2} md={2}>
					<CallButton>Заказать звонок!</CallButton>
				</Col>
			</Row>
			)
	}
}

export default Menu