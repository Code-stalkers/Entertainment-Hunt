import React from 'react';
import  {Button} from 'react-bootstrap'
  class Comment extends React.Component {
    render () {
      return(


        <div className="comment">
          <p className="comment-header">{this.props.author}</p>
          <p className="comment-body">- {this.props.body}</p>
          <div className="comment-footer">
          <Button variant="primary"onClick={this._deleteComment}>Delete Comment</Button>
           
          </div>
        </div>


      );
    }
    _deleteComment() {
      this.props.body=0;
    }
  }
  export default Comment;
  
  