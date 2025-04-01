import { useContext } from "react";
import { NavLink } from "react-router";
import { EventContext } from "../context/ProducersEvent.context";
import { AddingEvent } from "./AddingEvent.components";
import { DeleteEvent } from "./DeleteEvent.components";

export const ProducersEventList = (props:{id:string}) => {
    const { events } = useContext(EventContext);
    console.log(props.id);
    
    return (
        <div>
            <h2>Events List</h2>            
            {events && events.length > 0 ? (
                events.map((event) => (
                  event.producerID === props.id && <div  style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
                        <NavLink to={'/events/' +event.id}> {event.name} </NavLink>
                        <DeleteEvent EventId={event.id.toString()}/>
                    </div>
                ))
            ) : (
                <p>No events found</p>
            )}
            <AddingEvent producerID={props.id}></AddingEvent>
        </div>
    );

}
