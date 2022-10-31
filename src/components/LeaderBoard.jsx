import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLeadboard } from '../store/leaderboardSlice';


const LeaderBoard = () => {

    const [loading, setLoading] = useState();
    const players = useSelector(
        (state) => state.leaderboard.playerLeaderboard
    );
    const dispatch = useDispatch();
    const fetchingPlayers = async () => {
        const players = await axios.get("/api/players")
        console.log(players.data)
        dispatch(setLeadboard(players.data))
        setLoading(false)
    }

    useEffect (() => {
        fetchingPlayers();
      }, []);
	  if(loading) return "Wait"
	  else
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
