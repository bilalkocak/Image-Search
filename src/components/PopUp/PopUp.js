import React from 'react';
import './PopUp.css';
import axios from "axios";
import {Redirect} from 'react-router-dom'


import Modal from 'react-responsive-modal';
import {SyncLoader} from "react-spinners";


class PopUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: {},
            photoId: window.location.pathname.split('/')[4],
            openSecondModal: false,
            isLoading: true
        };


    }


    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps.isOpen, "xxx")
        if (nextProps.isOpen) {
            this.setState({
                photoId: window.location.pathname.split('/')[4],
                isLoading: false
            }, () => this.fetchInfo())
        } else {
            this.setState({
                photo: {},
                isLoading: true
            })
        }


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
                    console.log("fetchInfo xxx")
                    console.log("xxx", this.state.photo)
                } catch (e) {
                    console.log(e)
                }
            })
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

    getInfo() {
        var userID, userName, name, profileLink, profileImage, exifMake, exifModel, exifExposureTime, exifAperture,
            exifFocalLength, exifIso, views, downloads, likes, width, height, locationTitle, urlRegular, urlDownload;
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
            urlDownload = this.state.photo.links.download;
            locationTitle = this.state.photo.location.title
        } catch (e) {

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
            urlDownload,
            description: locationTitle
        }
    }


    onCloseModal = () => {
        this.props.setPopUp()
        //this.setState({open: false});
    };

    render() {
        const {openSecondModal} = this.state;
        const open = this.props.isOpen;
        return (
            <div>
                {

                    <Modal open={open} onClose={this.onCloseModal} center>
                        {
                            this.state.isLoading ?
                                <div className="loadArea">
                                    <div className="load">
                                        <SyncLoader
                                            size={30}
                                            color={'#2A2B8D;'}
                                        />
                                    </div>

                                </div> :
                                <div>
                                    <div>
                                        <img src={this.getInfo().urlRegular}
                                             alt=""/>
                                    </div>
                                    <div className={'popupProfileAndButtons'}>
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
                                        <div className="popUpButtons">
                                            <div className="popUpButton moreInfoButton"
                                                 onClick={this.onOpenSecondModal}>
                                                MoreInfo
                                            </div>
                                            <a href={this.getInfo().urlDownload}>
                                                <div className={"popUpButton downloadButton"}>
                                                    Download
                                                </div>
                                            </a>

                                        </div>
                                    </div>

                                    <div className="PopUpMaps">

                                    </div>
                                </div>
                        }

                    </Modal>

                }

                }

                <Modal open={openSecondModal} onClose={this.onCloseSecondModal} center>
                    <div className="moreInfoHeader">
                        <div className="moreInfoHeaderTitle">
                            Info
                        </div>
                        <div className="moreInfoHeaderDate">
                            {this.getInfo().description}
                        </div>
                    </div>
                    <div className="moreInfoStats">
                        <div className="moreInfoStat">
                            <div className="moreInfoStatTitle">
                                Views
                            </div>
                            <div className="moreInfoStatCount">
                                {this.getInfo().views}
                            </div>
                        </div>
                        <div className="moreInfoStat">
                            <div className="moreInfoStatTitle">
                                Downloads
                            </div>
                            <div className="moreInfoStatCount">
                                {this.getInfo().downloads}
                            </div>
                        </div>
                        <div className="moreInfoStat">
                            <div className="moreInfoStatTitle">
                                Likes
                            </div>
                            <div className="moreInfoStatCount">
                                {this.getInfo().likes}
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="moreInfoExifContainer">

                        <div className="moreInfoExif">
                            <div className="moreInfoExifTitle">
                                Camera Make
                            </div>
                            <div className="moreInfoExifInfo">
                                {this.getInfo().exifMake === null ? ("No Info") : this.getInfo().exifMake}
                            </div>
                        </div>
                        <div className="moreInfoExif">
                            <div className="moreInfoExifTitle">
                                Camera Model
                            </div>
                            <div className="moreInfoExifInfo">
                                {this.getInfo().exifModel === null ? ("No Info") : this.getInfo().exifModel}
                            </div>
                        </div>
                        <div className="moreInfoExif">
                            <div className="moreInfoExifTitle">
                                Focal Length
                            </div>
                            <div className="moreInfoExifInfo">
                                {this.getInfo().exifFocalLength === null ? ("No Info") : this.getInfo().exifFocalLength}mm
                            </div>
                        </div>
                        <div className="moreInfoExif">
                            <div className="moreInfoExifTitle">
                                Aperture
                            </div>
                            <div className="moreInfoExifInfo">
                                {this.getInfo().exifAperture === null ? ("No Info") : "ƒ/" + this.getInfo().exifAperture}
                            </div>
                        </div>
                        <div className="moreInfoExif">
                            <div className="moreInfoExifTitle">
                                ISO
                            </div>
                            <div className="moreInfoExifInfo">
                                {this.getInfo().exifIso === null ? ("No Info") : this.getInfo().exifIso}
                            </div>
                        </div>
                        <div className="moreInfoExif">
                            <div className="moreInfoExifTitle">
                                Dimensions
                            </div>
                            <div className="moreInfoExifInfo">
                                {this.getInfo().width} × {this.getInfo().height}
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default PopUp