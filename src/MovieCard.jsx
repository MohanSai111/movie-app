import { Component } from "react";

class MovieCard extends Component{
   
    
    render(){
        console.log(this.props)
        const{title,plot,price,rating,stars,fav,isIncart}= this.props.movies;
        return(
         <div className="main">
            <div className="movie-card">
                
                 <div className="left">
                    <img alt="Poster"
                    src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'/>
                 </div>

                 <div className="right">
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">{price}</div>

                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">
                    <img  className="str-btn" 
                    alt="decrease" 
                    src="https://cdn-icons-png.flaticon.com/128/565/565332.png"
                    onClick={this.decStars}/>

                     <img alt="star"
                     src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                     className="stars"/>

                     <img  className="str-btn"
                      alt="increase"
                     src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                     onClick={this.addStars}
                     />
                     <span>{stars}</span>
                        </div>
    
                       
                         {this.props.fav?<button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button>
                         :<button className="favourite-btn" onClick={this.handleFav}>Favourite</button>}
                
                        {this.props.isIncart?<button className="unfavourite-btn" onClick={this.handleAddToCart}>Remove from Cart</button>
                        :<button className="cart-btn" onClick={this.handleAddToCart}>Add to Cart</button>

                        }
                
                    </div>
                 </div>
            </div>
         </div>   
        )
    }
}

export default MovieCard;
