import React, { Component } from 'react';
class Profile2 extends Component {
    showUpdateForm = (item) => {
        this.setState({
            show: true,
            comment: '',
            filmId: item._id,
        });
       
    };

    render() {
        return (
            <div>
                 <form><input type='text' name='comment'></input> 
        <button type='submit' onClick={this.props.showUpdateForm} variant="primary">Edit 📑</button>
       </form>
                    <button  onClick={() => this.showUpdateForm(this.props.item)} variant="primary">Edit 📑</button>
            </div>
        );
    }
}

export default Profile2;