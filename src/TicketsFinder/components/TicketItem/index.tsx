import * as React from 'react';
import * as moment from 'moment';

import './style.css';

import { buildAirlineLogoURI } from "../../../common/utils/LogoURIBuilder";
import { declineOfNumber, formatNumber, formatPrice } from "../../../common/utils/Formatters";

import { Ticket } from "../../models/Ticket";

/**
 * Свойства компонента авиабилета
 */
export interface TicketItemProps {
    /**
     * Авиабилет
     */
    ticket: Ticket
}

/**
 * Авиабилет
 */
export class TicketItem extends React.Component<TicketItemProps, {}> {
    /**
     * Рисует DOM
     */
    public render(): React.ReactNode {
        return (
            <div className="ticket">
                <div className="ticket__ticket-container">
                    <div className="ticket__ticket-row">
                        <div className="ticket__col-buy">
                            <div className="ticket__airline-logo">
                                <img
                                    className="ticket__airline-logo__img"
                                    src={buildAirlineLogoURI(this.props.ticket.carrier)}
                                />
                            </div>
                            <button className="ticket__buy-button">
                                <span className="ticket__buy-button__title">Купить</span>
                                <span className="ticket__buy-button__price">
                                    <span>за </span>
                                    <span className="ticket__buy-button__price__number">
                                        {formatPrice(
                                            formatNumber(this.props.ticket.price),
                                            this.props.ticket.currency
                                        )}
                                    </span>
                                </span>
                            </button>
                        </div>
                        <div className="ticket__col-content">
                            <div className="ticket-segments">
                                <div className="ticket-segments__origin">
                                    <div className="ticket-segments__time">
                                        {this.props.ticket.arrivalTime}
                                    </div>
                                    <div className="ticket-segments__city">
                                        {`${this.props.ticket.origin}, ${this.props.ticket.originName}`}
                                    </div>
                                    <div className="ticket-segments__date">
                                        {moment(
                                            this.props.ticket.arrivalDate,
                                            'DD.MM.YY'
                                        ).format('D MMMM YYYY, dd')}
                                    </div>
                                </div>
                                <div className="ticket-segments__route-path">
                                    <div className="ticket-segments__route-path__count-stops">
                                        {this.props.ticket.stops > 0 &&
                                        `${this.props.ticket.stops} ${
                                            declineOfNumber(
                                                this.props.ticket.stops,
                                                ['пересадка', 'пересадки', 'пересадок']
                                            )}`
                                        }
                                    </div>
                                    <div className="ticket-segments__route-path__connector" />
                                </div>
                                <div className="ticket-segments__destination">
                                    <div className="ticket-segments__time">
                                        {this.props.ticket.departureTime}
                                    </div>
                                    <div className="ticket-segments__city">
                                        {`${this.props.ticket.destinationName}, ${this.props.ticket.destination}`}
                                    </div>
                                    <div className="ticket-segments__date">
                                        {moment(
                                            this.props.ticket.departureDate,
                                            'DD.MM.YY'
                                        ).format('D MMMM YYYY, dd')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
