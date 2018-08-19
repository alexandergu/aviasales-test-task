import { CurrencyBase } from "../../common/models/CurrencyBase";

import { StopsFilter } from "./StopsFilter";

/**
 * Фильтр авиабилетов
 */
export interface FilterTickets {
    /**
     * Фильтр по валюте
     */
    currency: CurrencyBase;

    /**
     * Фильтр по количеству остановок
     */
    stops: StopsFilter;
}
