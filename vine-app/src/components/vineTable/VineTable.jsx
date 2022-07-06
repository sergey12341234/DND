import React from 'react';
import bottleIcon from '../../images/wine_bottle-02.svg';
import VineTableItem from './VineTableItem';

const VineTable = ({ vineItems }) => {
    return (
        <table className='content-table'>
            <thead>
                <tr>
                    <th className='content-table-head__bottle'>
                        <img src={bottleIcon} alt="bottle" />
                    </th>
                    <th>Wine name</th>
                    <th>Country</th>
                    <th>Region</th>
                    <th>Grape</th>
                    <th>Type</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                { vineItems.length > 0 && vineItems.map(item => <VineTableItem  key={item.price} item={item}/>) }
            </tbody>
        </table>
    );
};

export default VineTable;