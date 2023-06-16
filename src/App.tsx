import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import './App.css';

function App() {
  return (
    <>
      <Menu
        mode="vertical"
        defaultIndex={'0'}
        onSelect={(index) => {
          //alert(index);
        }}
        defaultOpenSubMenus={['3']}
      >
        <MenuItem>Cool Link</MenuItem>
        <MenuItem disabled>Cool Link</MenuItem>
        <MenuItem>Cool Link</MenuItem>
        <SubMenu title="Drop Down">
          <MenuItem>dropdown 1</MenuItem>
          <MenuItem>dropdown 1</MenuItem>
        </SubMenu>
        <MenuItem>Cool Link</MenuItem>
      </Menu>
    </>
  );
}

export default App;
