// import { Component } from "react";
// class Student extends Component{
//  render(){
//     const{stuname,marks}= this.props
//     return(
//         <>
//         <h1>Hello,{stuname}</h1>
//         <p>You have secured {marks}%</p>
//         <hr/>
//         </>
//     )
//  }
// } 

function Student(props){
    const{stuname,marks}= props
    return(
        <>
        <h1>Hello,{stuname}</h1>
         <p>You have secured {marks}%</p>
         <hr/>
       </>
    )
}

export default Student;