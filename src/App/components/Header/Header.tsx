import * as React from 'react';

import './style.css';

/**
 * Шапка страницы
 */
export class Header extends React.Component {
    /**
     * Рисует DOM
     */
    public render(): React.ReactNode {
        return <header className="app__header">
            <img src="logo.png" />
        </header>
    }
}
