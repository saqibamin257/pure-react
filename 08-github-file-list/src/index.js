import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import FileIcon from './FileIcon';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import Time from './Time';

//FileList Component
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

//FileListItem Component
const FileListItem = ({file}) =>(
    <tr className="file-list-item">
       <td className="file-icon"><FileIcon type={file.type}/></td>   
       <td className="file-name"><FileName fileName={file.name}/></td>
       <td className="commit-message"><CommitMessage commit={file.latestCommit}/></td>
       <td className="age"> <Time time={file.updated_at}/></td>
    </tr>
);
FileListItem.propTypes={
    file:PropTypes.object.isRequired
}

//Test Data ---Array of objects 
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
