import * as React from 'react';

import { FilterItem } from "../../../common/models/FilterItem";
import { CheckboxList } from "../../../common/components/CheckboxList";
import { Checkbox } from "../../../common/components/Checkbox";
import { declineOfNumber } from "../../../common/utils/Formatters";
import { AdditionalCheckboxParams } from "../../models/AdditionalCheckboxParams";

import { CheckboxWithOnlyParam } from "../CheckboxWithOnlyParam";

/**
 * Свойства компонента фильтра количество пересадок
 */
export interface ConnectionsFilterProps {
    /**
     * Количество пересадок
     */
    count?: number
}

const defaultProps = {
    value: [] as string[]
};

/**
 * Фильтр по количеству пересадок
 */
export class StopsFilterItem extends React.Component<ConnectionsFilterProps & FilterItem> {
    /**
     * Первоначальные значения
     */
    static defaultProps = defaultProps;

    /**
     * Возвращает признак установленного значения "все"
     */
    private isAllActive(value?: string[]): boolean {
        if (value) {
            return value.indexOf('all') > -1;
        }

        return this.props.value.indexOf('all') > -1;
    }

    /**
     * Колбэк при изменении значения фильтра
     */
    private handleChange(values: string[], additionalParams: AdditionalCheckboxParams): void {
        if (additionalParams && additionalParams.only) {
            this.props.onChange([additionalParams.value]);

            return;
        }

        if (this.isAllActive()) {
            if (values.length > 1 && this.isAllActive(values)) {
                this.props.onChange(values.filter((value: string) => value !== 'all'));
            }
        } else {
            if (this.isAllActive(values) || values.length === this.props.count + 1 || !values.length) {
                this.props.onChange(["all", "0", ...Array(this.props.count).fill(true).map((a, b) => String(b + 1))]);
            } else {
                this.props.onChange(values);
            }
        }
    }

    /**
     * Рисует DOM
     */
    public render(): React.ReactNode {
        return (
            <div className="filters__item">
                <div className="filters__item__header">Количество пересадок</div>
                <div className="filters__item__content">
                    <CheckboxList value={this.props.value} onChange={(values: string[], additionalParams: any) => {
                        this.handleChange(values, additionalParams);
                    }}>
                        <Checkbox label="Все" value="all" />
                        <CheckboxWithOnlyParam label="Без пересадок" value="0" />
                        {Array(this.props.count).fill(true).map((num, index) => {
                            return <CheckboxWithOnlyParam
                                key={index}
                                label={
                                    `${index + 1} ${declineOfNumber(
                                        index + 1,
                                        ['пересадка', 'пересадки', 'пересадки']
                                    )}`
                                }
                                value={String(index+1)} />
                        })}
                    </CheckboxList>
                </div>
            </div>
        );
    }
}
