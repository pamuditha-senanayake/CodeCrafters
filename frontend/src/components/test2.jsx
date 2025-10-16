import React, { useState } from "react";
import axios from "axios";

export default function DynamicArrayApp() {
    const [n, setN] = useState(2);
    const [queriesText, setQueriesText] = useState(
        "1 0 5\n1 1 7\n1 0 3\n2 1 0\n2 1 1"
    );
    const [results, setResults] = useState([]);

    // Convert the raw text into array of arrays
    const parseQueries = (text) => {
        return text
            .split("\n")
            .map((line) => line.trim().split(" ").map(Number));
    };

    const handleSubmit = async () => {
        const queries = parseQueries(queriesText);

        try {
            const res = await axios.post("http://localhost:8000/dynamic_array", {
                n: Number(n),
                queries,
            });

            setResults(res.data.result);
        } catch (err) {
            console.error("Error:", err);
        }
    };

    return (
        <div>
            <h2>Dynamic Array HackerRank</h2>

            <div>
                <label>
                    Number of arrays (n):{" "}
                    <input
                        type="number"
                        value={n}
                        onChange={(e) => setN(e.target.value)}
                    />
                </label>
            </div>

            <div>
                <label>
                    Queries (one per line, e.g. 1 0 5):
                    <br />
                    <textarea
                        rows={8}
                        cols={30}
                        value={queriesText}
                        onChange={(e) => setQueriesText(e.target.value)}
                    />
                </label>
            </div>

            <button onClick={handleSubmit}>Submit</button>

            <div>
                <h3>Results:</h3>
                <ul>
                    {results.map((r, idx) => (
                        <li key={idx}>{r}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
