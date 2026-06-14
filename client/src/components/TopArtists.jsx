import { useEffect } from "react"
import { useState } from "react"
import fetchFromApi from "../utils/fetchFromApi"

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
      <ul>
        {artists.map((artist) => {
          return <li key={artist.id}>{artist.name}</li>
        }
      )}
      </ul>
    </div>
  )
}

export default TopArtists