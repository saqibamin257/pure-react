import React from 'react';
import PropTypes from 'prop-types';

const ItemList = ({ itemList }) => (
    itemList.map((item) => (
        <tr key={item.id}>
            <td>
                {item.name}
            </td>
        </tr>
    ))
)

// function ItemList({ itemList }) {        
//     return(
//         itemList.map((item) => (
//             <tr key={item.id}>
//                 <td>
//                     {item.name}
//                 </td>
//             </tr>
//         ))
//     );
// }


ItemList.propTypes={
    itemList:PropTypes.array.isRequired
}

export default ItemList;
