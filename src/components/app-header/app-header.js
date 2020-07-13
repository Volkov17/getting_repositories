import React from 'react';

import './app-header.css'

const AppHeader = (props) => {
    return (
        <div className = "">
            <h1>Repositories from Alexander Volkov's git </h1>
            <h2>Всего {props.count} репозиториев</h2>
        </div>
    )
}

export default AppHeader;