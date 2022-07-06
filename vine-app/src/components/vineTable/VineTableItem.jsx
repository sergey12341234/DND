import React from 'react';
import fakeBottleIcon from '../../images/023-wine-bottle-01.svg';


const VineTableItem = ({ item }) => {
    const { name, country, region, grape, type, price } = item;
    return (
        <tr>
        <td className='content-table-body__bottle'>
            <img src={fakeBottleIcon} alt="" />
        </td>
        <td>
            <div className='сell'>{name}</div>
        </td>
        <td >
            <div className="cell">{country}</div>
        </td>
        <td>
            <div className="cell">{region}</div>
        </td>
        <td>
            <div className="cell">{grape}</div>
        </td>
        <td>
            <div className="cell">{type}</div>
        </td>
        <td>
            <div className="cell">{price}</div>
        </td>
    </tr>
    );
};

export default VineTableItem;