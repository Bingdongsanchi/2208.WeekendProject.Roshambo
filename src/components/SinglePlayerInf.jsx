import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setSelectedPlayer } from '../store/leaderboardSlice';
import { useParams } from 'react-router-dom';

const SinglePlayerInf = () => {
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const { playerId } = useParams();
	const dispatch = useDispatch();
	const selectedPlayer = useSelector((state)=> state.leaderboard.selectedPlayer)
    const fetchSinglePlayerInf = async () => {
        try {
            setLoading(true);
            const player = await axios.get(`/api/players/${playerId}`);
            dispatch(setSelectedPlayer(player.data));
            setLoading(false);
        } catch (err) {
            setHasError(true);
        }
    }

    useEffect(() => {
        fetchSinglePlayerInf();
    }, []);

    if (hasError) return <h1>Oh no, things broke!</h1>
	if (loading) return <h1>Wait</h1>
	else
    return (
        <div>
            <h1>{selectedPlayer.username}</h1>
			{selectedPlayer.games.map((game) => {
            return (
              <p key={game.id}>
                <b>Game {game.id}'s result was: </b>
                {game.result}
              </p>
            );
          })}
        </div>
    );
};

export default SinglePlayerInf;

















// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const SinglePlayerInf = () => {

// 	const {playerId} = useParams();

//     const [player, setPlayer] = useState({}); 
// 	const [doneLoading, setDoneLoading] = useState(false);

//     const fetchingPlayer = async () => {
// 		const response = await fetch(`/api/players/${playerId}`);
// 		const json = await response.json();
// 		setPlayer(json);
// 		setDoneLoading(true); 
// 	};

//     useEffect(() => {
// 		fetchingPlayer();
// 	}, []);

//     if (!doneLoading) return <p>Wait</p>;
// 	else
// 		return (
// 			<div>
// 				<p>Username: {player.username}</p>
// 				<ul>Games Played: </ul>
// 				{player.games.map(game => (
// 					<li key={game.id}>
// 						Played Game {game.id} result is {game.result}
// 					</li>
// 				))}
// 			</div>
// 		);
// };
// export default SinglePlayerInf;