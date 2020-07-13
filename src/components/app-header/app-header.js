import React from 'react';

import './app-header.css'

const AppHeader = (props) => {
    return (
        <div className = "app-header flex-column">
            <h1>Repositories from Alexander Volkov's git </h1>
            <h2>Всего {props.count} репозиториев</h2>
            <hr/>
        </div>
    )
}

export default AppHeader;