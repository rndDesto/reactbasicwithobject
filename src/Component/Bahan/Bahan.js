import React, { Component } from 'react';

class Bahan extends Component {
  state = {
    bahan: {
      salad : 1,
      beacon : 3,
      meat : 4
    }
  }


  tambahBahan = (namaBahan) => {
    let oldCount = this.state.bahan[namaBahan];
    let updateCount = oldCount + 1;
    let updateBahan = {...this.state.bahan};
    updateBahan[namaBahan] = updateCount;
    this.setState({
      bahan : updateBahan
    })
  }

  kurangBahan = (namaBahan) => {
    let oldCount = this.state.bahan[namaBahan];
    if (oldCount <= 0) {
      return;
    }
    let updateCount = oldCount - 1;
    let updateBahan = {...this.state.bahan};
    updateBahan[namaBahan] = updateCount;
    this.setState({
      bahan:updateBahan
    })
  }


  render() {
    const {bahan} = this.state;
    let bahans = [];


    // Transform Object Into Array
    for (let data in bahan) {
      console.log(data)
      bahans.push({
        name : data,
        jumlah : bahan[data]
      })
    }


    // Transform Object Into Alternative
    // Object.keys(bahan).map(data => {
    //   return (
    //     bahans.push({
    //       name : data,
    //       jumlah : bahan[data]
    //     })
    //   )
    // });

    let showBahan = null;
    showBahan = (
      bahans.map((data,index)=> {
        return(
          <p key={index}>
            <span onClick={this.kurangBahan.bind(this, data.name)}>Less </span>
            {data.name} - {data.jumlah}
            <span onClick={this.tambahBahan.bind(this, data.name)}> More</span>
          </p>
        ) 
          
      })
    )

    return (
      <div>
        {showBahan}
      </div>
    )
  }
}

export default Bahan;
