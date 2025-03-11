import { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./moviesData";
class App extends Component {
  constructor(){
        super();
        //Creating the state object 
        this.state = {
            movies :movies,
            cartCount:0
        } 
  }
  
  handleAddStars = (movie)=>{
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);
  
    if(movies[movieId].stars <5){
        movies[movieId].stars += 0.5
    }
  
    this.setState({
        movies
    });
  }
  
  handleDecStars = (movie)=>{
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);
  
    if(movies[movieId].stars > 0){
        movies[movieId].stars -= 0.5;
    }
  
    this.setState({
        movies
    })
  
  }
  
  handleToggleFav = (movie)=> {
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);
  
    movies[movieId].fav = !movies[movieId].fav;
  
    this.setState({
        movies
    })
  }
  
  handleAddtocart = (movie)=> {
    const {movies} = this.state;
    const movieId = movies.indexOf(movie);
  
    movies[movieId].isInCart = !movies[movieId].isInCart;
  
    this.setState({
        movies
    })
  }

  render(){
    const{movies}= this.state
    return (
      <>
      <Navbar/>
      <MovieList
     movies ={movies}
     onIncStars = {this.handleAddStars}
     onDecStars = {this.handleDecStars}
     onClickFav = {this.handleToggleFav}
     onClickAddtocart = {this.handleAddtocart}
       />
      </>
    );
  }
 
}

export default App;





// import Student from "./Student";
// function App() {
//   return (
//     <>
//      <Student stuname="Alexa" marks={80}/>
//      <Student stuname="Siri" marks={70}/>
//      <Student stuname="Google" marks={60}/>
//      <Student/>
//     </>
//   );
// }

// Student.defaultProps={
//   stuname:"Student",
//   marks:"N.A"
// }

// export default App;
