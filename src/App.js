import logo from "./images/twilioQuest.png";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <button
                    onClick={() => {
                        window.parent.postMessage({ hide: true }, "*");
                    }}
                >
                    X
                </button>
                <img src={logo} className="App-logo" alt="logo" />
                <p id="welcome">
                    Welcome to <strong>DjangoCon</strong>!
                </p>
                <p id="game">Play our game to win Swag!</p>
                <p id="enter">
                    Enter through the <strong>left</strong> (not castle)
                </p>
            </header>
        </div>
    );
}

export default App;
