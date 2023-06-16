import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import './App.css';

function App() {
  return (
    <>
      <Menu mode="vertical" defaultIndex={0} onSelect={(index) => alert(index)}>
        <MenuItem>Cool Link</MenuItem>
        <MenuItem disabled>Cool Link</MenuItem>
        <MenuItem>Cool Link</MenuItem>
        <MenuItem>Cool Link</MenuItem>
      </Menu>
    </>
  );
}

export default App;
