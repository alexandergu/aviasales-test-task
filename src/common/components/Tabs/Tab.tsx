import * as React from 'react';

/**
 * Свойства таб-компонента
 */
interface TabProps {
    /**
     * Название таба
     */
    label: string;

    /**
     * Активность таба
     */
    active?: boolean;

    /**
     * Значение таба
     */
    value: string;

    /**
     * Обратный колбэк при выборе таба
     */
    onChange?: (value: string) => void
}

/**
 * Таб компонент
 */
export class Tab extends React.Component<TabProps, {}> {
    public render(): React.ReactNode {
        let className = "tab";

        if (this.props.active) {
            className += " tab-active"
        }

        return (
            <li className={className} onClick={() => this.props.onChange(this.props.value)}>{this.props.label}</li>
        );
    }
}
