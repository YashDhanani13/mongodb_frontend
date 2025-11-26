import { useState } from "react";
import "./Login.css";

function Login() {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login data:", form);

        // later:
        // axios.post("/api/auth/login", form)
    };

    return (
        <div style={styles.container}>
            <h2>Login</h2>

            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="email"
                    placeholder="Email"
                    style={styles.input}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Password"
                    style={styles.input}
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <button style={styles.button}>Login</button>
            </form>

            <p>
                Don't have an account? <a href="/signup">Sign Up</a>
            </p>
        </div>
    );
}

const styles = {
    container: { width: "350px", margin: "50px auto", textAlign: "center" },
    form: { display: "flex", flexDirection: "column", gap: "10px" },
    input: { padding: "10px", borderRadius: "6px", border: "1px solid #ccc" },
    button: {
        padding: "10px",
        backgroundColor: "#000",
        color: "white",
        border: "none",
        borderRadius: "6px",
    },
};

export default Login;
