import React, { Component } from 'react';
import Flat from './flat';


const FlatList = (props) => {
    return (
      <div className="flat-list">
        {props.flatData.map(flat => <Flat data={flat} key={flat.name} />)}
      </div>
      );
  };

export default FlatList;
