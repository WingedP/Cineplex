import React from 'react';
import '../App.css';
import { Card, ListGroup, ListGroupItem, Badge} from 'react-bootstrap';
import Modal from 'react-modal';


export default function moviecard(props) {
    // console.log("moviewefwefwefwefww list", props.moviesList)
    // console.log("GENRE list",props.genreList)
    // let filteredGenres =props.genreList.filter(genre=>props.moviesList.genre_ids.includes(genre.id));
    // const names = filteredGenres.map(({ name }) => name);

    let movieItem=props.moviesList;   
    let genresItem=props.genreList;   

    let showAllMovieCards = props.moviesList.map(el => {

    let genresArray=[];
    if(props.moviesList.length>0) {
    for(let i=0; i < el.genre_ids.length;i++){
let genreId=props.genreList.find(genre => genre.id === el.genre_ids[i]);
genresArray.push(genreId)
}
}   
console.log(genresArray,"here's GENRES ARRAY")

        return (
            <div className="cardwrapperhere">      
            <div className="ratingdisplay"  >{el.vote_average}</div>

            <Card className="cardhere" style={{ width: '13rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} />
            <Card.ImgOverlay className="cardoverlay">  
                 {/* <div className="roundwrapper">{el.vote_average}</div> */}
                <Card.Body className="belrevwefewf">
                    <Card.Title>{el.title}</Card.Title>  
                                    
                    <Card.Link className="trailerbutton" onClick={()=>{props.openModal(el.id)}} ><i class=" trailerBtnIcon far fa-play-circle"></i></Card.Link>
                    <Card.Text className="">{el.release_date}</Card.Text>
            {genresArray.map((el) => 
            <Badge key={el.id} pill variant="danger" style={{fontSize:11, marginRight:"2px"}} className="">
            {el.name}</Badge>)}         
                    
                    
                    <Card.Text className="cardoverview">{el.overview}</Card.Text> 




                    </Card.Body>


                </Card.ImgOverlay>      
            </Card></div>
           )
    })
    return (
    <div className="moviecardContainer fluid-container">
        <div className="whatever2">NOW PLAYING:
        <div className="separator"><div className="separator2"></div></div>
        </div> 
        <div className="movCard row">{showAllMovieCards}</div>
        </div>
        
    )
}
