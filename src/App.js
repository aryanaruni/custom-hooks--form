import logo from './logo.svg';
import UseInputHooks from './UseInputHooks';
import './App.css';

function App({ onNewColor = f => f }) {
  const [titleProps, resetTitle] = UseInputHooks("");
  const [colorProps, resetColor] = UseInputHooks("#000000");
  const submit = event => {
    event.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <div className="App">

      <form onSubmit={submit}>
        <input
          {...titleProps}
          type="text"
          placeholder="color title..."
          required
        />
        <input {...colorProps} type="color" required />
        <button>ADD</button>
      </form>    </div>
  );
}

export default App;
