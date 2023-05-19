import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import SidePanel from './components/side-panel'
import GamesPanel from './components/games-section/games-panel'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Navbar setSearchValue={setSearchValue}></Navbar>
        <div className='main-section'>
          <SidePanel></SidePanel>
          <GamesPanel searchValue={searchValue}></GamesPanel>
        </div>
      </QueryClientProvider>
    </div>
  )
}

export default App
