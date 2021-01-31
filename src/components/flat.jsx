import React, { Component } from 'react';

class Flat extends Component {
  render(){
    const data = this.props.data
    const style = {
      backgroundImage:`url(${data.imageUrl})`
    }
    return(
      <div className="card" style={style} >
        <div className="card-category">{data.price} {data.priceCurrency}</div>
        <div className="card-description">
          <h2>{data.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    )
}
}

export default Flat;

