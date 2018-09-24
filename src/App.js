import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LocationList from './components/LocationList';
import { Grid, Col, Row } from 'react-flexbox-grid';
import './App.css';

const cities = ['Buenos Aires,ar', 'Bogota,col', 'Madrid,es',];

class App extends Component {
	handleSelectionLocation = city => {
		//eslint-disable-next-line
		console.log("handleSelectionLocation");
	}

	render() {
		return (
			<MuiThemeProvider>
				<Grid fluid>
					<Row>Titulo</Row>
					<Row>
						<Col xs={12} md={6}>
							<LocationList 
								cities={cities} onSelectedLocation={this.handleSelectionLocation} >
							</LocationList>
						</Col>
						<Col xs={12} md={6}>
							<div className="details"></div>			
						</Col>
					</Row>
				</Grid>
			</MuiThemeProvider>
		);
	}
}

export default App;
