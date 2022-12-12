
import "./App.css";
import React from "react";

class StarWars extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      height: null,
      homeworld: null,
      films: [],
    };
  }

  getNewCharacter() {
    const randomNumber = Math.ceil(Math.random() * 88);
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          image: data.image,
          films: ["item 1", "item 2"],
          loadedCharacter: true,
          gender:data.gender,
          
        });
      });
  }

  

  Click() {
    this.getNewCharacter();
   
  }

  render() {
    return (
      
      <div >{/*className="character-wrap" id="c-wrap"> */}
        {
      // if this loaded char is true then
      //this is for only we click the randomized btn the info will display
      this.state.loadedCharacter &&
      <div>
       
       <img  src={this.state.image} width="250px" border="15px"/>
       <p>Name:{this.state.name}</p>
       <p>Height:{this.state.height}cm</p>
       <div className="homeworld">Homeworld : {this.state.homeworld}</div>
        <p>Gender:{this.state.gender}</p>
      </div>
     
     
      
     }
         
          <button type="button" onClick={() => this.Click()} className="btn">
            Get Random Character
          </button>
         
        </div>

       
      
    );
  }
}

function App() {
  return (
    <div className="App">
      <div className="Header">
        <header>
          <h1>Random Star War Characters Generator</h1>
        </header>
      </div>
      <StarWars />
    </div>
  );
}

export default App;