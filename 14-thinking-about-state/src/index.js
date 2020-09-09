import React from 'react';
import ReactDOM from 'react-dom';


// Think about a section of the page that can be shown or hidden, such as a sidebar:
// When you click the “Hide” button, the sidebar should disappear, which means something needs to set
// a showSidebar flag to false. This flag should be stored in state somewhere. But where?
// Option 2, the showSidebar flag can reside in the parent of Sidebar, which is the Layout component.
// Then parent can decide whether to render the Sidebar or not:

// class Layout extends React.Component {
//     state = {
//         showSidebar: false
//     }
//     toggleSidebar = () => {
//         this.setState({
//             showSidebar: !this.state.showSidebar
//         });
//     }
//     render() {
//         const { showSidebar } = this.state;
//         return (
//             <div className="layout">
//                 {
//                     showSidebar &&
//                     <Sidebar
//                         onHide={this.toggleSidebar}>
//                         some sidebar content
//                     </Sidebar>
//                 }
//                 <Content
//                     isSidebarVisible={showSidebar}
//                     onShowSidebar={this.toggleSidebar}
//                 >
//                 </Content>
//             </div>
//         );
//     }
// }

// const Content = ({children, isSidebarVisible, onShowSidebar }) => (
//         <div className="content">
//             {children}
//             {!isSidebarVisible && (
//                 <button onClick={onShowSidebar}>
//                     Show
//                 </button>
//             )}
//         </div>
//     );

// const Sidebar = ({onHide,children}) => (
//         <div className="sidebar">
//             {children}
//             <button onClick={onHide}>
//                 Hide
//             </button>
//         </div>
// );

// ReactDOM.render(
//     <Layout/>,
//     document.getElementById('root')
// )









class Layout extends React.Component{
    state={
        showSidebar:true
    }
    
    toggleSidebar=()=>{
        this.setState({
            showSidebar:!this.state.showSidebar
        });
    }
    render(){
        const {showSidebar}=this.state;
        return(
            <div className="layout">
                {
                    showSidebar && 
                    <Sidebar onHide={this.toggleSidebar}>
                        Welcome to Sidebar
                    </Sidebar>
                }
                <Content 
                onShowSidebar={this.toggleSidebar}
                isSidebarVisible={showSidebar}
                >
                </Content>
            </div>
        );
    }
}

const Sidebar = ({onHide,children}) =>{
    return(
        <div className="sidebar">
        {children}
        <button onClick={onHide}>
            Hide
        </button>
        </div>
    );
}

const Content = ({children,onShowSidebar,isSidebarVisible}) => {
    return(
        <div>
            {children}
            {!isSidebarVisible &&
                <button
                onClick={onShowSidebar}
                >
                    Show
                </button>
            }
            
        </div>
    );
}


ReactDOM.render(
    <Layout/>,
    document.getElementById('root')
);