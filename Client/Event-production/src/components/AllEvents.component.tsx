
import { useContext, useState } from "react";
import { EventContext } from "../context/ProducersEvent.context";
import { NavLink } from "react-router-dom";
export const ShowAllEvents = () => {
    const { events } = useContext(EventContext);
   
    const [filterType, setFilterType] = useState("all");
    const [filterValue, setFilterValue] = useState("");

    const filteredEvents = events?.filter(event => {
        if (filterType === "all") return event;
        if (!filterValue) return event;
       
        switch (filterType) {
            case "name":
                return event.name.toLowerCase().includes(filterValue.toLowerCase()) ;
            case "description":
                return event.description.toLowerCase().includes(filterValue.toLowerCase()) ;
            case "producerID":
                return event.producerID.includes(filterValue);
            default:
                return event;
        }
    });


    return (
        <div style={styles.container}>
            <h2 style={styles.title}>רשימת אירועים</h2>
            <div style={styles.filterContainer}>
                <select value={filterType} onChange={(e) => setFilterType(e.target.value)} style={styles.filterInput}>
                    <option value="all">📋 הצג את כל האירועים</option>
                    <option value="name">🔎 סינון לפי שם</option>
                    <option value="description">🔎 סינון לפי תיאור</option>
                    <option value="producerID">🔎 סינון לפי ID מפיק</option>
                </select>

                {filterType !== "all" && (
                    <input
                        type="text"
                        placeholder="הכנס ערך לחיפוש"
                        value={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                        style={styles.filterInput}
                    />
                )}
            </div>

            {filteredEvents && filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => (
                    <div key={index} style={styles.eventItem}>
                        <NavLink to={`/eventDetails/${event.id}`} style={styles.eventLink}>
                            {event.name}
                        </NavLink>
                    </div>
                ))
            ) : (
                <p>לא נמצאו אירועים</p>
            )}
        </div>
    );
};
 const styles = {
    container: {
        backgroundColor: "#ffffff",
        padding: "30px",
        maxWidth: "800px",
        margin: "0 auto",
        borderRadius: "12px",
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
    },
    title: {
        fontSize: "28px",
        fontWeight: "700",
        marginBottom: "30px",
        textAlign: "center" as "center", 
        color: "#333",
    },
    filterContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
    },
    filterInput: {
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #ddd",
        outline: "none",
        fontSize: "16px",
        width: "60%",
    },
    eventItem: {
        padding: "15px",
        borderBottom: "1px solid #ddd",
        marginBottom: "15px",
        textAlign: "center" as "center", 
        fontSize: "18px",
        color: "#333",
        borderRadius: "8px",
        transition: "0.3s",
    },
    eventLink: {
        textDecoration: "none",
        color: "#3498db",
        fontWeight: "600",
    },
};
