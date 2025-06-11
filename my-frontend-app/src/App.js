import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Logo */}
        <img src={logo} className="App-logo" alt="logo" />

        {/* Welcome Heading */}
        <h1>Welcome to My Simple Website</h1>

        {/* About Section */}
        <p>
          This is a simple React website built using basic components.
          <br />
          React lets you build user interfaces quickly and easily.
        </p>

        {/* Button */}
        <button
          onClick={() => alert('Thanks for clicking!')}
          className="App-button"
        >
          Click Me
        </button>

        {/* External Link */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About React
        </a>
      </header>
    </div>
  );
}

export default App;
