import { Component } from 'react';
import styles from './nav.module.css'

class Navbar extends Component {

    render() {   
       
      return (
      <>
      <div className={styles.nav}>
        
      <div className={styles.title}>MOVIE APP</div>
        
        <div className={styles.cartIconContainer}>
            <img className={styles.cartIcon} 
                 alt="Cart-Icon" 
                 src = "https://cdn-icons-png.flaticon.com/128/891/891462.png"    
            />
            <span className ={styles.cartCount}>0</span>
        </div>
      </div>

      </>
      )
    }
  }  
 
  
  export default Navbar;