import { BrowserRouter, Routes, Route , Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DiretorContainer from "./pages/DirectorContainer";
import DirectorCard from "./pages/DirectorCard";
import DirectorList from "./pages/DirectorList";
import DirectorForm from "./pages/DirectorForm";
import MovieCard from "./pages/MovieCard";
import MovieForm from "./pages/MovieForm";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <nav>
                    <Link to='/'>Home</Link> |{" "}
                    <Link to='/about'>About</Link> |{" "}
                    <Link to='/directors'>Directors</Link>
                </nav>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/directors' element={<DiretorContainer/>}>
                        <Route index element={<DirectorList/>}/>
                        <Route path=':id' element={<DirectorCard/>}>
                            <Route path='movies/:movieId' element={<MovieCard/>}/>
                            <Route path='movies/new' element={<MovieForm/>}/>
                        </Route>
                        <Route path='new' element={<DirectorForm/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
