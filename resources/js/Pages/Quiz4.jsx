import { useEffect, useState } from "react";

export default function Quiz4() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("/api/movies")
            .then((res) => res.json())
            .then((data) => setMovies(data));
    }, []);

    return (
        <div
            style={{
                padding: "40px",
                backgroundColor: "#f4f6f9",
                minHeight: "100vh",
                fontFamily: "Arial"
            }}
        >
            <h1 style={{ textAlign: "center", marginBottom: "25px" }}>
                Movie List
            </h1>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    background: "#fff",
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
                }}
            >
                <thead style={{ background: "#1f2937", color: "#fff" }}>
                    <tr>
                        <th style={th}>ID</th>
                        <th style={th}>Title</th>
                        <th style={th}>Genre</th>
                        <th style={th}>Director</th>
                        <th style={th}>Release Year</th>
                        <th style={th}>Rating</th>
                    </tr>
                </thead>

                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td style={td}>{movie.id}</td>
                            <td style={td}>{movie.title}</td>
                            <td style={td}>{movie.genre}</td>
                            <td style={td}>{movie.director}</td>
                            <td style={td}>{movie.release_year}</td>
                            <td style={td}>{movie.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const th = {
    border: "1px solid #ddd",
    padding: "12px"
};

const td = {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "center"
};