import { useState } from "react"

function App() {
    // useState stores data that can change.
    // When 'message' updates, React re-renders the UI automatically.
    const [message, setMessage] = useState("Not connected yet")

    // async/await lets us wait for the backend response
    // without freezing the page — same concept as in C#
    async function testBackend() {
        const response = await fetch("http://127.0.0.1:8000/hello")
        const data = await response.json()
        setMessage(data.message)
    }

    return (
        <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
            <h1>AI Study Tool</h1>
            <p>{message}</p>
            <button onClick={testBackend}>Test backend connection</button>
        </div>
    )
}

export default App