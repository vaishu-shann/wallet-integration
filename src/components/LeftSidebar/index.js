/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import {useEffect, useState} from "react";
import Vector from "./../../assets/img/icons/vector.png";
import VectorLeft from "./../../assets/img/icons/vector_left.png";
// import IconSetting from "./../../assets/img/icons/icon_setting.png";
import IconEdit from "./../../assets/img/icons/icon_edit.png";
import IconArena from "./../../assets/img/icons/icon_arena.png";
import IconCreator from "./../../assets/img/icons/icon_creator.png";
import IconActivity from "./../../assets/img/icons/icon_activity.png";
import IconRewards from "./../../assets/img/icons/icon_reward.png";
import IconGoldstar from "./../../assets/img/icons/icon_goldstar.png";
import IconFantasy from "./../../assets/img/icons/icon_fantasy.png";
import IconMetamask from "./../../assets/img/icons/icon_metamask.png";
import DefaultIcon from "./../../assets/img/icons/default_icon.png";
import "./left_sidebar.scss";
import { useNavigate } from "react-router-dom";

export default function LeftSidebar () {
	const [expand, setExpand] = useState(true);
	const [mode, setMode] = useState(0);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [walletAddress, setWalletAddress] = useState("");
	const navigate = useNavigate();

	async function disconnect() {
		// eslint-disable-next-line no-undef
		localStorage.clear();
		navigate("/");
	  }

	async function profileView(){
		navigate("/view-profile");
	}
	
	async function viewSettings(){
		navigate("/settings");
	}
	return (
		expand === false 
			?
			<div className="left-sidebar" id="fixed">
				<img src={Vector} alt="Vector" onClick={() => setExpand(true)} style={{cursor:"pointer"}}/>
				<span className="h4">MENU</span>
				<span />
			</div>
			:
			<div className="left-sidebar-expanded" id="fixed">
				<div className="flex justify-between">
					{/*<img className="icon" src={IconSetting} alt="Icon Settings" />*/}
					<div />
					<img className="icon" src={VectorLeft} alt="Vector Left" onClick={() => setExpand(false)}  style={{cursor:"pointer"}}/>
				</div>

				<div className="flex align-center justify-center mt-2">
					<img className="profile" src={DefaultIcon} alt="Default Profile" onClick={profileView} />
				</div>

				<div className="flex align-center justify-center mt-2">
					<h4 className="h4 m-0 font-oxanium">User1</h4>
					<img className="ml-2" src={IconEdit} alt="EDITING" />
				</div>

				<div className="flex align-center justify-center mt-2">
					<h5 className="h5 m-0 font-oxanium text-secondary">user1@email.com</h5>
					<img className="ml-2" src={IconEdit} width={12} height={12} alt="EDITING" />
				</div>

				<div className="flex justify-between mt-4">
					<div className="flex column align-center justify-between">
						<h4 className="m-0 text-white font-oxanium">61.5%</h4>
						<h5 className="mt-1 text-secondary font-oxanium">Win AVG</h5>
					</div>
					<div className="flex column align-center justify-between">
						<h4 className="m-0 text-white font-oxanium">#134</h4>
						<h5 className="mt-1 text-secondary font-oxanium">Rank</h5>
					</div>
					<div className="flex column align-center justify-between">
						<h4 className="m-0 text-green font-oxanium">+89 MP</h4>
						<h5 className="mt-1 text-secondary font-oxanium">Rewards</h5>
					</div>
				</div>

				<hr />

				<div className="flex justify-between mt-6">
					<div className={"side-card " + (mode === 0 ? "select" : "")} onClick={() => setMode(0)}>
						<img src={IconArena} alt="Arena" />
						<span className="h5">Arena</span>
					</div>
					<div className={"side-card " + (mode === 1 ? "select" : "")} onClick={() =>{viewSettings();setMode(1);} }>
						<img src={IconCreator} width={30} height={30} alt="Creator" />
						<span className="h5">Settings</span>
					</div>
				</div>
				<div className="flex justify-between mt-3">
					<div className={"side-card " + (mode === 2 ? "select" : "")} onClick={() => setMode(2)}>
						<img src={IconActivity} width={30} height={30} alt="Activity" />
						<span className="h5">Activity</span>
					</div>
					<div className={"side-card " + (mode === 3 ? "select" : "")} onClick={() => setMode(3)}>
						<img src={IconRewards} width={30} height={30} alt="Rewards" />
						<span className="h5">Rewards</span>
					</div>
				</div>

				<div>
					<span className="h5 text-secondary notify-title">Your Notifications</span>
				</div>

				<div>
					<div className="flex align-self-start">
						<img src={IconGoldstar} alt="Gold star" />
						<div className="flex column ml-2">
							<span className="h5 text-white font-oxanium">
								{/* eslint-disable-next-line react/no-unescaped-entities */}
								You're moving up the ranks!
							</span>
							<span className="h5 text-secondary font-oxanium">
								6h ago
							</span>
						</div>
					</div>
					<div className="flex align-self-start mt-3">
						<img src={IconGoldstar} alt="Fantasy" />
						<div className="flex column ml-2">
							<span className="h5 text-secondary font-oxanium">
								1st Place! You won 50 MP
							</span>
							<span className="h5 text-secondary font-oxanium">
								9h ago
							</span>
						</div>
					</div>
					<div className="flex justify-center mt-6">
						<a href="#" className="font-oxanium">
							View All
						</a>
					</div>
				</div>

				<div className="mt-6">
					<button className="disconnect_button" onClick={disconnect}>
						<img src={IconMetamask} alt="Metamask" />
						<span>Disconnect</span>
					</button>
				</div>
			</div>
	);
}
