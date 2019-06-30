    
import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Score from "./components/Score";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import imgs from "./imgs.json";
import Footer from "./components/Footer";
import './style.css';

class App extends Component {
  state = {
    imgs,
    clicked: "",
    count: 0,
    topscore: 0
  }

  CardPlus = id => {
    // console.log(id.id);

// score counter 
    this.setState({
      count: this.state.count + 1,
      clicked: id.id
    });

    // card shuffler (items  in an array) - found this method online
    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
      shuffle(imgs);
      this.setState({imgs: imgs});

    // if same card id is clicked then restart score and record the topscore
    if (this.state.clicked === id.id) {
          if (this.state.count > this.state.topscore) {
            this.setState({
              topscore: this.state.count,
            })
          }
          this.setState({
            count: 0
          })
        }
  }


  render() {
    return (
      <div className ="appBody">
        <Navbar />
        <Score
          currentScore={this.state.count}
          topScore={this.state.topscore}
        >
        </Score>

        <Wrapper>
        {this.state.imgs.map(img => (
          <Card
            // removeFriend={this.removeFriend}
            id={img.id}
            key={img.id}
            image={img.image}
            CardPlus={this.CardPlus}
          />
        ))}
      </Wrapper>
        <Footer />
      </div>


    )
  }

}

export default App;