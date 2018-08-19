import * as React from 'react';

import './style.css';

import { Ticket } from "../../models/Ticket";

import { TicketItem } from "../TicketItem";

/**
 * Свойства компонента список авиабилетов
 */
export interface TicketsListProps {
    /**
     * Коллекция авиабилетов
     */
    tickets: Ticket[]
}

/**
 * Список авиабилетов
 */
export class TicketsList extends React.Component<TicketsListProps, {}> {
    /**
     * Рисует DOM
     */
    public render(): React.ReactNode {
        return (
            <div className="ticket-list">
                {this.props.tickets.map((ticket: Ticket, index: number) => {
                    return <TicketItem
                        key={index}
                        ticket={ticket}
                    />
                })}
            </div>
        );
    }
}
