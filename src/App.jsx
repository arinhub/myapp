import React from 'react';
import { connect } from 'react-redux';
// import { addItems } from './actions';
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
const App = ({dispatch }) => {
    return (
        <div>
            <Header />
            <ItemsList />
        </div>
    )
}

export default connect()(App)