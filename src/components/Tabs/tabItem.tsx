import React, { FC, ReactNode } from 'react';

export interface TabItemProps {
  label: string | React.ReactElement;
  disabled?: boolean;
  children?: ReactNode;
}

export const TabItem: FC<TabItemProps> = ({ children }) => {
  return <div className="viking-tab-panel">{children}</div>;
};

export default TabItem;
