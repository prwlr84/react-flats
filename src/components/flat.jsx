import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
     if (this.props.selectFlat){
      this.props.selectFlat(this.props.data.lat, this.props.data.lng);
    }
  }

  render(){
    const data = this.props.data
    const style = {
      backgroundImage:`url(${data.imageUrl})`
    }
    return(
      <div className="card" style={style} onClick={() => this.handleClick()}>
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

