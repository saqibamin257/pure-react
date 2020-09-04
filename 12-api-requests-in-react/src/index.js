import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// class Reddit extends React.Component {
//     state = {
//         posts: []
//     };
//     componentDidMount() {
//         axios
//             .get(
//                 `https://www.reddit.com/r/${
//                 this.props.subreddit
//                 }.json`
//             )
//             .then(res => {
//                 const posts = res.data.data.children.map(
//                     obj => obj.data
//                 );
//                 this.setState({ posts });
//             });
//     }
//     render() {
//         const { posts } = this.state;
//         return (
//             <div>
//                 <h1>{`/r/${this.props.subreddit}`}</h1><ul>
//                     {posts.map(post => (
//                         <li key={post.id}>{post.title}</li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }
// ReactDOM.render(
//     <Reddit subreddit="reactjs" />,
//     document.querySelector('#root')
// );

//----------------------------Exercise-1---------------------------------//
//1. Modify the Reddit example code to display an error message if the request fails. To cause an
//error, try passing in the name of a subreddit that doesn’t exist. Use the axios code example as
//a guide for how to intercept the error. Hint: you’ll need to save the error in state to be able to
//display it!

// class Reddit extends React.Component {
//     state = {
//         posts: [],
//         error:""
//     };
//     componentDidMount() {
//         axios
//             .get(
//                 `https://www.reddit.com/r/${
//                 this.props.subreddit
//                 }.json`
//             )
//             .then(res => {
//                 const posts = res.data.data.children.map(
//                     obj => obj.data
//                 );
//                 this.setState({ posts });
//             })
//             .catch(
//                 error => {                    
//                     this.setState({error});
//                     console.log("hello error: ",this.state.error);
//                     }
//             );
//     }
//     render() {
//         const { posts } = this.state;
//         const error_msg = this.state.error.isAxiosError;                
//         return (           
//             <div> 
//                 {error_msg ? `Error Occurred: ${error_msg.toString()}`:
//                 <div>
//                 <h1>{`/r/${this.props.subreddit}`}</h1><ul>
//                 {posts.map(post => (
//                     <li key={post.id}>{post.title}</li>
//                 ))}
//                 </ul>
//                 </div>
//                 }
                
//             </div>
//         );
//     }
// }
// ReactDOM.render(
//     <Reddit subreddit="reactjss" />,
//     document.querySelector('#root')
// );


//---------------------------Exercise-2---------------------------//
//Modify the Reddit example code to display a “Loading…” message while the request is in
//progress.

class Reddit extends React.Component {
    state = {
        posts: [],
        error:"",
        loading:true
    };
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
    render() {
        const { posts,loading } = this.state;                     
        return (                                       
            <div>
                <h1>{`/r/${this.props.subreddit}`}</h1>
                {loading?'loading...':
                <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
                </ul>                
                }                                
            </div>        
        );
    }
}
ReactDOM.render(
    <Reddit subreddit="reactjs" />,
    document.querySelector('#root')
);