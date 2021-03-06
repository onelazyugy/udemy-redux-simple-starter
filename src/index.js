import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAO0ePwZh7ztF_8XlXtgF2_YF4yDRVF1es';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null 
        };
        this.onVideoSelect = this.onVideoSelect.bind(this);
        this.videoSearch = this.videoSearch.bind(this);
        this.videoSearch('home depot');
    }
    
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            }); //es6 syntax due to key and value are same this.setState({videos}) or non es6 syntax this.setState({videos: videos})
        });
    }

    onVideoSelect(selectedVideo){
        this.setState({
            selectedVideo
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={this.videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));