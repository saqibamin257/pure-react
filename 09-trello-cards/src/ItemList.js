import React from 'react';
import PropTypes from 'prop-types';


// ES-6 Component

const ItemList = ({ itemList }) => {   
    return(
        itemList.map((item) => (
            <tr key={item.id}>
                <td>
                    {item.name}
                </td>
            </tr>
        ))
    );
}

//functional component
    
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
