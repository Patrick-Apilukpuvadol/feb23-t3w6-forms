import { Routes, Route, Outlet} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import PokemonFetcherPage from './pages/PokemonFetcherPage';

// React router parts:
// - BrowserRouter needs to exist higher up in the component tree then whatever we are writing Routes in
// Routes need to exist, determines what content is rendered on the which route eg. /about for <Bout />
// Route speifies URL and component, belongs to Routes

function App() {
  return (
    <div className="App">

    <h1>This H1 shows on everypage</h1>
    <Navbar />

      <Routes>
      <Route path="/" element={<HomePage />} />

{/* route for /about opening  */}
{/* <Route path="/about" element={<AboutPage />}> */}

  {/* route for /about/contact */}
  {/* <Route path="/about/contact" element={<ContactPage />} /> */}

{/* route for /about closing  */}
{/* </Route> */}

 {/* route for /about opening  */}
 {/* <Route path="/about" element={<AboutPage />}> */}

  {/* route for /about/contact */}
  {/* <Route path="/about/contact" element={<ContactPage />} /> */}

  {/* route for /about closing  */}
  {/* </Route> */}

        <Route path="/about" element={<Outlet />}>
          <Route index element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>


        <Route path="/pokemon" element={<PokemonFetcherPage />} />
        <Route path="/pokemon/:pokemonId" element={<PokemonFetcherPage />} />


      </Routes>



    </div>
  );
}

export default App;
