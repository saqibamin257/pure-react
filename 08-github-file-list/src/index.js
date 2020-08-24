import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import Time from './Time'


//Step-1 create FileList component

// const FileList = ({ files }) => (
//     <table className="file-list">
//         <tbody>
//             {
//                 files.map((file) => (
//                     <tr className="file-list-item" key={file.id}>
//                         <td className="file-name">{file.name}</td>
//                     </tr>
//                 ))
//             }
//         </tbody>
//     </table>
// );

//Step-2 create standalone component FileListItem
//Notice that we still need to pass the key prop. The key needs to be decided at the time of the “map”
//and passed in right there. You can’t push that detail into the FileListItem component.

//File List component
const FileList = ({ files }) => (
    <table className="file-list">
        <tbody>
            {
                files.map((file) => (
                    <FileListItem key={file.id} file={file}/>
                ))
            }
        </tbody>
    </table>
);

FileList.propTypes = {
    files: PropTypes.array
};

// const FileListItem = ({file}) =>(
//     <tr className="file-list-item">   
//        <td className="file-name">                 
//            {file.name}
//        </td>       
//     </tr>
// );
const FileListItem = ({file}) =>(
    <tr className="file-list-item">   
       <FileName file={file}/>
       <CommitMessage commit={file.latestCommit}/>
       <td className="age">
       <Time time={file.updated_at}/>       
       </td>
    </tr>
);

FileListItem.propTypes={
    file:PropTypes.object.isRequired
}

function FileIcon({file}){
    let icon='fa-file-text-o';
    if(file.type==='folder')
    icon = 'fa-folder';
    return(
        <td className="file-icon">
            <i className={`fa ${icon}`}/>
        </td>
    );
}

FileIcon.propTypes={
    file:PropTypes.object.isRequired
}
// FileName Component
function FileName({file}){
    return(
        <>
        <FileIcon file={file}/>
        <td className="file-name">{file.name}</td>
        </>
    );
}
FileName.propTypes={
    file:PropTypes.object.isRequired
}


//Commit Message Component

const CommitMessage = ({commit}) =>(
    <td className="commit-message">
        {commit.message}
    </td>
);
CommitMessage.propTypes={
    commit:PropTypes.object.isRequired
};


//Array of objects test data
const testFiles = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 2,
        name: 'tests',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: "2016-07-18 21:24:00",
        latestCommit: {
            message: 'Added a readme'
        }
    },
];


ReactDOM.render(
    <FileList files={testFiles} />,
    document.getElementById('root')
);
