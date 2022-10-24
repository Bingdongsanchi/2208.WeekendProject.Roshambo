import axios from 'axios';
import React, { useState } from 'react';

const CreatePlayer = () => {

    const [playerName, setPlayerNmae] = useState("")

    const playerNameHandler = (e) =>{
        setPlayerNmae(e.target.value)
    }

    const enterPlayerName = async (e) =>{
        e.preventDefault();

        const body = { playerName: playerName}

        const res = await axios.post("/api/players", body)
        console.log(res);
    }

    return (
        <div>
            <h1>Enter Your Name</h1>
            <form onSubmit={enterPlayerName}>
            <label>
					Username:{' '}
					<input type="text" value={playerName} onChange={playerNameHandler} />
			</label>
            <button type="submit">
            Submit
            </button>
            </form>
        </div>
    )
};

export default CreatePlayer;
