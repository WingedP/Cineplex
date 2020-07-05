import React from 'react';
import '../App.css';
import { Carousel } from 'react-bootstrap';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';


export default function popularslide(props) {

    console.log("MOVIE LIST TO SORT BY POPULARITY", props.popularList)
    let showPopularCards = props.popularList.map(el => {
        return (
            <Card className="popularcardlist" style={{ minWidth:'10rem', marginLeft:'10px',marginRight:'10px' }}>
            <Card.Img className="popularcardimg" variant="top" src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} />
                <Card.ImgOverlay>
                    {/* <div className="popularitytext">{el.popularity}</div> */}
                </Card.ImgOverlay>
                <Card.Body  className="popularityCardBody">
                <i class="popularStar fas fa-star"></i> {el.vote_average}
                </Card.Body>
            </Card>
        )
    })

    return (
        <div className="popularContainer container">
           <div className="whatever2">POPULARITY:
                <div className="separator"><div className="separator2"></div></div>
           </div> 

<button className="popularbutton1" onClick={()=>{props.sortByMostPopularity()}}>Most Popular</button>

<button className="popularbutton2" onClick={()=>{props.sortByLeastPopularity()}}>Least Popular</button>



            <div className="whatever" >{showPopularCards}</div>
        </div>
    )
}
