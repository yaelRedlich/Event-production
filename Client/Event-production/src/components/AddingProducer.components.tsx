    import { useHttp } from "../custom-hooks/useHttp";
    import { Producer } from "../types/producer";
    import { useNavigate } from "react-router-dom";
    export const AddingProducer = () => {
        const { request } = useHttp<Producer>('', 'post'); 
        const navigate = useNavigate();
        const submit = async (event: any) => {
            event.preventDefault();
            const newProducer: Producer = {
                name: event.target.name.value,
                description: event.target.description.value,
                phone: event.target.phone.value,
                email: event.target.email.value,
            }
            if (newProducer) {
            await request("/producers", "post", newProducer); 
            navigate(`/producers/${newProducer.email}`);

            }
        }

    return (
        <div style={styles.container}>
            <h4 style={styles.title}>הוספת מפיקה</h4>
            <form onSubmit={submit}>
                <input type="text" name="name" placeholder="שם" style={styles.input} required />
                <input type="email" name="email" placeholder="אימייל" style={styles.input} required />
                <input type="tel" name="phone" placeholder="טלפון" style={styles.input} required />
                <input type="text" name="description" placeholder="תיאור" style={styles.input} required />
                <button style={styles.button} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#2980b9"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#3498db"}>
                    הוספה
                </button>
            </form>
        </div>
    );
    }

    const styles = {
        container: {
            backgroundColor: "#f4f4f9",
            borderRadius: "12px",
            padding: "40px",
            maxWidth: "450px",
            margin: "0 auto",
            boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
            textAlign: "center"  as "center", 
            fontFamily: "'Helvetica Neue', sans-serif",

        },
        title: {
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "30px",
            color: "#333",
        },
        input: {
            fontSize: "16px",
            padding: "14px",
            margin: "15px 0",
            border: "1px solid #ddd",
            borderRadius: "8px",
            outline: "none",
            width: "100%",
            backgroundColor: "#ffffff",
            transition: "all 0.3s ease", 
        },
        button: {
            backgroundColor: "#3498db",
            color: "#fff",
            padding: "16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "600",
            width: "100%",
            transition: "all 0.3s ease",  
        },
        buttonHover: {
            backgroundColor: "#2980b9",
        },
    };
