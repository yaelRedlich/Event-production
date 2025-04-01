import { useContext, useState } from "react";
import { Event } from "../types/event";
import { EditEvent } from "./showAndEditEvent.components";
import { EventContext } from "../context/ProducersEvent.context";
import { useParams } from "react-router-dom"; 

export const EventComponent = () => { 
    const { events , updateEvent } = useContext(EventContext);
    const [edit , setEdit] = useState(false);
    const { id } = useParams();
    const event = events?.find((e) => e.id === id);
    if (!event) return <p>Loading event data...</p>;

    const saveEvent = (updatedEvent: Event) => {
        updateEvent?.(event, updatedEvent);
        setEdit(false);
    }
   
    return (
        <div style={containerStyle}>
            <h3 style={titleStyle}>{event!.name}</h3>
            <p style={textStyle}>{event!.description}</p>
            { edit && <EditEvent event  = {event!} saveEvent = {saveEvent} /> }
            <button 
                    onClick={() => setEdit(!edit)} 
                    style={buttonStyle}>
                    ✏️ Edit Event
                </button>
        </div>
    );
}
const containerStyle = {
    padding: "20px", 
    borderRadius: "10px", 
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
};

const titleStyle = {
    fontSize: "24px", 
    color: "#333"
};

const textStyle = {
    fontSize: "16px", 
    color: "#555"
};

const buttonStyle = {
    backgroundColor: "#007bff", 
    color: "white", 
    padding: "8px 15px", 
    borderRadius: "5px", 
    border: "none", 
    cursor: "pointer", 
    transition: "0.3s"
};


