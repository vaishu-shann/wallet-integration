/* eslint-disable no-unused-vars */

import React, { Component } from "react";
import {
	Route,
	Routes
} from "react-router-dom";
import WalletLogin from "../../components/LoginPages/WalletLogin";


export default class Login extends Component {
	render() {
		return <div>
			<Routes>
				<Route path="/" element={<WalletLogin onAddressChanged={address => {}}/>} exact/>

			</Routes>
		</div>;
	}
}
