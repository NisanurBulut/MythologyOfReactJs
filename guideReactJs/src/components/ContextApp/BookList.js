import React, {Component} from 'react';
import classes from '../../containers/AppContextApi/AppContextApi.css';
class BookList extends Component {
    render() {
        return ( <div className={classes.bookList}>
            <ul>
                <li>Harry Potter</li>
                <li>Yüzüklerin Efendisi</li>
                <li>Yerdeniz Büyücüsü</li>
            </ul>
        </div> );
    }
}

export default BookList;