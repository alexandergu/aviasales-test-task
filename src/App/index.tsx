import * as React from 'react';
import * as moment from 'moment';

import './style.css';

import { Header } from "./components/Header/Header";

import { TicketsFinder } from "../TicketsFinder";

moment.locale('ru');

/**
 * Свойства главного компонента приложения
 */
export interface AppProps {}

/**
 * Главный компонент приложения
 */
export class App extends React.Component<AppProps, {}> {
    /**
     * Рисует DOM
     */
    public render(): React.ReactNode {
        return (
            <div className="app">
                <Header />
                <TicketsFinder />
            </div>
        );
    }
}
