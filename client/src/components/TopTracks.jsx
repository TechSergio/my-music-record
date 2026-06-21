import { useEffect } from "react";
import { useState } from "react";
import fetchFromApi from "../utils/fetchFromApi";
import MediaCard from "./MediaCard";

const TopTracks = () => {
  const [tracks, setTracks] = useState([]);
  const [range, setRange] = useState("medium_term");
  useEffect(() => {
    //funcion async para pedir datos al backend
    const url = "/api/top-tracks?time_range=" + range + "&t=" + Date.now();
    const loadTracks = async () => {
      const data = await fetchFromApi(url);
      setTracks(data.items);
    };

    loadTracks();
  }, [range]);
  console.log(tracks);
  const handleChangeSelect = (e) => {
    setRange(e.target.value);
  };

  return (
    <div className="px-8 py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="w-1 h-6 bg-amber-400 rounded-full"></span>
          <h2 className="text-xl font-bold text-slate-100">Top Tracks</h2>
        </div>
        <select
          onChange={handleChangeSelect}
          value={range}
          className="bg-slate-800 border border-slate-600 text-slate-100 text-sm rounded-lg px-3 py-2 outline-none cursor-pointer"
        >
          <option value="medium_term">Últimos 6 meses</option>
          <option value="short_term">Últimas 4 semanas</option>
          <option value="long_term">De siempre</option>
        </select>
      </div>
      <ul className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tracks.map((track, index) => (
          <MediaCard 
          key={track.id} 
          name= {track.name}
          image={track.album.images?.[0]?.url}
          rank={index + 1} />
        ))}
      </ul>
    </div>
  );
};

export default TopTracks;
