import TopArtists from "./components/TopArtists"


function App() {


  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-100 ">
        <h1 className="text-3xl font-bold text-amber-600"> My music</h1>
        <TopArtists />
      </div>
    </>
  )
}

export default App
