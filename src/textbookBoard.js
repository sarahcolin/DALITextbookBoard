import React, { Component } from 'react';
import { Map } from 'immutable';
import TextbookPosting from './textbookPosting';
import * as db from './datastore';


class TextbookBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {textbooks: null, textbookID: 0, newTextbookName: "", newTextbookPrice: "", newTextbookImage: "", showAddTextbook: false};
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

    saveTextbookInfo = () => {
        db.addTextbook(this.state.newTextbookName, this.state.newTextbookPrice, this.state.newTextbookImage)
        this.setState({
             showAddTextbook: false,
             newTextbookName: "",
             newTextbookPrice: '',
             newTextbookImage: '',
        })
        db.fetchTextbooks(this.fetchedTextbooks);
    
    }

    delete = (id) => {
        db.removeTextbook(id);
        db.fetchTextbooks(this.fetchedTextbooks);
    }

    save = (id, name) => {
        db.updateName(id, name);
        db.fetchTextbooks(this.fetchedTextbooks);
    }

    showAddTextbook = () => {
        this.setState({showAddTextbook: true})
    }

    componentDidMount() {
        db.fetchTextbooks(this.fetchedTextbooks);
    }

    fetchedTextbooks = (allTextbooks) => {
        this.setState({textbooks: allTextbooks});
    }

    render() {

        let allTextbooks = null;
        if(this.state.textbooks!=null){
            allTextbooks = Object.keys(this.state.textbooks).map((id) => {
            const info = this.state.textbooks[id];
            return <TextbookPosting
                save={this.save}
                delete={this.delete}
                name={info.textbookName}
                price={info.textbookPrice}
                textbookURL={info.link}
                id={id}/>
                }
            )
        }

        const addTextbook = this.state.showAddTextbook 
            

        return (
            <div className = "All">
                <header className="appHeader">This is the textbook board</header>
                
                <input placeholder="name" type="text" value={this.state.newTextbookName} onChange={this.newTextbookNameFunction}/>

                <input placeholder="price" type="text" value={this.state.newTextbookPrice} onChange={this.newTextbookPriceFunction} />

                <input placeholder="imageURL" type="text" value={this.state.newTextbookImage} onChange={this.newTextbookImageFunction} />

                <button onClick={this.saveTextbookInfo}>Save</button>
                    
                <button onClick={this.showAddTextbook}>Add a Textbook</button>

                {addTextbook}

                {allTextbooks}
            </div>
        )
    }
}



export default TextbookBoard;