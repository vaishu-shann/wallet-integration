import {useEffect, useState} from "react";
import Carousel from "react-multi-carousel";
import TournamentCard from "./card";
// import APIManager from "../../../utils/APIManager";
// import {carouselResponsive} from "../../../utils/constants";
import "react-multi-carousel/lib/styles.css";
import "./tournaments.scss";

 const carouselResponsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 1
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

export default function Tournaments() {
	const [filter, setFilter] = useState(2);
	const [tournaments, setTournaments] = useState([]);


	const titleRender = () => {
		if (filter === 1) {
			return <span>Tournaments You’ve Joined</span>;
		} else if (filter === 2) {
			return <span>Upcoming Tournaments</span>;
		} else if (filter === 3) {
			return <span>Ended Tournaments</span>;
		}
	};

	return (
		<div className="tournaments-container">
			<div className="tournaments">
				<div className="title">
					Tournaments
				</div>

				<div className="header">
					Join a game pool to start competing
				</div>

				<div className="horizontal-line" />

				<div className="flex align-center chip-container">
					<span className={"chip " + (filter === 1 ? "selected" : "")} onClick={() => setFilter(1)}>
						<span>Joined</span>
					</span>
					<span className={"chip ml-2 " + (filter === 2 ? "selected" : "")} onClick={() => setFilter(2)}>
						<span>Upcoming</span>
					</span>
					<span className={"chip ml-2 " + (filter === 3 ? "selected" : "")} onClick={() => setFilter(3)}>
						<span>Ended</span>
					</span>
				</div>

				<div className="horizontal-line" />

				<div className="joined-title">
					{titleRender()}
				</div>
				<div className="tournament-card-container">
					
							<TournamentCard />
							<TournamentCard />
							<TournamentCard />
							<TournamentCard />
							
			
				</div>
			</div>

			<div className="carousel-container">
				<Carousel responsive={carouselResponsive} showDots={true} autoPlay={false} swipeable={true} centerMode={true} arrows={false} style={{width:"737px"}}>
					<div className="carousel1">
						<div className="coming-soon"> coming soon....</div>
						<div className="nft-collnz"> NFT Collections</div>
						<div className="bonnus-points"> Use your NFTs for bonus points. </div>
					</div>
				</Carousel>
	
			
			</div>
		</div>
	);
}
