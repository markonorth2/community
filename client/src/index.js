import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ForgotPassword from './components/ForgotPassword';
import App from './components/App';
import Businesses from './components/Businesses';
import Categories from './components/Categories';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Header from './components/Header';
import { GridContainerStyled } from './components/App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import NewReport from './components/NewReport';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<Header />
<BrowserRouter>
		<Routes>
			<Route path="/home" element={<GridContainerStyled />} />
			<Route path="/report" element={<NewReport />} />
			<Route path="/" element={<App />} />
			<Route path="/businesses" element={<Businesses />} />
			<Route path="/categories" element={<Categories />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/forgotpassword" element={<ForgotPassword />} />
		</Routes>
	</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
