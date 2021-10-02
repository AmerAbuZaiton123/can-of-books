import React, { Component } from 'react'

export class NewBookForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.
                    addBookFunction}>

                    <input type="text" name="title" placeholder='Enter Book Name'></input>

                    <input type="text" name="Descrption" placeholder='Enter Book Descrption'></input>

                    <input type="text" name="status" placeholder='Enter Book Status'></input>

                    <input type="submit" value="Add New Book"></input>
                </form>
            </div>
        )
    }
}

export default NewBookForm
