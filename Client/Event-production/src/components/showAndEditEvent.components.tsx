import { Event } from "../types/event";
import { useNavigate } from "react-router-dom";

export const EditEvent = (props: { event: Event, saveEvent: (t: Event) => void }) => {
    const { event } = props;
    const navigate = useNavigate();  
    const update = (event: any) => {
        event.preventDefault();
        const newEvent: Event = {
            id: props.event.id,
            name: event.target.name.value,
            description: event.target.description.value,
            producerID: props.event.producerID,
        };
                
        props.saveEvent(newEvent);
        navigate(`/producers/${props.event.producerID}`);

    }
    return <form onSubmit={update}>
        <input type="text" name="name" defaultValue={event.name.toString()} /> <br/>
        <input type="text" name="description" defaultValue={event.description.toString()} /> <br/><br/>
        <button>✅</button>
    </form>
}