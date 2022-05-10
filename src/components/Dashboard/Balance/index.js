import React from "react";
import {Form} from "react-bootstrap";
// import APIManager from "../../../utils/APIManager";
import Rankings from "../Rankings";
import "./balance.scss";

export default function Balance () {

	return (
		<div className="dashboard-right-sidebar">
			<div className="balance-container">
				<div className="flex align-center justify-between">
					<span className="header-title">
						Balance
					</span>
					<button className="button">
						<span>Buy</span>
					</button>
				</div>

				<div className="background">
					<div className="flex-column align-content-center justify-content-center pool_container">
						<Form.Select aria-label="Pool Select Box"> 
						<div>Coinfantasy</div>
							{/* {
								pools.map((item, index) => (
									<option key={index} value={item.id}>{item.pool_name}</option>
								))
							} */}
						</Form.Select>
					</div>
					<div className="flex column align-center justify-center bal_container">
						<div className="flex align-self-end">
							<span className="text-white h4">432</span>
							<span className="text-secondary h5 ml-2">MP</span>
						</div>
						<div className="val_amount mt-3">~1015.27</div>
					</div>
					<div className="staking_amount">Staking amount</div>
				</div>

				<div className="text-secondary mt-4 font-oxanium">
					Staking coins are required to play.
					<span className="text-primary cursor-pointer"> Learn more </span>
					about why we stake your $MP coins.
				</div>

				<div className="horizontal-line" />

				<div className="flex align-center justify-between mt-4">
					<div className="flex column">
						<span className="h5">Wallet Balance</span>
						<div className="flex align-self-end">
							<span className="h4 amount_value">1002</span>
							<span className="text-secondary h6 ml-2">MP</span>
						</div>
					</div>
					<div className="flex column">
						<span className="h5">Staking</span>
						<div className="flex align-self-end">
							<span className="h4 amount_value">432</span>
							<span className="text-secondary h6 ml-2">MP</span>
						</div>
					</div>
				</div>
				<div className="flex align-center justify-between mt-4">
					<div className="flex column">
						<span className="h5">Rewards</span>
						<div className="flex align-self-end">
							<span className="h4 amount_value text-green">+89</span>
							<span className="text-secondary h6 ml-2">MP</span>
						</div>
					</div>
					<div className="flex column">
						<span className="h5">Earned back</span>
						<div className="flex align-self-end">
							<span className="h4 amount_value text-green">+25</span>
							<span className="text-secondary h6 ml-2">MP</span>
						</div>
					</div>
				</div>

				<div className="flex align-center justify-between mt-4 buttons-container">
					<button className="button stake">
						<span>Stake</span>
					</button>
					<button className="button unstake">
						<span>Unstake</span>
					</button>
				</div>
			</div>
			<Rankings />
		</div>
	);
}
