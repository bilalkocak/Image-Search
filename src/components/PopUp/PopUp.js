import React from 'react';
import PropTypes from 'prop-types'
import './PopUp.css';
import axios from "axios";
/*
class PopUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: {},
            photoId: window.location.pathname.split('/')[4]
        };
    }

    static propTypes = {
        id: PropTypes.string.isRequired

    };


    fetchInfo() {
        axios.get("https://api.unsplash.com/photos/" + this.state.photoId + "?client_id=10d11e134a9e70f63d187381f726f1a5d86470b6cb3e5a5b4709181929b24bc7")
            .then(images => images.data)
            .then(images => {

                try {
                    this.setState({
                        photo: images
                    });
                } catch (e) {
                    console.log(e)
                }
            })
    }

    getInfo() {
        var userID, userName, name, profileLink, profileImage, exifMake, exifModel, exifExposureTime, exifAperture,
            exifFocalLength, exifIso, views, downloads, likes, width, height, urlRegular, urlDownload;
        try {
            userID = this.state.photo.user.id;
            userName = this.state.photo.user.username;
            name = this.state.photo.user.name;
            profileLink = this.state.photo.user.links.html;
            profileImage = this.state.photo.user.profile_image.medium;
            exifMake = this.state.photo.exif.make;
            exifModel = this.state.photo.exif.model;
            exifExposureTime = this.state.photo.exif.esposure_time;
            exifAperture = this.state.photo.exif.aperture;
            exifFocalLength = this.state.photo.exif.focal_length;
            exifIso = this.state.photo.exif.iso;
            views = this.state.photo.views;
            downloads = this.state.photo.downloads;
            likes = this.state.photo.likes;
            height = this.state.photo.height;
            width = this.state.photo.width;
            urlRegular = this.state.photo.urls.regular;
            urlDownload = this.state.links.downlad;
        } catch (e) {
            console.log(e)
        }
        return {
            userID,
            userName,
            name,
            profileLink,
            profileImage,
            exifMake,
            exifModel,
            exifExposureTime,
            exifAperture,
            exifFocalLength,
            exifIso,
            views,
            downloads,
            likes,
            width,
            height,
            urlRegular,
            urlDownload
        }
    }

    componentDidMount() {

            this.fetchInfo()

    }


    render() {
        return (
            <div>
                <div className="popUpContainer">
                    <div>
                        <img src={this.getInfo().urlRegular}
                             alt=""/>
                    </div>
                    <div className={'PopupProfileAndDownload'}>
                        <div className="popUpProfile">
                            <div className="popUpProfilePhoto">
                                <a href={this.getInfo().profileLink}>
                                    <img
                                        src={this.getInfo().profileImage}
                                        alt=""/>
                                </a>
                            </div>
                            <div className="popUpProfileInfo">
                                <div className="popUpProfileName">
                                    <a href={this.getInfo().profileLink}>{this.getInfo().name}</a>
                                </div>
                                <div className="popUpProfileLink">
                                    <a href={this.getInfo().profileLink}>@{this.getInfo().userName}</a>
                                </div>
                            </div>
                        </div>
                        <div className="PopUpDownload">

                            <a href={this.getInfo().urlDownload}>
                                <div className={"PopUpDownloadButton"}>
                                    Download
                                </div>
                            </a>

                        </div>
                    </div>
                    <div className="PopUpMaps">

                    </div>
                </div>
            </div>
        )
    }

}*/


import Modal from 'react-responsive-modal';

class PopUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: {},
            photoId: window.location.pathname.split('/')[4],
            open: true,
            openSecondModal: false,
        };
    }

    onOpenSecondModal = () => {
        this.setState({openSecondModal: true});
    };

    onCloseSecondModal = () => {
        this.setState({openSecondModal: false});
    };

    fetchInfo() {
        axios.get("https://api.unsplash.com/photos/" + this.state.photoId + "?client_id=10d11e134a9e70f63d187381f726f1a5d86470b6cb3e5a5b4709181929b24bc7")
            .then(images => images.data)
            .then(images => {

                try {
                    this.setState({
                        photo: images
                    });
                } catch (e) {
                    console.log(e)
                }
            })
    }

    getInfo() {
        var userID, userName, name, profileLink, profileImage, exifMake, exifModel, exifExposureTime, exifAperture,
            exifFocalLength, exifIso, views, downloads, likes, width, height, urlRegular, urlDownload;
        try {
            userID = this.state.photo.user.id;
            userName = this.state.photo.user.username;
            name = this.state.photo.user.name;
            profileLink = this.state.photo.user.links.html;
            profileImage = this.state.photo.user.profile_image.medium;
            exifMake = this.state.photo.exif.make;
            exifModel = this.state.photo.exif.model;
            exifExposureTime = this.state.photo.exif.esposure_time;
            exifAperture = this.state.photo.exif.aperture;
            exifFocalLength = this.state.photo.exif.focal_length;
            exifIso = this.state.photo.exif.iso;
            views = this.state.photo.views;
            downloads = this.state.photo.downloads;
            likes = this.state.photo.likes;
            height = this.state.photo.height;
            width = this.state.photo.width;
            urlRegular = this.state.photo.urls.regular;
            urlDownload = this.state.links.downlad;
        } catch (e) {
            console.log(e)
        }
        return {
            userID,
            userName,
            name,
            profileLink,
            profileImage,
            exifMake,
            exifModel,
            exifExposureTime,
            exifAperture,
            exifFocalLength,
            exifIso,
            views,
            downloads,
            likes,
            width,
            height,
            urlRegular,
            urlDownload
        }
    }

    componentDidMount() {

        this.fetchInfo()

    }

    onOpenModal = () => {
        this.setState({open: true});
    };

    onCloseModal = () => {
        this.setState({open: false});
    };

    render() {
        const { open, openSecondModal } = this.state;
        return (
            <div>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <div>
                        <div>
                            <img src={this.getInfo().urlRegular}
                                 alt=""/>
                        </div>
                        <div className={'PopupProfileAndDownload'}>
                            <div className="popUpProfile">
                                <div className="popUpProfilePhoto">
                                    <a href={this.getInfo().profileLink}>
                                        <img
                                            src={this.getInfo().profileImage}
                                            alt=""/>
                                    </a>
                                </div>
                                <div className="popUpProfileInfo">
                                    <div className="popUpProfileName">
                                        <a href={this.getInfo().profileLink}>{this.getInfo().name}</a>
                                    </div>
                                    <div className="popUpProfileLink">
                                        <a href={this.getInfo().profileLink}>@{this.getInfo().userName}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="PopUpDownload">

                                <a href={this.getInfo().urlDownload}>
                                    <div className={"PopUpDownloadButton"}>
                                        Download
                                    </div>
                                </a>

                            </div>
                        </div>
                        <button className="btn btn-action" onClick={this.onOpenSecondModal}>
                            Open second modal
                        </button>
                        <div className="PopUpMaps">

                        </div>
                    </div>
                </Modal>
                <Modal open={openSecondModal} onClose={this.onCloseSecondModal} center>


                </Modal>
            </div>
        );
    }
}

export default PopUp