import { createContext, useEffect, useState } from "react";
import { Event } from "../types/event";
import { useHttp } from "../custom-hooks/useHttp";


type eventContextType = {
    events: Event[] | undefined,
    updateEvent: (oldEvent: Event, newEvent: Event) => void,
    addEvent: (newEvent: Event) => void
    deleteEvent :(id : string)=>  void 
}

export const EventContext = createContext<Partial<eventContextType>>({});
export const EventProvider = (props: any) => {
    const { data, error, loading, request } = useHttp<Event[]>('/events');
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        if (data) {
            setEvents(data);
        }
    }, [data]);

    useEffect(() => {
        if(events)
          console.log("Updated events state:");
      }, [events]);
                
    const contextValue: eventContextType = {
        events,
        updateEvent(oldEvent: Event, newEvent: Event) {
          request(`/events/${newEvent.id}`, 'put', newEvent)
          .then(() => request()) 
            .then((updatedEvents) => {
                if (updatedEvents) {
                    console.log("ghjhgfhjhgggggggggggggg");
                    
                  updatedEvents.map(curr=>console.log(curr))
                    setEvents(updatedEvents); 
                }
            })
            .catch((error) => console.error("Error update  event:", error));
        },
    addEvent(newEvent: Event) {
        request(`/events/`, "post", newEvent)
            .then( () => request()) 
            .then((updatedEvents) => {
                if (updatedEvents) {
                    console.log(updatedEvents);
                    
                    setEvents(updatedEvents); 
                }
            })
            .catch((error) => console.error("Error adding event:", error));
    },
     deleteEvent(id:string){
        request(`/events/${id}`, "delete")
            .then(() => request()) 
            .then((updatedEvents) => {
                if (updatedEvents) {
                    setEvents(updatedEvents); 
                }
            })
            .catch((error) => console.error("Error delete event:", error));
    }
}

    return <EventContext.Provider value={contextValue}> 
        { loading && 'Loading...' }
        { error }
        { !loading && !error && props.children }
    </EventContext.Provider>
 }