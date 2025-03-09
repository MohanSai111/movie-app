import { Component } from "react";

class MovieCard extends Component{
    render(){
        return(
         <div className="main">
            <div className="movie-card">
                
                 <div className="left">
                    <img alt="Poster"
                    src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'/>
                 </div>

                 <div className="right">
                    <div className="title">The Avengers</div>
                    <div className="plot">SuperNatural powers shown in the Movie</div>
                    <div className="price">RS. 199</div>

                    <div className="footer">
                        <div className="rating">8.9</div>
                        <div className="star-dis">star</div>
                        <div className="favourite-btn">Favourite</div>
                        <div className="cart-btn">Add to Cart</div>
                    </div>
                 </div>
            </div>
         </div>   
        )
    }
}

export default MovieCard;