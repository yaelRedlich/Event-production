import { useContext } from "react";
import { NavLink } from "react-router";
import { EventContext } from "../context/ProducersEvent.context";
import { AddingEvent } from "./AddingEvent.components";
import { DeleteEvent } from "./DeleteEvent.components";

export const ProducersEventList = (props:{id:string}) => {
    const { events } = useContext(EventContext);
    console.log(props.id);
    return (
        <div style={containerStyle}>
            <h2 style={{ fontSize: "24px", color: "#333" }}>Events List</h2>
            {events && events.length > 0 ? (
                events.map((event) => (
                    event.producerID === props.id && (
                        <div style={eventContainerStyle}>
                            <NavLink to={`/events/${event.id}`} style={linkStyle}>
                                {event.name}
                            </NavLink>
                            <DeleteEvent EventId={event.id.toString()} />
                        </div>
                    )
                ))
            ) : (
                <p>No events found</p>
            )}
            <AddingEvent producerID={props.id} />
        </div>
    );
}

const containerStyle = {
    padding: "20px", 
    maxWidth: "1200px", 
    margin: "0 auto"
};

const eventContainerStyle = {
    border: "1px solid #ddd", 
    padding: "15px", 
    margin: "15px 0", 
    borderRadius: "8px", 
    backgroundColor: "#fff", 
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
};

const linkStyle = {
    fontSize: "20px", 
    fontWeight: "bold", 
    color: "#007bff", 
    textDecoration: "none"
};