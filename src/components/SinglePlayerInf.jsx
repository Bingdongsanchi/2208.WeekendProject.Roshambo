import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SinglePlayerInf = () => {

	const {playerId} = useParams();

    const [player, setPlayer] = useState({}); 
	const [doneLoading, setDoneLoading] = useState(false);

    const fetchingPlayer = async () => {
		const response = await fetch(`/api/players/${playerId}`);
		const json = await response.json();
		setPlayer(json);
		setDoneLoading(true); 
	};

    useEffect(() => {
		fetchingPlayer();
	}, []);

    if (!doneLoading) return <p>Wait</p>;
	else
		return (
			<div>
				<p>Username: {player.username}</p>
				<ul>Games Played: </ul>
				{player.games.map(game => (
					<li key={game.id}>
						Played Game {game.id} result is {game.result}
					</li>
				))}
			</div>
		);
};
export default SinglePlayerInf;