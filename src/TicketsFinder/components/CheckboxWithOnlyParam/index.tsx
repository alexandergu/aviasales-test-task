import * as React from 'react';

import './style.css';

import { Checkbox } from "../../../common/components/Checkbox";
import { AdditionalCheckboxParams } from "../../models/AdditionalCheckboxParams";

/**
 * Свойства компонента
 */
interface CheckboxWithOnlyProps {
    /**
     * Значение чекбокса
     */
    value: any;

    /**
     * Название чекбокса
     */
    label: string;

    /**
     * Обратный вызов на событие клика
     */
    onChange?: (value: any, active: boolean, ...customParams: any[]) => void
}

/**
 * Чекбокс с параметром "только"
 */
export class CheckboxWithOnlyParam extends React.Component<CheckboxWithOnlyProps, {}> {
    /**
     * Состояние
     */
    state = {
        /**
         * Признак наведенного указателя
         */
        hover: false
    };

    /**
     * Обратный вызов при наведении указателя
     */
    handleMouseEnter() {
        this.setState({hover: true});
    }

    /**
     * Обратный вызов при уходе указателя
     */
    handleMouseLeave() {
        this.setState({hover: false});
    }

    /**
     * Рисует DOM
     */
    public render(): React.ReactNode {
        return <div className="checkbox-with-params" onMouseEnter={() => this.handleMouseEnter()}
                    onMouseLeave={() => this.handleMouseLeave()}>
            <Checkbox {...this.props} />
            {this.state.hover &&
            <div className="checkbox-with-params__container-param_only"
                 onClick={() => this.props.onChange(this.props.value, true, {
                     value: this.props.value,
                     only: true
                 } as AdditionalCheckboxParams)}>только</div>}
        </div>
    }
}
