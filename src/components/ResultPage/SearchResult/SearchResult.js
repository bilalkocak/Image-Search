import React from 'react';
import axios from 'axios/index';
import Popup from 'reactjs-popup'
import './SearchResult.css';

import {Link} from "react-router-dom";

import SearchHeaderBar from "../SearchHeaderBar/SearchHeaderBar";

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        photos: [],
        query: this.props.match.params.query,
        collection: ''
    };

    fetchPhoto() {
        axios.get("https://api.unsplash.com/search/photos?page=1&per_page=20&query=" + this.state.query + "&client_id=10d11e134a9e70f63d187381f726f1a5d86470b6cb3e5a5b4709181929b24bc7")
            .then(images => images.data)
            .then(images => {
                this.setState({
                    photos: images.results
                });
            })
    }


    componentDidMount() {
        /*const API_KEY = "10d11e134a9e70f63d187381f726f1a5d86470b6cb3e5a5b4709181929b24bc7";
        const SECRET_KEY = "60664e6c8bee47b51c9128d3538418cee0cb777d892b9d2918857408d4422ee1";*/
        this.fetchPhoto()
    }


    render() {
        const ModalPopup = () =>
            (<div className="masonry-wrapper">
                <div className="masonry">
                    {this.state.photos.map(image => {
                        return (
                            <div className={"masonry-item"} key={image.id}>
                                <img src={image.urls.small} className={"masonry-content"} alt=""/>

                            </div>
                        )
                    })}
                </div>
            </div>)
        return (
            <div>
                <SearchHeaderBar query={this.state.query} queryHandler={this.queryHandler}/>
                <Popup trigger={ModalPopup} modal>
                    {close => (
                        <div className="modal">
                            <div className="xheader"> Modal Title</div>
                            <div className="content">
                                {' '}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                                Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                                delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                                <br/>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                                commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                                explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                            </div>
                            <div className="actions">
                                <Popup
                                    trigger={<button className="button"> Trigger </button>}
                                    position="top center"
                                    closeOnDocumentClick
                                >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
                                </Popup>
                                <button
                                    className="button"
                                    onClick={() => {
                                        console.log('modal closed ')
                                        close()
                                    }}
                                >
                                    close modal
                                </button>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>


        )
    }
}

export default SearchResult