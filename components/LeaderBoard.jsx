import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import SinglePlayerInf from './SinglePlayerInf';

const LeaderBoard = () => {

    const [players, setPlayers] = useState([]);

    const fetchingPlayers = async () => {
    const playerData = await fetch("/api/players");
    const json = await playerData.json();
    setPlayers(json);
    };

    useEffect (() => {
        fetchingPlayers();
      }, []);

      return (
		<div className="leaderboard-box">
			<h1> Leaderboard </h1>
			<ul>
				Players:
				{players.map(player => (
					<Link to={`/leaderboard/${player.id}`} key={player.id}>
						<li>{player.username}</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default LeaderBoard;
