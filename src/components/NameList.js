import React, { Component } from 'react';

import './Register.css';

class NameList extends Component {
    render() {
        return (
            <div className="name-list">
                <p>Ilmoittautuneet</p>
                <ul>
                    {
                        this.props.names.map(el => <li>{el}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default NameList;