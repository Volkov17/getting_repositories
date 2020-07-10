import React from 'react';

import './app-header.css'

const AppHeader = () => {
    return (
        <div className = "app-header d-flex">
            <h1>Repositories from Alexander Volkov's git </h1>
            <h2>Всего {} репозиториев</h2>
        </div>
    )
}

export default AppHeader;