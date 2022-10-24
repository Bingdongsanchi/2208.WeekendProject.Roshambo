import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LeaderBoard from '../components/LeaderBoard';
import Home from '../components/Home';
import SinglePlayerInf from '../components/SinglePlayerInf';
import Play from '../components/Play';
import CreatePlayer from '../components/CreatePlayer';


const App = () => {
    return (
      <div className='row container'>
        <div id="navbar">

          {/*--- All Buttons Are Here ---*/}

				<Link to="/">
					<button>Home</button>
				</Link>
        <Link to="/leaderboard">
					<button>LeaderBoard</button>
				</Link>
				<Link to="/play">
					<button>Play</button>
				</Link>
				<Link to="/createPlayer">
					<button>Create Player</button>
				</Link>
        </div>

          {/*--- All the Path For Buttons Above 
          Are Here By Using Routes ---*/ }

      <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route exact path="/leaderboard" element={<LeaderBoard/>}/>
            <Route path="/play" element={<Play/>}/>
            <Route path="leaderboard/:playerId" element={<SinglePlayerInf/>}/>
            <Route path="/create-player" element={<CreatePlayer/>}/>
      </Routes>
        
      </div>
    )
}

export default App;
 



/*const App = () => {

  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState({});

  const fetchingPlayers = async () => {
    const playerData = await fetch("/api/players");
    const json = await playerData.json();
    setPlayers(json)
  }

  const selectPlayerFunc = async (playerId) => {
    const fetchingPlayers = await fetch(`/api/palyers/${playerId}`);
    const json = await fetchingPlayers.json();
    setSelectedPlayer(json);
  }

  useEffect (() => {
    fetchingPlayers();
  }, [])


  return (
    <div className='row container'>
      {/* The game starts here! */
     /* <div className='mainPage'>
        <h1 className='main_header'>Welcome to Game!</h1>
             {/* <!-- LeaderBoard and Play--> */
//          <div className='learderboardbutton'>
//             <Link to='/leaderborad'>
//                 <button className='leaderboard'>LeaderBoard</button>
//             </Link>
//                 <button className='play'>Play</button>
//          </div>
//       </div>
//         <div className="container">
//             {selectedAlbum.id ? (
//               <SinglePlayer selectedPlayer={selectedPlayer} />
//             ) : (
//               <LeaderBoard players={players} selectPlayerFunc={selectPlayerFunc} />
//             )}
//           </div>
//           <Routes>
//         <Route
//           path="/leaderboard/*"
//           element={
//             <LeaderBoard
//               fetchingPlayers={fetchingPlayers}
//               players={players}
//               selectingPlayer={selectPlayerFunc}
//               selectedPlayer={selectedPlayer}
//             />
//           }
//         />
//       </Routes>


//     </div>
//   );

//   } 

// export default App;