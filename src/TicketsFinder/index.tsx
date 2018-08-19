import * as React from 'react';

import './style.css';

import { Filter } from "../common/components/Filter";
import { CurrencyService } from "../common/services/CurrencyService";

import { TicketsList } from "./components/TicketsList";
import { TicketResponseError, TicketService } from "./services/TicketService";
import { FilterTickets } from "./models/FilterTickets";
import { Ticket } from "./models/Ticket";
import { CurrencyFilterItem } from "./components/CurrencyFilterItem";
import { StopsFilterItem } from "./components/StopsFilterItem";

/**
 * Свойства компонента поиска билетов
 */
export interface TicketsFinderProps {}

/**
 * Состояние компонента поиска билетов
 */
export interface TicketsFinderState {
    /**
     * Фильтр поиска
     */
    filters: FilterTickets;

    /**
     * Билеты
     */
    tickets: Ticket[];

    /**
     * Сообщение об ошибке
     */
    errorMessage: string;
}

/**
 * Поисковик билетов
 */
export class TicketsFinder extends React.Component<TicketsFinderProps, TicketsFinderState> {
    /**
     * Сервис авиа-билетов
     */
    private ticketService: TicketService = new TicketService();

    /**
     * Состояние компонента
     */
    state: TicketsFinderState = {
        filters: {
            stops: ["all"],
            currency: "RUB"
        },
        tickets: [],
        errorMessage: ''
    };

    /**
     * Конструктор
     */
    constructor(props: TicketsFinderProps) {
        super(props);

        this.handleFiltersChange = this.handleFiltersChange.bind(this);
    }

    componentDidMount() {
        this.fetchData(this.state.filters);
    }

    /**
     * Получает данные о билетах
     */
    private fetchData(filters: FilterTickets): void {
        this.ticketService.getData(filters)
            .then((tickets: Ticket[]) => {
                this.setState({
                    tickets,
                    errorMessage: ''
                });
            })
            .catch((e: TicketResponseError) => {
                this.setState({
                    tickets: [],
                    errorMessage: e.message
                })
            });
    }

    /**
     * Обрабаывает изменение фильтра поиска
     */
    handleFiltersChange(filterName: string, filterValue: any): void {
        this.setState({
            filters: {
                ...this.state.filters,
                [filterName]: filterValue
            }
        }, () => this.fetchData(this.state.filters))
    }

    /**
     * Рисует DOM
     */
    public render(): React.ReactNode {
        return (
            <div className="app__module ticket-finder">
                <div className="ticket-finder__filter">
                    <Filter onChange={this.handleFiltersChange} value={this.state.filters}>
                        <CurrencyFilterItem name="currency" currencies={CurrencyService.CURRENCIES} />
                        <StopsFilterItem name="stops" count={3} />
                    </Filter>
                </div>
                <div className="ticket-finder__content">
                    {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
                    <TicketsList tickets={this.state.tickets} />
                </div>
            </div>
        );
    }
}
