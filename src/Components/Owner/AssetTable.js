import React from 'react';
import AssetTab from './AssetTab';
import './AssetTable.css';

export default function AssetTable(props) {
    const eachItem = (item) => {
        return (
            <AssetTab id={item.id} item={item} idOwner={props.idOwner} idRenter={props.idRenter}> 
                {props.children}
            </AssetTab>
        )
    }
    return (
        <div className={"assetTable"}>
            { props.assetsList.map(eachItem) }
        </div>
    )
}