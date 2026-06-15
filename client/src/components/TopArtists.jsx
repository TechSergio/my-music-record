import { useEffect } from "react"
import { useState } from "react"
import fetchFromApi from "../utils/fetchFromApi"
import ArtistCard from "./ArtistCard"

const TopArtists = () => {
    const [artists, setArtists] = useState([])

    useEffect( () => {
              //funcion async para pedir datos al backend
          const loadArtists = async ()=> {
          const data = await fetchFromApi('/api/top-artists')
          setArtists(data.items)
        }
        
        loadArtists()
        
    }, [])


  return (
    <div>
      <h1>TopArtists</h1>
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