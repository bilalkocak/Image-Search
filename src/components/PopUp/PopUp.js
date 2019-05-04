import React from 'react';
import PropTypes from 'prop-types'
import './PopUp.css';

class PopUp extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired
    };


    render() {
        return (
            <div>
                <div className="popUpContainer">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1520763185298-1b434c919102?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjY5NjQyfQ"
                            alt=""/>
                    </div>
                    <div className={'PopupProfileAndDownload'}>
                        <div className="popUpProfile">
                            <div className="popUpProfilePhoto">
                                <a href="https://unsplash.com/@dlanor_s">
                                    <img
                                        src="https://images.unsplash.com/profile-1520763061862-dcf4d6ea5999?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64"
                                        alt=""/>
                                </a>
                            </div>
                            <div className="popUpProfileInfo">
                                <div className="popUpProfileName">
                                    <a href="https://unsplash.com/@dlanor_s">Dlanor S</a>
                                </div>
                                <div className="popUpProfileLink">
                                    <a href="https://unsplash.com/@dlanor_s">@{"dlanor_s"}</a>
                                </div>
                            </div>
                        </div>
                        <div className="PopUpDownload">

                            <a href="https://unsplash.com/photos/ATgfRqpFfFI/download">
                                <div className={"PopUpDownloadButton"}>
                                    Download
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default PopUp;