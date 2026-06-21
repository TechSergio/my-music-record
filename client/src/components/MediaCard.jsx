
const MediaCard = ({name, image, rank, subtitle}) => {

  return (
    <div className="rounded-2xl overflow-hidden relative aspect-square">
        <img className='absolute inset-0 object-cover w-full h-full' src={image} />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 h-3/5 flex items-end gap-2">
            <span className="text-white rounded-lg px-1.5 text-4xl ">{rank}</span>
            <h2 className="text-white font-semibold truncate pb-2"> {name}</h2>
            {subtitle && <p className="text-xs text-slate-400 truncate">{subtitle}</p>}
        </div>
        
    </div>
  )
}

export default MediaCard