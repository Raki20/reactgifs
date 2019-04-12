import React, { Component, Fragment } from 'react';
import SelectedGif from './SelectedGif';
import GifList from './GifList';

const gifs = [
    "https://media.giphy.com/media/KVVgzFKIlqBqx0OFIw/giphy.gif",
    "https://media.giphy.com/media/gB4KWtd3uSsJq/giphy.gif",
    "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    "https://media.giphy.com/media/toB3AnUDkqE3GENKx0/giphy.gif"
];
class App extends Component {
    constructor (props) {
        super (props);
        this.state = {
            selectedGif: "https://media.giphy.com/media/KVVgzFKIlqBqx0OFIw/giphy.gif"
        };
    }
    render () {

        const { selectedGif } = this.state;
            return (
        <Fragment>
            <SelectedGif selectedGif={selectedGif}/>
                <GifList gifs={gifs}/> 
                </Fragment>
        );
    }
}

export default App;
