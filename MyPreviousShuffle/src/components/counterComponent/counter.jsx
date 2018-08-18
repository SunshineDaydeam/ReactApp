import React, { Component } from 'react';

class Counter extends Component {

  //  State
  state = {
    count: 0,
    imageURL: 'https://picsum.photos/200',
    tags: ['Jane', 'Sam', 'Laura'],
    images: [
      { key: 1, imageURL: '', count: 0 },
      { key: 2, imageURL: '', count: 0 },
      { key: 3, imageURL: '', count: 0 },
      { key: 4, imageURL: '', count: 0 },
      { key: 5, imageURL: '', count: 0 },
      { key: 6, imageURL: '', count: 0 },
      { key: 7, imageURL: '', count: 0 },
      { key: 8, imageURL: '', count: 0 },
      { key: 9, imageURL: '', count: 0 },
      { key: 10, imageURL: '', count: 0 },
      { key: 11, imageURL: '', count: 0 },
      { key: 12, imageURL: '', count: 0 },
      { key: 13, imageURL: '', count: 0 },
      { key: 14, imageURL: '', count: 0 },
      { key: 15, imageURL: '', count: 0 },
      { key: 16, imageURL: '', count: 0 },
      { key: 17, imageURL: '', count: 0 },
      { key: 18, imageURL: '', count: 0 },
      { key: 19, imageURL: '', count: 0 },
      { key: 20, imageURL: '', count: 0 },
      { key: 21, imageURL: '', count: 0 },
      { key: 22, imageURL: '', count: 0 },
      { key: 23, imageURL: '', count: 0 },
      { key: 24, imageURL: '', count: 0 }
    ]
  };

  buttonHandlerFun = () => {
    console.log('button was clicked')
  }

  renderTags(){
    if (this.state.tags.length === 0) return (<p>There are no tags</p>)
    return (        
      <ul>
        {this.state.tags.map(tag => <li key = {tag}>{ tag }</li>)}
      </ul>
    )
  }

  handleIncrement = (product) =>{
    console.log(product)
    this.setState({count: this.state.count + 1})
  }
  handleDecrement = () =>{
    this.setState({count: this.state.count - 1})
  }
  handleClear = () =>{
    this.setState({count: 0});
  }

  // shuffleArrayTest() {
  //   const array = ['Sally', 'Laura', 'Joe', 'Austin']
  //   let i = array.length - 1;
  //   for (; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   this.setState({images: array})
  //   return array;
  // }

  shuffleArray = () => {
    const array = this.state.images
    for (let i = 0; i<this.state.images.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    // console.log(array)
    this.setState({images: array})
  }

  handleUpdate = () => {
    console.log(this.props);
  }

  // Render Method
  render() {
    // this.shuffleArray();
    const product = 'blue'
    return ( 
      // <React.Fragment>
        <div className="container mt-3">
        {/* {this.shuffleArray()} */}
        <button  className = 'btn btn-warning' onClick = {this.shuffleArray}>Shuffle</button>
          <div className='row mb-3'>
            {this.state.images.map(image => <div className='col-2 border text-center' id={image.key} onClick={this.handleUpdate} key={image.key}>{image.key} </div>)}
          </div>
          <button onClick={this.handleUpdate} id='Banana'>Test Button</button>
          {/* <p>{this.shuffleArrayTest()}</p>        */}
          {this.state.tags.length === 0 && 'There are 0 Tags'}
          <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>
          <button onClick={ () => this.handleIncrement(product)} className = "btn btn-secondary btn-sm">Increment</button>
          <button onClick={this.handleDecrement} className = 'btn btn-danger btn-sm'>Decrement</button>
          <button onClick = {this.handleClear} className = 'btn btn-success btn-sm'>Clear</button>
          {this.renderTags()}
        </div>
      // </React.Fragment> 
    );
  }

  // Dynamically Change Badge Color
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += (this.state.count === 0) ? 'warning' : 'primary';
    return classes;
  }

  //Dynamically change '0' to 'Zero'
  formatCount(){
    const { count } = this.state;
    return count === 0 ? 'Zero' : count
    // return count === 0 ? <h1>ZERO</h1> : count
  }
}
 
export default Counter;