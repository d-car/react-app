import React, { Component } from "react";
import KongCard from "./components/KongCard/KongCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import kongs from "./kongs.json";
import "./App.css";

class App extends Component {
  state = {
    kongs: kongs,
    clicked: [],
    score: 0,
    topScore: 0,
    alert: ""
  };

  // removeKong = id => {
  //   // Filter this.state.kongs for kongs with an id not equal to the id being removed
  //   const kongs = this.state.kongs.filter(kong => kong.id !== id);
  //   // Set this.state.kongs equal to the new kongs array
  //   this.setState({ kongs });
  // };

  // Map over this.state.kongs and render a KongCard component for each kong object
  render = (array) => {
    return this.state.kongs.map(kong => ( 
      <section className='col s4 m3 l3' key={kong.id} id={kong.id}>
        <KongCard
          name={kong.name} 
          image={kong.image} 
          reArrangeKongs={() => {this.reArrangeKongs(this.state.Kongs)}}
          kongs={() => {this.KongCard(kong.id)}}/>
      </section>
    )
  )

  KongCard = (id) => {
    const [pageBody] = document.getElementsByTagName('body');

    if (this.state.KongCard.includes(id)) {
      this.setState({score: 0, KongCard: []})

      pageBody.classList.add('Wrapper')
      this.setState({alert: 'You picked that already! Start Over.'})
      console.log(KongCard)


    } else {
      this.setState({KongCard: [...this.state.KongCard, id]})
      this.setState({score: this.state.score + 1})
      if (this.state.score >= this.state.topScore) {
        this.setState({topScore: this.state.score + 1})

      } 
      if (this.state.score === 11) {
        this.setState({alert: 'You Won!'})
        this.setState({score: 0, KongCard: [], kongs: kongs})
      } 
    }
  }

    









  }
}

export default App