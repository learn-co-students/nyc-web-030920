import React from 'react';
import Filter from './Filter';
import SongItem from './SongItem';

class SongList extends React.Component {
    state = {
        onlyFavs: "All", // will control the faves select in Filter
        genre: '' // will control the genre select in Filter
    }

    /**
     * to collect the state for 
     * onlyFaves select input
     * genres select input 
     * 
     * 
     * with those ==> filter out props.songs 
     */

    // just updates onlyFavs in state, 
    // when the select is changed in Filter 
    handleFilterChange = event => {
        console.log(event.target.value)
        this.setState({ onlyFavs: event.target.value })
    }

    render() {
        // based on state, decide what songs to display
        let displaySongs = [...this.props.songs]
        if(this.state.onlyFavs === "Faves"){ 
            // if we're only looking at favs, based on state
            // reset displaySongs using a filter 
            displaySongs = displaySongs.filter( song => song.favorite )
        }

        return (
            <div className="half songlist">
                <h2>Song List</h2>
                <Filter 
                    onlyFavs={this.state.onlyFavs}
                    handleFilterChange={this.handleFilterChange}/>
                <table>
                        <thead>
                            <tr>
                                <td>Title</td>
                                <td>Artists</td>
                                <td>Play?</td>
                                <td>Queue?</td>
                                <td>Favorite</td>
                                <td>Likes</td>
                            </tr>
                        </thead>
                        <tbody>
                            {/** Instead of mapping over all, just displaySongs */}
                            {displaySongs.map(song => <SongItem 
                                                        key={song.id} 
                                                        {...song} 
                                                        updateSong={this.props.updateSong}
                                                        chooseSong={this.props.chooseSong}/>)}
                            {/* [<SongItem />, <SongItem />, <SongItem />, <SongItem />, <SongItem />,<SongItem />]  effectively same as above sans props*/}
                            {/**
                             * song ==> {artist: 'common', title: 'i dont remember", url: "link goes here"}
                             */}
                        </tbody>
                </table>
            </div>
        )
    }
}

export default SongList;