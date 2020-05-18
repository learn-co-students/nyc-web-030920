import React from 'react';
import SongList from './SongList';
import Queue from './Queue';

const MainContainer = props => {
    return (
        <div className="simple-flex-row top">
            <SongList 
                songs={props.songs} 
                updateSong={props.updateSong}
                chooseSong={props.chooseSong}/> {/** TODO: What props do I need? */}
            <Queue songs={props.songs} currentSong={props.currentSong} /> {/** TODO: What props do I need? */}
        </div>
    )
}

export default MainContainer;