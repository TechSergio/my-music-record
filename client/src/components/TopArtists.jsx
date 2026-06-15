import { useEffect } from "react"
import { useState } from "react"
import fetchFromApi from "../utils/fetchFromApi"
import ArtistCard from "./ArtistCard"

const TopArtists = () => {
    const [artists, setArtists] = useState([])
    const [range, setRange] = useState('medium_term')
    useEffect( () => {
              //funcion async para pedir datos al backend
          const url = '/api/top-artists?time_range=' + range + '&t=' + Date.now()
          const loadArtists = async ()=> {
          const data = await fetchFromApi(url)
          setArtists(data.items)
        }
        
        loadArtists()
        
    }, [range])
console.log(artists)
    const handleChangeSelect = (e) => {
      setRange(e.target.value)
    }


  return (
    <div>
      <h1>TopArtists</h1>
      <select id='rango' onChange={handleChangeSelect}>
        <option value='medium_term'>Rango medio</option>
        <option value='short_term'>Rango corto</option>
        <option value='long_term'>Rango largo</option>
      </select>
      <ul className="grid  md:grid-cols-3 lg:grid-cols-4 gap-2">
        {artists.map((artist, index) => {
          return <ArtistCard key={artist.id} {...artist} rank={index + 1}/>
        }
      )}
      </ul>
    </div>
  )
}

export default TopArtists