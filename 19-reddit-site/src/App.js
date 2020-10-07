import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import PostList from './PostList';

class App extends React.Component{
    state={
        posts: [],        
        error:"",
        loading:true
    }    

    componentDidMount() {
        axios
            .get(
                `https://www.reddit.com/r/${
                this.props.subreddit
                }.json`
            )
            .then(res => {
                const posts = res.data.data.children.map(
                    obj => obj.data
                );
                this.setState({ posts });
                this.setState({loading:false});
            })
            .catch(
                error => {                    
                    this.setState({error});
                    console.log("hello error: ",this.state.error);
                    }
            );
    }

    render(){
        const {posts,loading} = this.state;
        return(
            <div>
                <h1>{`/r/${this.props.subreddit}`}</h1>
                {loading?'loading...':
                <PostList posts={posts}/>
                }
            </div>
        );
    }
}

App.propTypes={
    subreddit:PropTypes.string.isRequired
}


export default App;