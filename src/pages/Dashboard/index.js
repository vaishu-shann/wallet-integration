import LeftSidebar from "../../components/LeftSidebar";
import Tournaments from "../../components/Dashboard/Tournaments";
import Balance from "../../components/Dashboard/Balance";
import "./dashboard.scss";


export default function Dashboard() {
	return (
		<div className="dashboard-page">
			<LeftSidebar/>
			<div className="flex">
				<Tournaments/>
			
				<Balance/>
			</div>
		</div>
	);
}