import React, { Component } from 'react';
import { Map } from 'immutable';
import TextbookPosting from './textbookPosting'


class TextbookBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {textbooks: Map(), textbookID: 0, newTextbookName: "", newTextbookPrice: "", newTextbookImage: ""};
    }

    newTextbookNameFunction = (event) => {
        this.setState({newTextbookName: event.target.value})
    }

    newTextbookPriceFunction = (event) => {
        this.setState({newTextbookPrice: event.target.value})
    }

    newTextbookImageFunction = (event) => {
        this.setState({newTextbookImage: event.target.value})
    }

    TextbookInfo = () => {
        var textbookData = {
            name: this.state.newTextbookName,
            condition: this.state.newTextbookCondition,
            image: this.state.newTextbookImage,
        }

        this.setState({
             textbooks: this.state.textbooks.set(this.state.textbookID, textbookData),
             textbookID: this.state.textbookID +1,
        })
    }

    render() {

        const allTextbooks = this.state.textbooks.entrySeq().map(
            ([id, textbook]) => {
                return <TextbookPosting name= {textbook.name} price={textbook.price} textbookURL={textbook.image} id={id}/>
            }
        )
        return (
            <div>
                <p> This is the textbook board </p>
                
                <input placeholder="name" type="text" value={this.state.newTextbookName} onChange={this.newTextbookNameFunction}/>
                
                {allTextbooks}

                <p> Add a Textbook!</p>
                
                <button onClick={this.saveTextbookInfo}>Save</button>
            </div>
        )
    }
}



export default TextbookBoard;