import Logo from "./components/Logo"
import TopArtists from "./components/TopArtists"
import TopTracks from "./components/TopTracks"


function App() {


  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-100 ">
        <header className="flex items-center gap-3 bg-slate-900 border-b border-slate-700 px-8 py-4">
          <Logo />
          <h1 className="text-2xl font-bold ">
            My <span className="text-amber-600"> Music</span>
          </h1>
        </header>
        <TopArtists />
        <TopTracks />
      </div>
    </>
  )
}

export default App
