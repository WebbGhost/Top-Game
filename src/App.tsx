import GameGrid from './components/GameGrid/GameGrid';
import NavBar from './components/Navbar/Navbar';

function App() {
    return (
        <div className="h-screen grid grid-cols-12 grid-rows-6">
            <div className="col-span-12 row-[span_0.2_/_span_6] bg-gray-800 text-white flex items-center justify-between ">
                <NavBar />
            </div>

            <div className="col-span-2 row-span-6 bg-gray-900 text-white">
                sidebar
            </div>

            <div className="col-span-10 row-span-6 bg-gray-100 ">
                <GameGrid />
            </div>
        </div>
    );
}

export default App;
