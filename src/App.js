import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <>
      <div className='app'>
        <Nav />
        <Banner />
        <Row isLargeRow title="Netflix Orignals" fetchURL={requests.fetchNetflixOrignals} />
        <Row title="Trending Now Movies" fetchURL={requests.fetchTrendingNow} />
        <Row title="Top Rated Movies" fetchURL={requests.fetchTopRated} />
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
        <Row title="Documentries Movies" fetchURL={requests.fetchDocumentries} />
      </div>
    </>
  );
}

export default App;
