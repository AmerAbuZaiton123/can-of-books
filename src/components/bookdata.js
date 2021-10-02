import React, { Component } from 'react';

import Card from 'react-bootstrap/Card'

import Button from 'react-bootstrap/Button'



class DataBook extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '16rem' }} >
                    <Card.Body>

                        <Card.Title>{this.props.BooksB.title}</Card.Title>

                        <Card.Text>

                            {this.props.BooksB.Descrption}

                        </Card.Text>
                        <Button onClick={() => { this.props.DeleteBook(this.props.BooksB._id) }} variant="danger" >Delete</Button>

                        <Button onClick={() => { this.props.UpdateBook(this.props.BooksB) }} variant="primary" >Update</Button>
                    </Card.Body>

                </Card>
            </div>
        )
    }
}

export default DataBook