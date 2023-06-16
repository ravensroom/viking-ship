import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import './App.css';

function App() {
  return (
    <>
      <Menu defaultIndex={0}>
        <MenuItem>Cool Link</MenuItem>
        <MenuItem>Cool Link</MenuItem>
        <MenuItem>Cool Link</MenuItem>
        <MenuItem>Cool Link</MenuItem>
      </Menu>
    </>
  );
}

export default App;
