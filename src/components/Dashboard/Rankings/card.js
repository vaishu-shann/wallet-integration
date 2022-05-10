/* eslint-disable no-unused-vars */

import React from "react";
import IconRankDefaultUser from "./../../../assets/img/icons/icon_rank_default_user.png";
import "./rankings.scss";

const userdata = [
{rank:"1", user_name:"user1",win_ratio:"10%" },
{rank:"2", user_name:"user2",win_ratio:"20%" },
{rank:"3", user_name:"user3",win_ratio:"30%" },
{rank:"4", user_name:"user4",win_ratio:"40%" },
{rank:"5", user_name:"user5",win_ratio:"50%" },
{rank:"6", user_name:"user6",win_ratio:"60%" },
{rank:"7", user_name:"user7",win_ratio:"70%" },
];


export default function RankCard() {

	return (

		<>
			{userdata.map((user,index) => (
				<div className="rank-card flex align-center justify-evenly" key={index}>
					<div className="flex align-center">
						<span className="h5 text-secondary" style={{marginRight:"10px"}}>
							{user.rank}
						</span>
						<img className="ml-2" src={IconRankDefaultUser} width={35} height={35} alt="Rank Default User" />
						<div className="flex column ml-2">
							<span className="h5 text-white font-oxanium">
								{user.user_name}
							</span>
							<span className="h5 text-secondary font-oxanium">
						244 MP earned
							</span>
						</div>
					</div>
					<div className="flex column align-self-end">
						<span className="h5 text-white font-oxanium">
							{user.win_ratio}
						</span>
						<span className="h5 text-secondary font-oxanium">
					WIN AVG
						</span>
					</div>
				</div>
			))}

		</>

	
	);
}