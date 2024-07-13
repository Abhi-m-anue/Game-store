import { useRef, useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import SidePanel from './components/side-panel'
import GamesPanel from './components/games-section/games-panel'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FaBars, FaTimes} from "react-icons/fa"

// GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
// GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7



function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  const [searchValue, setSearchValue] = useState("");
  const [genre,setGenre]=useState(0);
  const [showSidePanel,setShowSidePanel] = useState(false);
    return (
    <div className="App">
      <QueryClientProvider client={client}>
        <div className='main-wrapper'>
          { showSidePanel && <button className = 'nav-btn nav-close-btn' onClick={()=>setShowSidePanel(!showSidePanel)}>
          <FaTimes></FaTimes>
        </button>}
        { !showSidePanel && <button className='nav-btn' onClick={()=>{
          console.log(showSidePanel);
          setShowSidePanel(!showSidePanel)}}>
        <FaBars></FaBars>
        </button>}
        <SidePanel setGenre={setGenre} showSidePanel = {showSidePanel}></SidePanel>
        <div className='body-section'>
          <Navbar setGenre={setGenre} setSearchValue={setSearchValue}></Navbar>
          <GamesPanel genre={genre}searchValue={searchValue}></GamesPanel>
        </div>
        </div> 
      </QueryClientProvider>
    </div>
  )
}

export default App
