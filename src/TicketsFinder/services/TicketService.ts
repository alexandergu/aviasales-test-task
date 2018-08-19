import { CurrencyService } from "../../common/services/CurrencyService";

import { FilterTickets } from "../models/FilterTickets";
import { Ticket } from "../models/Ticket";
import { TicketItemResponse } from "../models/TicketItemResponse";
import { TicketsResponse } from "../models/TicketsResponse";

export interface TicketResponseError {
    message?: string;
}

/**
 * Сервис авиа-билетов
 */
export class TicketService {
    /**
     * Возвращает авиа-билеты удовлетворяющие запросу
     */
    public getData(filters?: FilterTickets): Promise<Ticket[]> {
        return fetch('/tickets.json')
            .then(response => response.json())
            .then((response: TicketsResponse) => {
                if (filters.stops.length && filters.stops.indexOf('all') === -1) {
                    const stopsArr = filters.stops.map(stops => +stops);

                    return response.tickets.filter((ticket: TicketItemResponse) => stopsArr.indexOf(ticket.stops) > -1);
                }

                return response.tickets;
            }).then((tickets: TicketItemResponse[]) => {
                return tickets.sort((a: TicketItemResponse, b: TicketItemResponse) => a.price - b.price)
            }).then((tickets: TicketItemResponse[]) => {
                return tickets.map<Ticket>((ticket: TicketItemResponse) => ({
                    arrivalDate: ticket.arrival_date,
                    arrivalTime: ticket.arrival_time,
                    carrier: ticket.carrier,
                    departureDate: ticket.departure_date,
                    departureTime: ticket.departure_time,
                    destination: ticket.destination,
                    destinationName: ticket.destination_name,
                    origin: ticket.origin,
                    originName: ticket.origin_name,
                    price: CurrencyService.getConvertedPrice(ticket.price, filters.currency),
                    currency: filters.currency,
                    stops: ticket.stops
                }));
            }).catch(() => {
                throw {
                    message: 'При загрузке билетов произошла ошибка.'
                } as TicketResponseError;
            });
    }
}
