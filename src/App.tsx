import Tabs from './components/Tabs/tabs';
import TabItem from './components/Tabs/tabItem';
import './App.css';

function App() {
  return (
    <>
      <Tabs defaultIndex={0} type="card" onSelect={() => {}}>
        <TabItem label="Tab 1">This is the my content1</TabItem>
        <TabItem label="Tab 2" disabled>
          This is the my content2
        </TabItem>
        <TabItem label="Tab 3">This is the my content3</TabItem>
        <TabItem label="Tab 4">This is the my content4</TabItem>
      </Tabs>
    </>
  );
}

export default App;
