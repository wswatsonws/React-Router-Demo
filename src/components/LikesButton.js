import React from 'react'

class LikesButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            likes: false
        }
        this.increaaLikes = this.increaaLikes.bind(this)
    }
    increaaLikes(){
      this.setState({
          likes: !this.state.likes
      })
    }
    render(){
        return(
            <div className="like-button-component"> 
                <button
                    type="button"
                    className="btn btn-outline-primary btn-lg"
                    onClick={this.increaaLikes}
                >
                    <p >{this.state.likes?"Unlike":"Like"}</p>
                </button>
            </div>
            )
    }
}

export default LikesButton