import { Event } from "../types/event";
import { useContext } from "react"; 
import { EventContext } from "../context/ProducersEvent.context";

export const AddingEvent = (props: {producerID : string}) => {
    const { addEvent } = useContext (EventContext);
    const submit = async (event: any) => {
        event.preventDefault();
        const newEvent: Event = {
            id : "",
            name : event.target.name.value,
            description: event.target.description.value,
            producerID: props.producerID,
        }
        if (event) {
            addEvent!(newEvent); 
        } 
    }
  return (
    <div style={styles.container}>
        <h4 style={styles.title}>הוספת אירוע חדש</h4>
        <form onSubmit={submit} style={styles.form}>
            <input
                type="text"
                name="name"
                placeholder="שם האירוע"
                style={styles.input}
                required
            />
            <input
                type="text"
                name="description"
                placeholder="תאור האירוע"
                style={styles.input}
                required
            />
            <button style={styles.button}>הוספה</button>
        </form>
    </div>
);
}
const styles = {
    container: {
        backgroundColor: "#f7f7f7",
        borderRadius: "10px",
        padding: "30px",
        maxWidth: "400px",
        margin: "0 auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center" as "center", 
    },
    title: {
        fontSize: "24px",
        fontWeight: "600",
        marginBottom: "20px",
    },
    form: {
        display: "flex" as "flex",  
        flexDirection: "column" as "column", 
    },
    input: {
        fontSize: "16px",
        padding: "12px",
        margin: "10px 0",
        border: "1px solid #ddd",
        borderRadius: "8px",
        outline: "none",
        transition: "0.3s",
    },
    button: {
        backgroundColor: "#3498db",
        color: "#fff",
        padding: "12px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        transition: "0.3s",
    },
};
