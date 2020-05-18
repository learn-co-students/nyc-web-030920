import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import Navbar from './Navbar';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    songs: [],
    currentSong: null, //MINIMUM INFO I NEED will be an id later
    search: ''
    // user: null,
    // color: 'black',
  }

  handleSearch = event => this.setState({ search: event.target.value })

  chooseSong = id => this.setState({ currentSong: id })

  fetchSongs = () => { // USE ARROW FUNCTIONS for binding. Otherwise this is undefined
    fetch(API_ENDPOINT)
      .then(res => res.json())
      .then(songs => this.setState({ songs })) // key - value assignment shortcut ONLY IN OBJECTS
      // .then(songs => this.setState({ songs: [...this.state.songs, ...songs] })) IF YOU WANTD TO KEEP OLD AND ADD IN NEW SONGS
      //this.setState({ ...this.state, songs }) is also valid
  }

  updateSong = ( id, newFav ) => {
    fetch(API_ENDPOINT + `/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ favorite: newFav })
    })
      .then(res => res.json())
      .then(updatedSong => {
        let newSongs = this.state.songs.map(song => {
          if (song.id === updatedSong.id){
            return updatedSong
          } else { 
            return song
          }
        })
        this.setState({ songs: newSongs })
      })
    // this.setState({ songs: ...some updated version of songs })
  }
  
  // renderNav = () => {
  //   return (
  //     <div className="simple-flex-row">
  //       <button onClick={this.fetchSongs}>Get Songs</button> 
  //       <h1>S-not-ify 🐽</h1>
  //       <input placeholder="Search by title or artist..."/>
  //     </div>
  //   )
  // }

  render(){
    console.log('app state', this.state)
    let filteredSongs = this.state.songs.filter(song => {
      if (song.title.toLowerCase().includes(this.state.search.toLowerCase()) 
          || song.artist.toLowerCase().includes(this.state.search.toLowerCase()) ){
            return true
      } else {
        return false
      }
    })

    return (
      <div className="App">
        {/* this.renderNav() */} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <Navbar 
          fetchSongs={this.fetchSongs}
          handleSearch={this.handleSearch}
          search={this.state.search}/>
        <MainContainer 
          songs={filteredSongs} 
          currentSong={this.state.currentSong}
          updateSong={this.updateSong}
          chooseSong={this.chooseSong}/> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;
