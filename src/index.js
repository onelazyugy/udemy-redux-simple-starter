import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAO0ePwZh7ztF_8XlXtgF2_YF4yDRVF1es';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };
        
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos}); //es6 syntax due to key and value are same this.setState({videos}) or non es6 syntax this.setState({videos: videos})
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));