import { Component } from "react";

class MovieCard extends Component{
    constructor(){
        super();
        this.state={
            title:"The Avengers",
            plot:"SuperNatural powers shown in the Movie",
            price: 199,
            rating: 8.9,
            stars:0,
            fav:true
        }
    }
    addStars=()=>{
     //form 1
    //  this.setState({
    //     stars:this.state.stars+0.5
    //  });
  if(this.state.stars>=5){
    return;
  }
     //second form
     this.setState((prevState)=>{
        return{
            stars:prevState.stars+0.5
        }
     });

     this.setState((prevState)=>{
        return{
            stars:prevState.stars+0.5
        }
     });

     this.setState((prevState)=>{
        return{
            stars:prevState.stars+0.5
        }
     });
      console.log("stars:",this.state.stars);
    }
 decStars=()=>{
    if(this.state.stars<=0){
        return;
    }
    this.setState((prevState)=>{
        return{
            stars:prevState.stars-0.5
        }
    });
 }
 handleFav=()=>{
    this.setState({
        fav:!this.state.fav
    })
 }

    render(){
        console.log("component is rendered")
        const{title,plot,price,rating,stars}= this.state;
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
    
                       
                         {this.state.fav?<button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button>

                         :<button className="favourite-btn" onClick={this.handleFav}>Favourite</button>}
                        
                        
         

                        
                        
                        <div className="cart-btn">Add to Cart</div>
                    </div>
                 </div>
            </div>
         </div>   
        )
    }
}

export default MovieCard;
