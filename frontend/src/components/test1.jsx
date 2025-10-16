import React, { useState } from "react";
import axios from "axios";

export default function ReverseArray() {
    const [input, setInput] = useState("");
    const [reversed, setReversed] = useState([]);
    const [result, setResult] = useState(null);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //
    //     try {
    //         const numbers = input.split(" ").map(Number);
    //         const res = await axios.post("http://localhost:8000/reverse", {
    //             array: numbers,
    //         });
    //         setReversed(res.data.reversed);
    //     } catch (err) {
    //         console.error("Error:", err);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const numbers = input.split(" ").map(Number);
            const res = await axios.post("http://localhost:8000/calculate", {
                array: numbers,
            });
            setResult(res.data.result);
        } catch (err) {
            console.error("Error:", err);
            setResult("Invalid input");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Reverse Array</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter numbers (e.g. 1 2 3 4)"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{ padding: "8px", width: "250px" }}
                />
                <button
                    type="submit"
                    style={{
                        marginLeft: "10px",
                        padding: "8px 16px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    result
                </button>
            </form>

            {result  && (
                <p style={{ marginTop: "20px", fontSize: "18px" }}>
                    result: {result.join(" ")}
                </p>
            )}
        </div>
    );
}
