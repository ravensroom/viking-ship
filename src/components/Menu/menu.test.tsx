import React from 'react';
import {
  fireEvent,
  render,
  RenderResult,
  cleanup,
} from '@testing-library/react';
import Menu, { MenuProps } from './menu';
import MenuItem from './menuItem';

const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test',
};

const testVerticalProps: MenuProps = {
  defaultIndex: 0,
  mode: 'vertical',
};

const generalMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={0}>active</MenuItem>
      <MenuItem index={1} disabled>
        disabled
      </MenuItem>
      <MenuItem index={2}>third</MenuItem>
      <MenuItem index={3}>Cool Link</MenuItem>
    </Menu>
  );
};

let wrapper: RenderResult,
  menuElement: HTMLElement,
  disabledElement: HTMLElement,
  activeElement: HTMLElement;

describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(generalMenu(testProps));
    menuElement = wrapper.getByTestId('test-menu');
    activeElement = wrapper.getByText('active');
    disabledElement = wrapper.getByText('disabled');
  });
  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('viking-menu test');
    expect(menuElement.getElementsByTagName('li').length).toEqual(4);
    expect(activeElement).toHaveClass('menu-item is-active');
    expect(disabledElement).toHaveClass('menu-item is-disabled');
  });
  it('click item should change active status and use the right callback', () => {
    const thirdItem = wrapper.getByText('third');
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass('is-active');
    expect(activeElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).toHaveBeenCalledWith(2);
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
  });
  it('should render vertical mode when set so', () => {
    cleanup();
    wrapper = render(generalMenu(testVerticalProps));
    menuElement = wrapper.getByTestId('test-menu');
    expect(menuElement).toHaveClass('menu-vertical');
  });
});
