import Button, { ButtonSize, ButtonType } from './components/Button/button';
import './App.css';

function App() {
  return (
    <>
      <Button onClick={() => alert(123)} size={ButtonSize.Large}>
        hello
      </Button>
      <Button size={ButtonSize.Small} disabled>
        hello
      </Button>
      <Button size={ButtonSize.Large} btnType={ButtonType.Primary}>
        hello
      </Button>
      <Button size={ButtonSize.Small} btnType={ButtonType.Danger}>
        hello
      </Button>
      <Button
        disabled
        size={ButtonSize.Large}
        btnType={ButtonType.Link}
        href="/"
      >
        hello
      </Button>
      <Button
        size={ButtonSize.Small}
        btnType={ButtonType.Link}
        href="/"
        target="_blank"
      >
        hello
      </Button>
    </>
  );
}

export default App;
