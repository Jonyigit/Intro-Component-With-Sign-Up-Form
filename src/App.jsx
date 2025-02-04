import "./styles/App.css";
import { Form } from "./components/form";

function App() {
    return (
        <>
            <section className="intro-component">
                <div className="container">
                    <div className="content">
                        <h1>Learn to code by watching others</h1>
                        <p>
                            See how experienced developers solve problems in
                            real-time. Watching scripted tutorials is great, but
                            understanding how developers think is invaluable.
                        </p>
                    </div>
                    <Form />
                </div>
            </section>
        </>
    );
}

export default App;
