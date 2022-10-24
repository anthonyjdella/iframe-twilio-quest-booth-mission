import logo from "./images/scream.png";
import "./Halloween.css";

function Halloween() {
    return (
        <div className="Halloween">
            <header className="Halloween-header">
                <button
                    onClick={() => {
                        window.parent.postMessage({ hide: true }, "*");
                    }}
                >
                    X
                </button>
                <img src={logo} className="App-logo" alt="logo" />
                <p id="welcome">Do you like scary movies?</p>
                <p id="try">
                    <strong>
                        Try a Halloween project & prepare to be scared!
                    </strong>
                </p>
                <p id="text">Text: (940) 394-8137</p>
            </header>
        </div>
    );
}

export default Halloween;
