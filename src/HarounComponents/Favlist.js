import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from "axios";
class Favlist extends Component {
constructor(props){
super(props)
this.state = {
    Title: '',
    Year: '',
    Poster: '',
    Type: '',
    filmId:'',
    comment:'',
    Array:[]
}
}

componentDidMount = () => {
    const user  = this.props.auth0;
    const email = user.email;
    axios 
    .get(`http://localhost:3001/films?email=${email}`)
    .then(result => {
          console.log(result.data)
        this.setState({
            Array: result.data
        })
      })
      .catch(err => {
        console.log('error');
      })

  }




// showUpdateForm = (item) => {
//     this.setState({
//       show: true,
//       Title: item.Title,
//       Year: item.Year,
//       Poster: item.Poster,
//       Type: item.Type,
//       filmId:item._id,
//       comment:item.comment
//     });
//   };



// updateComment = (e,id) => {
//     e.preventDefault();
//     console.log(e.target.comment.value,id)
//     const obj = {
//       comment:e.target.comment.value,
//     };
//     axios.put(`http://localhost:3001/updateComment/${id}`,obj)
//     .then(result =>{
//       this.setState({
//         moviesBackEndArray:result.data,
//         show : false
//       })
//     })

//     .catch(err=>{
//       console.log('error in updating the data');
//     })
//   }

    render() {
        return (
            <div>



          {this.state.Array.map(item => {
              console.log(item.Title)
            return (
               <p> {item.Title}</p>  )
          })}
        


            </div>


                
            );
        }
}

export default withAuth0(Favlist);