import "./rankings.scss";
import RankCard from "./card";

export default function Rankings() {
	return (
		<div className="global-rankings">
			<div className="header-title">
                Global Rankings
			</div>
			<div className="header mt-2">
				Your rank: #91
			</div>
			<div className="card-container">
				<RankCard/>
			
			</div>
		</div>
	);
}