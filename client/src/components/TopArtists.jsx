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
          console.log(data)
          setArtists(data.items)
        }

        loadArtists()
        
    }, [])
          console.log(artists)

  return (
    <div>
      <h1>TopArtists</h1>
      <ul className="grid  md:grid-cols-3 lg:grid-cols-4 gap-2">
        {artists.map((artist) => {
          return <ArtistCard key={artist.id} {...artist} />
        }
      )}
      </ul>
    </div>
  )
}

export default TopArtists