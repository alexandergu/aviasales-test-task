/**
 * Билет как ответ от сервера
 */
export interface TicketItemResponse {
    /**
     * Дата вылета
     */
    arrival_date: string;

    /**
     * Время вылета
     */
    arrival_time: string;

    /**
     * Авиакомпания
     */
    carrier: string;

    /**
     * Дата прибытия
     */
    departure_date: string;

    /**
     * Время прибытия
     */
    departure_time: string;

    /**
     * Аэропорт прибытия
     */
    destination: string;

    /**
     * Город прибытия
     */
    destination_name: string;
    /**
     * Аэропорт вылета
     */
    origin: string;

    /**
     * Город вылета
     */
    origin_name: string;

    /**
     * Цена
     */
    price: number;

    /**
     * Количество остановок
     */
    stops: number;
}
