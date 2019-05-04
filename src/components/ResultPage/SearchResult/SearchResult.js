import React from 'react';
import axios from 'axios/index';
import Popup from 'reactjs-popup'
import './SearchResult.css';
import PopUp from '../../PopUp/PopUp'
import {Link} from "react-router-dom";
import SearchHeaderBar from "../SearchHeaderBar/SearchHeaderBar";
import {connect} from "react-redux";
import {updateSearch} from "../../../actions/searchActions";


class SearchResult extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        photos: [],
        query: this.props.match.params.query,
        collection: this.props.match.params.collection
    };

    fetchPhoto() {
        axios.get("https://api.unsplash.com/search/photos?page=1&query=" + this.state.query + "&collections=" + this.state.collection + "&client_id=10d11e134a9e70f63d187381f726f1a5d86470b6cb3e5a5b4709181929b24bc7")
            .then(images => images.data)
            .then(images => {
                this.setState({
                    photos: images.results
                });
            })
    }

    photoIdHandler=(id)=>{
        this.props.photoIdHandler(this.state.query, this.state.collection,id);
    };

    componentDidMount() {
        /*const API_KEY = "10d11e134a9e70f63d187381f726f1a5d86470b6cb3e5a5b4709181929b24bc7";
        const SECRET_KEY = "60664e6c8bee47b51c9128d3538418cee0cb777d892b9d2918857408d4422ee1";*/
        //this.fetchPhoto()
    }


    render() {

        return (
            <div>
                <SearchHeaderBar query={this.state.query} queryHandler={this.queryHandler}/>
                <div className="masonry-wrapper">
                    <div className="masonry">
                        {this.state.photos.map(image => {
                            return (
                                <div className={"masonry-item"}  key={image.id}>
                                    <img src={image.urls.small} className={"masonry-content"} alt=""/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {
                    this.props.match.params.id ? <PopUp/> : <div/>
                }
            </div>


        )
    }
}

const mapStateToProps = (state, props) => ({
    search: state.search
});

const mapDispatchToProps = {
    photoIdHandler: updateSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);