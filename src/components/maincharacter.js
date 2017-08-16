import React from 'react';

// This may benefit from being a Component with State
const MainCharacterComponent = props => {
    let content;
    let bitmojiContent;
    let whereContent;
    let whatContent;
    if (props.showMoji) {
        bitmojiContent = (
            <div className="row" style={{ width: '100vw', height: '100vh' }}>
                <h1>
                    Choose Your{' '}
                    <span>
                        <img id="bitmojiLogo" src=" images/bitmojiLogoWhit.png" alt="Bitmoji Logo" />
                    </span>
                </h1>
                <p className="lead hidden-xs">Roll the dice, or enter your own!</p>

                <div className="avatarcardBG">
                    <div className="col-sm-12 avatarBox">
                        <img
                            id="avatarImage"
                            className="img-responsive  js-bitmoji media-object image_Error"
                            alt=" random bitmoji"
                            src="https://render.bitstrips.com/v2/cpanel/10212028-2635346_5-s4-v1.png?transparent=1"
                        />
                    </div>
                </div>
                <div className="col-sm-12">
                    <button className="btn btn-success image_Error dice btn-lg">
                        Random <img src="/images/randomDice.png" width="25" />
                    </button>
                </div>
                <div className="col-sm-offset-2 col-sm-8 userBitmoji">
                    <p className="lead">Use your own Bitmoji.</p>
                    <div className="input-group input-group-md col-sm-offset-3 col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="bitMojiID2"
                            placeholder="Enter your Bitmoji URL!"
                        />

                        <span className="input-group-addon ">
                            <a href="#" data-toggle="modal" data-target="#modal-fullscreen">
                                Help
                            </a>
                        </span>

                        <button className="input-group-btn" onClick={props.showWhereContent}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        bitmojiContent = <div />;
    }
    if (props.showWhere) {
        whereContent = (
            <div style={{ width: '100vw', height: '100vh' }}>
                Choose Where Youd Like to go <input type="text" />
                <button onClick={props.showWhatContent}>Next</button>
            </div>
        );
    }
    if (props.showWhat) {
        whatContent = (
            <div style={{ width: '100vw', height: '100vh' }}>
                What would you like do to?<input type="text" />
                <button onClick={props.displayStory}>Next</button>
            </div>
        );
    }

    if (props.showName) {
        content = (
            <div>
                <div style={{ minHeight: '100vh', width: '100vw' }}>
                    <form onSubmit={props.getName}>
                        {' '}<h3>Who are you</h3>
                        <input type="text" name="name" />
                    </form>
                </div>
                {bitmojiContent}
                {whereContent}
                {whatContent}
            </div>
        );
    } else {
        content = <div />;
    }
    return content;
};
export default MainCharacterComponent;
