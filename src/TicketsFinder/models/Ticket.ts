/**
 * Авиабилет
 */
export interface Ticket {
    /**
     * Аэропорт вылета
     */
    origin: string;

    /**
     * Город вылета
     */
    originName: string;

    /**
     * Аэропорт прибытия
     */
    destination: string;

    /**
     * Город прибытия
     */
    destinationName: string;

    /**
     * Дата прибытия
     */
    departureDate: string;

    /**
     * Время прибытия
     */
    departureTime: string;

    /**
     * Дата вылета
     */
    arrivalDate: string;

    /**
     * Время вылета
     */
    arrivalTime: string;

    /**
     * Авиакомпания
     */
    carrier: string;

    /**
     * Валюта
     */
    currency: string;

    /**
     * Количество остановок
     */
    stops: number;

    /**
     * Цена
     */
    price: number;
}
