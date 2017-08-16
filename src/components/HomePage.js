import React from 'react';
import AboutComponent from './about';
import MainCharacterComponent from './maincharacter';
import Booklet from './booklet-wrapper';

export default class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            beginAdventure: false,
            showName: false,
            showMoji: false,
            showWhat: false,
            showWhere: false,
            displayStory: false,
            name: '',
            index: 0,
            flipPageIndex: 0,
        };
    }
    startAdventure = () => {
        this.setState({
            beginAdventure: true,
            showName: true,
        });
    };
    getName = event => {
        event.preventDefault();
        console.log(event.target.name.value);
        this.setState({
            name: event.target.name.value,
            showMoji: true,
        });
    };
    nextPage = () => {
        this.setState({
            index: this.state.index + 2,
        });
    };
    previousPage = () => {
        this.setState({
            index: this.state.index - 2,
        });
    };
    turnBackPage = () => {
        this.setState({
            flipPageIndex: this.state.flipPageIndex - 1,
        });
    };
    turnForwardPage = () => {
        this.setState({
            flipPageIndex: this.state.flipPageIndex + 1,
        });
    };
    showWhatContent = () => {
        this.setState({
            showWhat: true,
        });
    };
    showWhereContent = () => {
        this.setState({
            showWhere: true,
        });
    };
    displayStory = () => {
        this.setState({
            showName: false,
            displayStory: true,
        });
    };
    render() {
        return (
            <div>
                <AboutComponent display={!this.state.beginAdventure} onClick={this.startAdventure} />
                <MainCharacterComponent
                    showName={this.state.showName}
                    showMoji={this.state.showMoji}
                    showWhere={this.state.showWhere}
                    showWhat={this.state.showWhat}
                    showWhatContent={this.showWhatContent}
                    showWhereContent={this.showWhereContent}
                    displayStory={this.displayStory}
                    getName={this.getName}
                />

                <Booklet
                    display={this.state.displayStory}
                    index={this.state.index}
                    pages={[<div> Comp 1</div>]}
                    flipPageIndex={this.state.flipPageIndex}
                    nextPage={this.nextPage}
                    previousPage={this.previousPage}
                />
            </div>
        );
    }
}
