import React, { Component } from "react";
import KongCard from "./components/KongCard/KongCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import kongs from "./kongs.json";
import "./App.css";

class App extends Component {
  // Setting this.state.kongs to the kongs json array
  state = {
    kongs
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
          clickedCharacter={() => {this.clickedCharacter(kong.id)}}/>
      </section>
    )
  )

    










      // <Wrapper>
      //   <Title>kongs List</Title>
      //   {this.state.kongs.map(kong => (
      //     <KongCard
      //       removekong={this.removekong}
      //       id={kong.id}
      //       key={kong.id}
      //       name={kong.name}
      //       image={kong.image}
      //     />
      //   ))}
      // </Wrapper>
    // );
  }
}

export default App