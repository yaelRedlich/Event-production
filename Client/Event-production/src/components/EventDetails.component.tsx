import { useContext, useState } from "react";

import { EventContext } from "../context/ProducersEvent.context";
import { useParams } from "react-router-dom"; 
import {ProducerDetailsForUser} from './producerDetailsForUser.components';
export const EventDetailsComponent = () => { 
    const { events  } = useContext(EventContext);
    const [show , setShowProducer] = useState(false);
    const { id } = useParams();
    const event = events?.find((e) => e.id === id);
    if (!event) return <p>Loading event data...</p>;
    return (
        <div style={styles.container}>
            <h3 style={styles.title}>{event.name}</h3>
            <p style={styles.paragraph}>{event.description}</p>
            <p style={styles.paragraph}>{event.producerID}</p>

            {show && <ProducerDetailsForUser id={event.producerID.toString()} />}

            <button
                style={styles.button}
                onClick={() => setShowProducer(!show)}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#2980b9"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#3498db"}
            >
                הצגת פרטי מפיקה
            </button>
        </div>
    );
}
const styles = {
    container: {
        backgroundColor: "#ffffff",
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
        borderRadius: "12px",
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
    },
    title: {
        fontSize: "28px",
        fontWeight: "700",
        marginBottom: "20px",
        color: "#333",
    },
    paragraph: {
        fontSize: "18px",
        color: "#333",
        lineHeight: "1.6",
    },
    button: {
        backgroundColor: "#3498db",
        color: "#fff",
        padding: "12px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "600",
        marginTop: "20px",
        transition: "0.3s",
    },
    buttonHover: {
        backgroundColor: "#2980b9",
    },
};

