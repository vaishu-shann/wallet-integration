import Moment from "react-moment";
import {useNavigate} from "react-router-dom";
// import StorageManager from "../../../utils/StorageManager";
import IconShare from "./../../../assets/img/icons/icon_share.png";
import "./tournaments.scss";

export default function TournamentCard({ }) {
	const navigate = useNavigate();

	return (
		<div className="tournament-card">
			<div className="flex column align-center justify-between">
				<span className="h5 text-white">
					21mins
					{/* <Moment diff={new Date().toLocaleString()} unit="minutes">
						{ item ? item.game_scheduled_time : "2022-02-02" }
					</Moment> mins */}
				</span>
				<span className="h5 text-secondary">
					Starts in
				</span>
			</div>
			<div className="flex column align-self-start justify-between ml-4" style={{"width":"155px"}}>
				<span className="h5 text-white">
					{/* {item ? item.name : "--"} */} Game 1
				</span>
				<span className="h5 text-secondary">
					By <span className="text-primary">@user1</span> 
					{/* {item ? item.user_id : ""} */}
				</span>
			</div>
			<div className="flex column align-center justify-between ml-4">
				<span className="h5 text-white"> 11/20
					{/* {item ? item.total_users_joined : 0}/{item ? item.user_count : 0} */}
				</span>
				<span className="h5 text-secondary">
					Players
				</span>
			</div>
			<div className="flex column align-center justify-between ml-4">
				<span className="h5 text-white"> 35MP
					{/* {item ? item.entry_fee : 0} MP */}
				</span>
				<span className="h5 text-secondary">
					Entry Fee
				</span>
			</div>
			<div className="flex column align-center justify-between ml-4">
				<span className="h5 text-green"> +4MP
					{/* +{item ? item.prize_pool : 0} MP */}
				</span>
				<span className="h5 text-secondary">
					Winnings
				</span>
			</div>
			<div className="flex align-center button-container">
			
						<button className="button join" >
							<span>Join</span>
						</button>
						
			</div>
		</div>
	);
}
