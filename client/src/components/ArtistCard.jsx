
const ArtistCard = ({name, images, rank}) => {

  return (
    <div className="rounded-2xl overflow-hidden relative aspect-square">
        <img className='absolute inset-0 object-cover w-full h-full' src={images?.[0]?.url} />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 h-3/5 flex items-end gap-2">
            <span className="text-white rounded-lg px-1.5 text-4xl ">{rank}</span>
            <h2 className="text-white font-semibold truncate pb-2"> {name}</h2>
        </div>


        {/* Se encuentra deprecado
        <p>{genres?.[0] ? genres[0] : 'no data'}</p> 
        <p>{popularity}</p>*/}
        
    </div>
  )
}

export default ArtistCard