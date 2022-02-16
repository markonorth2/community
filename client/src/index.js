import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import Header from './components/Header';
import { GridContainerStyled } from './components/App';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Grid } from '@material-ui/core';
import NewReport from './components/NewReport';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
      <Header />
     
      <Routes>
        <Route path="/home" element={<GridContainerStyled />} />
        <Route path="/report" element={<NewReport />} />
        <Route path="/" element={<App />} />
      </Routes>
			
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
