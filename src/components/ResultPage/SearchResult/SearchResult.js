import React from 'react';
import axios from 'axios/index';
import './SearchResult.css';
import PopUp from '../../PopUp/PopUp'
import {Link} from "react-router-dom";
import SearchHeaderBar from "../SearchHeaderBar/SearchHeaderBar";
import NoResult from '../../NoResult/NoResult'
import {SyncLoader} from "react-spinners";


class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            query: window.location.pathname.split('/')[2],
            collection: window.location.pathname.split('/')[3],
            popUp: window.location.pathname.split('/')[4] ? true : false,
            isLoading: true,
            photoCount: '',
            pageCount: '',
            currentPage: 1
        };


    }

    setPopUp = () => {
        this.setState({
            popUp: !this.state.popUp
        }, () => {
            if (this.state.popUp) {
                this.fetchPhoto()
            }
        })
    };


    fetchRandomPhoto() {
        let url = "https://api.unsplash.com/photos/random?count=15&client_id=10d11e134a9e70f63d187381f726f1a5d86470b6cb3e5a5b4709181929b24bc7";
        axios.get(url)
            .then(images => images.data)
            .then(images => {
                this.setState({
                    photos: images,
                    isLoading: false,
                    pageCount:1,
                    photoCount:15
                });
            })
    }

    fetchPhoto() {

        let url = "https://api.unsplash.com/search/photos?page=" + this.state.currentPage + "&per_page=15&query=" + this.state.query + "&collections=" + this.state.collection + "&client_id=10d11e134a9e70f63d187381f726f1a5d86470b6cb3e5a5b4709181929b24bc7";
        axios.get(url)
            .then(images => images.data)
            .then(images => {
                this.setState({
                    photos: images.results,
                    isLoading: false,
                    photoCount: images.total,
                    pageCount: images.total_pages
                });
                console.log("fetch photo")
            })
    }

    componentDidMount() {
        /*const API_KEY = "10d11e134a9e70f63d187381f726f1a5d86470b6cb3e5a5b4709181929b24bc7";
        const SECRET_KEY = "60664e6c8bee47b51c9128d3538418cee0cb777d892b9d2918857408d4422ee1";*/
        if (this.state.query === 'random') this.fetchRandomPhoto()
        else
            this.fetchPhoto()
    }

    queryHandler = () => {
        setTimeout(() => {
            this.setState({
                query: window.location.pathname.split('/')[2],
                collection: window.location.pathname.split('/')[3],
                isLoading: true
            }, () => this.fetchPhoto())
        }, 500);
    };

    clickNext = () => {
        this.setState({
            currentPage: this.state.currentPage + 1
        }, () =>
            this.fetchPhoto())
    };

    clickPrev = () => {
        this.setState({
            currentPage: this.state.currentPage - 1
        }, () =>
            this.fetchPhoto())
    };

    render() {

        return (
            <div>
                <SearchHeaderBar queryHandler={this.queryHandler}/>
                <div className={"resultWrapper"}>
                    {
                        this.state.isLoading ?
                            <div className="searchLoadArea">
                                <div className="searchLoadArea2">
                                    <SyncLoader
                                        size={30}
                                        color={'#2A2B8D;'}
                                    />
                                </div>

                            </div>
                            :
                            this.state.photos.length === 0 ? <NoResult/> : (
                                <div>
                                    <div className="masonry-wrapper">
                                        <div className="masonry">
                                            {this.state.photos.map(image => {
                                                return (
                                                    <Link
                                                        to={"/search/" + this.state.query + "/" + this.state.collection + "/" + image.id}
                                                        key={image.id}>
                                                        <div onClick={this.setPopUp} className={"masonry-item"}>
                                                            <img src={image.urls.small} className={"masonry-content"}
                                                                 alt=""/>
                                                        </div>
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    {
                                        this.state.pageCount !== 1 ?
                                            (
                                                <div className="paginate">
                                                    <ul>
                                                        {
                                                            this.state.currentPage !== 1 ? <li onClick={this.clickPrev}>
                                                                Previous
                                                            </li> : null
                                                        }
                                                        {
                                                            this.state.currentPage !== this.state.pageCount ?
                                                                <li onClick={this.clickNext}>
                                                                    Next
                                                                </li> : null
                                                        }

                                                    </ul>
                                                </div>
                                            ) : null
                                    }

                                </div>

                            )
                    }

                    {
                        this.props.match.params.id && (<PopUp setPopUp={this.setPopUp} isOpen={this.state.popUp}/>)
                    }
                </div>

            </div>


        )
    }
}


export default SearchResult;