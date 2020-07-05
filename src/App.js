import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Pagination from "react-js-pagination";

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import MovieCard from './components/moviecard';
import Carousel from './components/carousel';
import Navbar from './components/navbar';
import Footer from './components/footer';
import PopularSlide from './components/popularslide';
import Sidebar from './components/sidebar';

import ReactModal from 'react-modal';
import Youtube from '@u-wave/react-youtube';

//search box function 
//pagination//load more
//rating slide
//sort by popularity + etc


function App() {
let apiKey=process.env.REACT_APP_APIKEY;
let [page, setPage] = useState(1);
let [totalResult,setTotalResult]= useState(0);
let [rate, setRate] = useState(0);
let originalMovieList=[];

let [movies, setMovies] = useState(null);
let [trending, setTrending] = useState(null);
let [popular, setPopular] = useState(null);

let [topRated, setTopRated] = useState(null);
let [latest, setLatest] = useState(null);
let [upcoming, setUpcoming] = useState(null);
let [genreList, setGenreList] = useState(null);

let [modal,setModal] = useState (false); 
let [trailer,setTrailer]= useState ('');


let currentlyPlaying=async(pageNumber)=>{
  let url=`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${pageNumber}`
  let response=await fetch(url);
  let data=await response.json();
  console.log("MOVIE DATA:",data)
  originalMovieList = data.results;
  setTotalResult(data.total_results)
  setMovies(data.results);
}
let currenlyTrending=async()=>{
  let url=`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
  let response=await fetch(url);
  let data=await response.json();
  console.log("TRENDING DATA:",data)
  setTrending(data.results);
}
let popularity=async()=>{
  let url=`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  let response=await fetch(url);
  let data=await response.json();
  console.log("POPULARITY DATA:",data)
  setPopular(data.results);
}

let topRatedMovies=async(pageNumber)=>{
  // let url=`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&language=en-US&page=${pageNumber}`
  let url=`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${pageNumber}`
  let response=await fetch(url);
  let data=await response.json();
  console.log("TOP-RATED DATA:",data)
  // setTopRated(data.results);
  setMovies(data.results);

}
let upcomingMovies=async(pageNumber)=>{
  let url=`  https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=${pageNumber}`
  let response=await fetch(url);
  let data=await response.json();
  console.log("UPCOMING DATA:",data)
  setMovies(data.results);
}


let popularTVshow=async(pageNumber)=>{
  // let url=`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&language=en-US&page=${pageNumber}`
  let url=`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=${pageNumber}`
  let response=await fetch(url);
  let data=await response.json();
  console.log("popularTVshow DATA:",data)
  // setTopRated(data.results);
  setMovies(data.results);

}

// let latestMovies=async()=>{
//   // let url=`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
//   let url=`https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US`
//   let response=await fetch(url);
//   let data=await response.json();
//   console.log("LATEST DATA:",data)
//   // setLatest(data.results);
//   setMovies(data);
// }


let listOfGenres=async()=>{
  let url=`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
  let response=await fetch(url);
  let data=await response.json();
  console.log("GENRE LIST:",data)
  setGenreList(data.genres);
}

//============================================

let sortByMostPopularity = () => {
  let sortedMovie = [...popular].sort((a, b) => b.popularity - a.popularity);
  setPopular(sortedMovie);};
let sortByLeastPopularity = () => {
  let sortedMovie = [...popular].sort((a, b) => a.popularity - b.popularity);
  setPopular(sortedMovie);};

let searchByKeywords=(searchTerm)=>{
console.log("SEARCH TERM HERE:",searchTerm) 
if(searchTerm===''){currentlyPlaying()}
else{let filteredMovie = movies.filter((el)=>el.title.toLowerCase().includes(searchTerm.toLowerCase()));
setMovies(filteredMovie);}}

let searchByRate=async (value)=>{
console.log("RATING VALUE HERE:",value);
setRate(value);
if(value==0){currentlyPlaying()}
else{
  let url=`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
  let response=await fetch(url);
  let data=await response.json();
  console.log("MOVIE DATA:",data)
  originalMovieList = data.results;
let filteredMovie = originalMovieList.filter((el)=>el.vote_average>=value);
setMovies(filteredMovie)}
}

let handlePageChange=pageNumber=> {
  console.log(`active page is ${pageNumber}`);
  setPage(pageNumber);
  currentlyPlaying(pageNumber)}


const customStyles = {
    content : { 
      overlay:"true",
      width: "60vw",
      height: "70vh",
      zIndex: "10",
      backgroundColor:"black",
      top                   : '50%',
      left                  : '46%',
      right                 : '50%',
      bottom                : 'auto',
      marginRight           : '-50%',
      marginLeft: "4rem",
      transform             : 'translate(-50%, -50%)'
    }
  };

let openModal= async (movieId)=>{
    let url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
    let data = await fetch(url);
    let resultsData = await data.json();
    setTrailer (resultsData.results[0].key)

  setModal(true);
}

useEffect(currentlyPlaying,[])
useEffect(currenlyTrending,[])
useEffect(popularity,[])
useEffect(listOfGenres,[])
// useEffect(topRatedMovies,[])


if(movies==null)return<div>Loading</div>;
if(trending==null)return<div>Loading</div>;
if(popular==null)return<div>Loading</div>;
if(genreList==null)return<div>Loading</div>;

return (
<div className="App">
<Navbar searchByKeywords={searchByKeywords}/>
<Sidebar topRatedMovies={topRatedMovies} upcomingMovies={upcomingMovies} popularTVshow={popularTVshow}
 genreList={genreList} 
/>
<Carousel openModal={openModal} moviesList={movies} trendingList={trending}/>
<PopularSlide popularList={popular} sortByMostPopularity={sortByMostPopularity} sortByLeastPopularity={sortByLeastPopularity}/>
<div className="raterange">
<InputRange
        maxValue={10}
        minValue={0}
        value={rate}
        onChange={value=>searchByRate(value)}
/></div>

<ReactModal 
isOpen={modal}
onRequestClose={()=>setModal(false)}
style={customStyles}
>
  <Youtube video={trailer} autoplay className="video"/>
  </ReactModal>

<MovieCard openModal={openModal} genreList={genreList} moviesList={movies}/>  
<div className="paginationrange">
<Pagination activePage={page} itemsCountPerPage={20} totalItemsCount={totalResult} pageRangeDisplayed={5}
  onChange={handlePageChange.bind(this)}
  itemClass="itempagination" linkClass="linkpagination"/>
</div>
<Footer/>
</div>)};

export default App;
