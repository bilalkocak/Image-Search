import React from 'react';
import axios from 'axios/index';
import './SearchResult.css';
import PopUp from '../../PopUp/PopUp'
import {Link} from "react-router-dom";
import SearchHeaderBar from "../SearchHeaderBar/SearchHeaderBar";


class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            query: window.location.pathname.split('/')[2],
            collection: window.location.pathname.split('/')[3],
        };
    }


    fetchPhoto() {
        axios.get("https://api.unsplash.com/search/photos?page=1&query=" + this.state.query + "&collections=" + this.state.collection + "&client_id=10d11e134a9e70f63d187381f726f1a5d86470b6cb3e5a5b4709181929b24bc7")
            .then(images => images.data)
            .then(images => {
                this.setState({
                    photos: images.results
                });
                console.log("fetch photo")
            })
    }

    componentDidMount() {
        /*const API_KEY = "10d11e134a9e70f63d187381f726f1a5d86470b6cb3e5a5b4709181929b24bc7";
        const SECRET_KEY = "60664e6c8bee47b51c9128d3538418cee0cb777d892b9d2918857408d4422ee1";*/
        this.fetchPhoto()
        console.log("component did mount")
    }

    queryHandler = () => {
        setTimeout(() => {
            this.setState({
                query: window.location.pathname.split('/')[2],
                collection: window.location.pathname.split('/')[3]
            }, () => this.fetchPhoto())
        }, 500);

    };


    render() {

        return (
            <div>
                <SearchHeaderBar queryHandler={this.queryHandler}/>
                <div className="masonry-wrapper">
                    <div className="masonry">
                        {this.state.photos.map(image => {
                            return (
                                <Link to={"/search/" + this.state.query + "/" + this.state.collection + "/" + image.id}>
                                    <div onClick={this.fetchInfo} className={"masonry-item"} key={image.id}>
                                        <img src={image.urls.small} className={"masonry-content"} alt=""/>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                {
                    this.props.match.params.id && (<PopUp/>)
                }
            </div>


        )
    }
}


export default SearchResult;