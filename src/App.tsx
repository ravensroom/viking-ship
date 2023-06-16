import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import './App.css';

function App() {
  return (
    <>
      <Menu mode="vertical" defaultIndex={0} onSelect={(index) => alert(index)}>
        <MenuItem index={0}>Cool Link</MenuItem>
        <MenuItem index={1} disabled>
          Cool Link
        </MenuItem>
        <MenuItem index={2}>Cool Link</MenuItem>
        <MenuItem index={3}>Cool Link</MenuItem>
      </Menu>
    </>
  );
}

export default App;
