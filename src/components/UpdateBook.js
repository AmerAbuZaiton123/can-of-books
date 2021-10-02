import React, { Component } from 'react'

class UpdateBook extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.upBooksForm}>
                    <input type="text" name='title' defaultValue={this.props.bookInformation.title} />

                    <input type="text" name='Descrption' defaultValue={this.props.bookInformation.Descrption} />

                    <input type="text" name='status' defaultValue={this.props.bookInformation.status} />

                    <input type="submit" value="Update"></input>
                </form>
            </div>
        )
    }
}

export default UpdateBook