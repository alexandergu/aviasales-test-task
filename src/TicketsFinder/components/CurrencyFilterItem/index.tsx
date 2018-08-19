import * as React from 'react';

import { Tab, Tabs } from "../../../common/components/Tabs";
import { Currency } from "../../../common/models/Currency";
import { FilterItem } from "../../../common/models/FilterItem";

/**
 * Свойства компонента фильтр по валюте
 */
export interface CurrencyFilterProps {
    /**
     * Валюты
     */
    currencies?: Currency[]
}

/**
 * Фильтр по валюте
 */
export class CurrencyFilterItem extends React.Component<CurrencyFilterProps & FilterItem> {
    /**
     * Рисует DOM
     */
    public render(): React.ReactNode {
        return (
            <div className="filters__item">
                <div className="filters__item__header">Валюта</div>
                <div className="filters__item__content">
                    <div style={{padding: '0 15px'}}>
                        <Tabs value={this.props.value} onChange={(value: string) => this.props.onChange(value)}>
                            { this.props.currencies.map((type, index) => <Tab key={index} value={type.base} label={type.label} />) }
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
