import React, { Component } from 'react';
import './App.css';
import Body from './Body/Body';
import Row from './BootstrapComponents/Row';
import Col from './BootstrapComponents/Col';
import Header from './Header/Header';
import ImageCard from './ImageCards/ImageCards';

class App extends Component {
  state = {
    points: 0,
    images: [
      {
        id: 1,
        src: "https://media.giphy.com/media/xUA7b2S7SxhM1cGdsQ/giphy.gif",
        value: 1,
      },
      {
        id: 2,
        src: "https://media.giphy.com/media/xUA7b2S7SxhM1cGdsQ/giphy.gif",
        value: 0,
      },
      {
        id: 3,
        src: "https://media.giphy.com/media/xUA7b2S7SxhM1cGdsQ/giphy.gif",
        value: 0,
      },
      {
        id: 4,
        src: "https://media.giphy.com/media/xUA7b2S7SxhM1cGdsQ/giphy.gif",
        value: 0,
      },
      {
        id: 5,
        src: "https://media.giphy.com/media/xUA7b2S7SxhM1cGdsQ/giphy.gif",
        value: 0,
      },
      {
        id: 6,
        src: "https://media.giphy.com/media/xUA7b2S7SxhM1cGdsQ/giphy.gif",
        value: 0,
      },
      
    ]
  }

  shuffle = (arr) => {
    let i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};

  clickHandler = (event) =>{
    let arr = [...this.state.images]
    const value  = event.currentTarget.dataset.value
    console.log("click",  event.currentTarget.dataset.value)
    
    if(value == 1){
      let points = this.state.points;
      points += 1
      console.log("point")
      this.setState({
        points:points,
        images:this.shuffle(arr)
      })
    } else this.setState({
      points:0,
      images:this.shuffle(arr)
    })
  }

  render() {
    return (
      <div className="App">
        <Body style={{display: "flex",flexDirection:"row", justifyContent: "center", flexWrap:"wrap"}}>
          <Row style={{ width:"100%", height:"15%", backgroundColor:"Coral" ,borderRadius:"1rem", marginBottom: "2rem"}}>
            <Header points={this.state.points}/>
          </Row>
          <Row style={{ width:"100%",backgroundColor:"Goldenrod"}}>
            <Col size="md-10 offset-md-1">
                <ImageCard 
                images={this.state.images}
                onClick={(event)=> this.clickHandler(event)}
                style={{ width: "15rem", padding: "1rem" }} 
                />
            </Col>
          </Row>
        </Body>
      </div>
    );
  }
}

export default App;
