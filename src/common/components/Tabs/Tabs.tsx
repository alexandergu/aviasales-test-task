import * as React from 'react';

interface TabsProps {
    /**
     * Значение активного таба
     */
    value: string;

    /**
     * Колбэк изменения активного таба
     */
    onChange: (value: string) => void
}

/**
 * Компонент табов
 */
export class Tabs extends React.Component<TabsProps, {}> {
    public render(): React.ReactNode  {
        const tabs = React.Children.map(this.props.children, (tab: React.ReactElement<any>, index) => {
            return React.cloneElement(tab, {
                key: tab.props.value,
                onChange: (value: string) => this.props.onChange(value),
                active: this.props.value === tab.props.value
            })
        });

        return (
            <div className="tabs">
                <ul className="tabs-container">
                    {tabs}
                </ul>
            </div>
        );
    }
}
