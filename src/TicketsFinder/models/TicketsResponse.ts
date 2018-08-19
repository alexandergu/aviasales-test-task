import { TicketItemResponse } from "./TicketItemResponse";

/**
 * Билеты как ответ от сервера
 */
export interface TicketsResponse {
    tickets: TicketItemResponse[];
}