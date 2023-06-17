import React, { FunctionComponentElement, useState } from 'react';
import classNames from 'classnames';
import { TabItemProps } from './tabItem';

export interface TabsProps {
  defaultIndex?: number;
  onSelect?: (selectedIndex: number) => void;
  children?: React.ReactNode;
  className?: string;
  type?: 'line' | 'card';
}

const Tabs: React.FC<TabsProps> = ({
  defaultIndex,
  onSelect,
  children,
  className,
  type,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const handleClick = (index: number, disabled: boolean | undefined) => {
    if (!disabled) {
      setActiveIndex(index);
      if (onSelect) {
        onSelect(index);
      }
    }
  };
  const navClass = classNames('viking-tabs-nav', {
    'nav-line': type === 'line',
    'nav-card': type === 'card',
  });
  const renderedNavLinks = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<TabItemProps>;
      const { label, disabled } = childElement.props;
      const classes = classNames('viking-tabs-nav-item', {
        'is-active': activeIndex === index,
        disabled: disabled,
      });
      return (
        <li
          className={classes}
          key={`nav-item-${index}`}
          onClick={() => {
            handleClick(index, disabled);
          }}
        >
          {label}
        </li>
      );
    });
  };
  const renderContent = () => {
    return React.Children.map(children, (child, index) => {
      if (index === activeIndex) {
        return child;
      }
    });
  };
  return (
    <div className={`viking-tabs ${className}`}>
      <ul className={navClass}>{renderedNavLinks()}</ul>
      <div className="viking-tabs-content">{renderContent()}</div>
    </div>
  );
};

Tabs.defaultProps = {
  defaultIndex: 0,
  type: 'line',
};

export default Tabs;
