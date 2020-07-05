import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Moment from 'react-moment';

export default function carousel(props) {
  // let imgcarousel = props.moviesList;
  let trendingcarousel = props.trendingList;
  return (
    <div className="carousel-banner-wrapper">
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner">

          <div class="carouselwrap carousel-item active">
            <div className="overviewbanner carousel-caption d-none d-md-block">
              <h1>Trending:</h1>{trendingcarousel[0].overview}
            </div>

            <div className="overviewbanner2 carousel-caption d-none d-md-block">          
            <a className="trailerButtonCarousel" 
            // onClick={()=>{props.openModal(trendingcarousel[0].id)}} 
            >
            <i class="far fa-play-circle"></i></a>
            </div>

            <img src={`https://image.tmdb.org/t/p/original/${trendingcarousel[0].backdrop_path}`}
              className="imagetesting d-block w-100" alt="..." />

            <div class="carousel-caption d-none d-md-block">
              <h1>
                <CircularProgressbar
                  value={trendingcarousel[0].vote_average}
                  maxValue={10}
                  strokeWidth={15}
                  text={`${trendingcarousel[0].vote_average}`}
                  className="titleProgress"
                  styles={buildStyles({
                    pathColor: `turquoise`,
                    textColor: 'white',
                    trailColor: 'gold',
                   
                  })}
                />
                {trendingcarousel[0].title}
                 </h1>
              <div className="releaseDate"><span className="releaseDatezzz">Coming to Netflix on </span>
              <Moment format="D MMM YYYY" withTitle >
              {trendingcarousel[0].release_date}</Moment>
              </div>
            </div>

          </div>
          
          <div class="carouselwrap carousel-item">
            <div className="overviewbanner carousel-caption d-none d-md-block">
              <h1>Trending:</h1>
              {trendingcarousel[1].overview}</div>
              <div className="overviewbanner2 carousel-caption d-none d-md-block">          
            <a className="trailerButtonCarousel" onClick={()=>{props.openModal(trendingcarousel[1].id)}}  >
              <i class="far fa-play-circle"></i></a>
            </div>
            <img src={`https://image.tmdb.org/t/p/original/${trendingcarousel[1].backdrop_path}`} class="imagetesting d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>
              <CircularProgressbar
                  value={trendingcarousel[1].vote_average}
                  maxValue={10}
                  strokeWidth={15}
                  text={`${trendingcarousel[1].vote_average}`}
                  className="titleProgress"
                  styles={buildStyles({
                    pathColor: `turquoise`,
                    textColor: 'white',
                    trailColor: 'gold',
                  })}
                />
                
                {trendingcarousel[1].title}</h1>
                <div className="releaseDate">
              <span className="releaseDatezzz">Coming to Netflix on </span>
              <Moment format="D MMM YYYY" withTitle>{trendingcarousel[1].release_date}</Moment>
              </div>            </div>
          </div>

          <div class="carouselwrap carousel-item">
            <div className="overviewbanner carousel-caption d-none d-md-block">
              <h1>Trending:</h1>
              {trendingcarousel[2].overview}</div>
              <div className="overviewbanner2 carousel-caption d-none d-md-block">          
            <a className="trailerButtonCarousel" onClick={()=>{props.openModal(trendingcarousel[2].id)}}  ><i class="far fa-play-circle"></i></a>
            </div>
            <img src={`https://image.tmdb.org/t/p/original/${trendingcarousel[2].backdrop_path}`} class="imagetesting d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>
              <CircularProgressbar
                  value={trendingcarousel[2].vote_average}
                  maxValue={10}
                  strokeWidth={15}
                  text={`${trendingcarousel[2].vote_average}`}
                  className="titleProgress"
                  styles={buildStyles({
                    pathColor: `turquoise`,
                    textColor: 'white',
                    trailColor: 'gold',
                  })}
                />
                
                {trendingcarousel[2].title}</h1>
                <div className="releaseDate">
              <span className="releaseDatezzz">Coming to Netflix on </span>
              <Moment format="D MMM YYYY" withTitle>{trendingcarousel[2].release_date}</Moment>
              </div>            </div>
          </div>

        </div>




        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}










// import React from 'react'
// import { Carousel } from 'react-bootstrap';

// export default function carousel(props) {
// let imgcarousel=props.moviesList;
// console.log("IMG CAROUSEL", imgcarousel)

//     return (          
// <Carousel>
//   <Carousel.Item className="carouseltemp">
//     <img
//       className="imgimg d-block "
//       src={`https://image.tmdb.org/t/p/original/${imgcarousel[0].backdrop_path}`}   
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item className="carouseltemp">
//     <img
//       className="imgimg d-block "
//       src={`https://image.tmdb.org/t/p/original/${imgcarousel[1].backdrop_path}`}   
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item className="carouseltemp">
//     <img
//       className="imgimg d-block "
//       src={`https://image.tmdb.org/t/p/original/${imgcarousel[2].backdrop_path}`}   
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>

//     )
// }











//===============================================================================================================

// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Render() {
//     let [movieInfo, setmovieInfo] = useState(null);

//     let fetchMovieInfo = async () => {
//         const api = "5c4d91615c827590b1f7965784c32a2c";
//         let url = `https://api.themoviedb.org/3/trending/all/day?api_key=${api}`;
//         let data = await fetch(url);
//         let result = await data.json();

//         console.log(result);
//         setmovieInfo(result);
//     }
//     useEffect(fetchMovieInfo, []);

//     if (!movieInfo) {
//         return <div>Loading</div>
//     };

//     return (
//         <div className="row">
//               <div
//                 id="carouselExampleCaptions"
//                 className="carousel slide m-1"
//                 data-ride="carousel"
//               >
//                 <ol className="carousel-indicators">
//                   <li
//                     data-target="#carouselExampleCaptions"
//                     data-slide-to={0}
//                     className="active"
//                   />
//                   <li data-target="#carouselExampleCaptions" data-slide-to={1} />
//                   <li data-target="#carouselExampleCaptions" data-slide-to={2} />
//                   <li data-target="#carouselExampleCaptions" data-slide-to={3} />
//                   <li data-target="#carouselExampleCaptions" data-slide-to={4} />
//                 </ol>
//                 <div className="carousel-inner">
//                   <div className="carousel-item active">
//                   <a href={`https://www.themoviedb.org/movie/${movieInfo.results[0].id}?language=en-US`}>
//                     <img
//                       src={`https://image.tmdb.org/t/p/original/${movieInfo.results[0].backdrop_path}`}
//                       className="d-block w-100"
//                       alt="..."/></a>
//                     <div className="carousel-caption d-none d-md-block" style={{ backgroundImage: "linear-gradient(-90deg, #00000000, #00000090, #00000090, #00000000 )" }}>
//                       <h1>{movieInfo.results[0].title}</h1>
//                       <p>{movieInfo.results[0].overview}</p>
//                     </div>
//                   </div>
//                   <div className="carousel-item">
//                   <a href={`https://www.themoviedb.org/movie/${movieInfo.results[1].id}?language=en-US`}>
//                     <img
//                       src={`https://image.tmdb.org/t/p/original/${movieInfo.results[1].backdrop_path}`}
//                       className="d-block w-100"
//                       alt="..."
//                     /></a>
//                     <div className="carousel-caption d-none d-md-block" style={{ backgroundImage: "linear-gradient(-90deg, #00000000, #00000090, #00000090, #00000000 )" }}>
//                     <h1>{movieInfo.results[1].title}</h1>
//                       <p>{movieInfo.results[1].overview}</p>
//                     </div>
//                   </div>
//                   <div className="carousel-item">
//                   <a href={`https://www.themoviedb.org/movie/${movieInfo.results[2].id}?language=en-US`}>
//                     <img
//                       src={`https://image.tmdb.org/t/p/original/${movieInfo.results[2].backdrop_path}`}
//                       className="d-block w-100"
//                       alt="..."
//                       /></a>
//                       <div className="carousel-caption d-none d-md-block" style={{ backgroundImage: "linear-gradient(-90deg, #00000000, #00000090, #00000090, #00000000 )" }}>
//                     <h1>{movieInfo.results[2].title}</h1>
//                       <p>{movieInfo.results[2].overview}</p>
//                     </div>
//                   </div>
//                   <div className="carousel-item">
//                   <a href={`https://www.themoviedb.org/movie/${movieInfo.results[3].id}?language=en-US`}>
//                     <img
//                       src={`https://image.tmdb.org/t/p/original/${movieInfo.results[3].backdrop_path}`}
//                       className="d-block w-100"
//                       alt="..."
//                       /></a>
//                     <div className="carousel-caption d-none d-md-block" style={{ backgroundImage: "linear-gradient(-90deg, #00000000, #00000090, #00000090, #00000000 )" }}>
//                     <h1>{movieInfo.results[3].title}</h1>
//                       <p>{movieInfo.results[3].overview}</p>
//                     </div>
//                   </div>
//                   <div className="carousel-item">
//                   <a href={`https://www.themoviedb.org/movie/${movieInfo.results[4].id}?language=en-US`}>
//                     <img
//                       src={`https://image.tmdb.org/t/p/original/${movieInfo.results[4].backdrop_path}`}
//                       className="d-block w-100"
//                       alt="..."
//                       /></a>
//                     <div className="carousel-caption d-none d-md-block" style={{ backgroundImage: "linear-gradient(-90deg, #00000000, #00000090, #00000090, #00000000 )" }}>
//                     <h1>{movieInfo.results[4].title}</h1>
//                       <p>{movieInfo.results[4].overview}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <a
//                   className="carousel-control-prev"
//                   href="#carouselExampleCaptions"
//                   role="button"
//                   data-slide="prev"
//                 >
//                   <span className="carousel-control-prev-icon" aria-hidden="true" />
//                   <span className="sr-only">Previous</span>
//                 </a>
//                 <a
//                   className="carousel-control-next"
//                   href="#carouselExampleCaptions"
//                   role="button"
//                   data-slide="next"
//                 >
//                   <span className="carousel-control-next-icon" aria-hidden="true" />
//                   <span className="sr-only">Next</span>
//                 </a>
//               </div>
//             </div>
//     );
// }

// export default Render;