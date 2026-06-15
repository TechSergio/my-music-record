
const ArtistCard = ({name, images, genres, popularity}) => {

  return (
    <div>
        <h1>Artista {name}</h1>
        <img src={images?.[0]?.url} />
        <p>{genres?.[0] ? genres[0] : 'no data'}</p>
        <p>{popularity}</p>
    </div>
  )
}

export default ArtistCard