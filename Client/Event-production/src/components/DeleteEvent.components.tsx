import { useContext } from "react"; 
import { EventContext } from "../context/ProducersEvent.context";

export const DeleteEvent = (props: {EventId : string }) => {
    const { deleteEvent } = useContext (EventContext);
    const submit = async (event: any) => {
        event.preventDefault();
        if (event) {
            deleteEvent!(props.EventId); 
        } 
    }

return (
        <button 
            onClick={submit}>
            🗑️
        </button>
);
}