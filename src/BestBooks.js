import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';

import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

import './BestBooks.css';

import Books from './components/DataBook'

import { withAuth0 } from '@auth0/auth0-react';

import UpdateBook from './components/UpdateBook'

import NewBookForm from './components/NewBookForm'



class FavoriteBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            EmailID: '',
            books: [],
            updateBookInfo: {},
            showUpdated: false
        }


    }

    componentMount = async () => {
        let email = this.props.auth0.user.email

        console.log(' in componentMount');

        let BookUrl = `${process.env.REACT_APP_SERVER}/books?email=${email}`

        let DataBook = await axios.get(BookUrl);

        this.setState({
            books: DataBook.data,

            EmailID: email
        })


    }


    addBook = async (event) => {
        event.preventDefault()

        let bookInfo = {
            email: this.state.EmailID,

            title: event.target.title.value,

            Descrption: event.target.Descrption.value,

            status: event.target.status.value
        }
        let newBookUrl = await axios.post(`${process.env.REACT_APP_SERVER}/addBooks`, bookInfo)
        console.log(newBookUrl);


        this.setState({
            books: newBookUrl.data
        })
    }

    deleteBook = async (bookID) => {

        let deleteBookUrl = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteBooks?bookID=${bookID}&email=${this.state.EmailID}`)

        this.setState({
            books: deleteBookUrl.data
        })
    }

    updateBook = async (bookInfo) => {
        console.log(bookInfo);

        await this.setState({
            showUpdated: true,
            updateBookInfo: bookInfo
        })
    }

    upBooksForm = async (event) => {
        event.preventDefault();

        console.log('bookID', this.state.updateBookInfo._id)

        let bookInfo = {

            title: event.target.title.value,

            Descrption: event.target.Descrption.value,

            status: event.target.status.value,

            bookID: this.state.updateBookInfo._id,

            email: this.state.EmailID
        }

        let newBookUrl = await axios.put(`${process.env.REACT_APP_SERVER}/updateBook`, bookInfo)

        this.setState({
            books: newBookUrl.data
        })
    }


    render() {
        return (
            <>
                <Jumbotron>
                    <h1>My  Favorite Books</h1>

                    <p>
                        This is  collection of  favorite books
                    </p>


                </Jumbotron>

                <NewBookForm addBookFunction={this.addBook}

                />
                <div style={{ flexDirection: "row", display: "flex" }} >


                    {this.state.books.map((book, i) => {
                        return (
                            < div key={i} >

                                <Books key={i} BooksB={book}
                                    DeleteBook={this.deleteBook}

                                    UpdateBook={this.updateBook} />

                            </div>

                        )
                    })}
                </div>



                {this.state.showUpdated &&
                    <UpdateBook

                        bookInformation={this.state.updateBookInfo}

                        upBooksForm={this.upBooksForm}
                    />
                }
            </>

        )
    }

}

export default withAuth0(FavoriteBook);