import { createContext, useEffect, useState } from "react";
import { Producer } from "../types/producer";
import { useHttp } from "../custom-hooks/useHttp";

type producerContextType = {
    producers: Producer[] | undefined,
    updateProducer: (oldProducer: Producer, newProducer: Producer) => void,
    addProducer: (newProducer: Producer) => void
}

export const ProducerContext = createContext<Partial<producerContextType>>({});

export const ProducerProvider = (props: any) => {

    const { data:producers, error, loading, request } = useHttp<Producer[]>('/producers');
    // const [producers, setProducers] = useState<Producer[]>([]);
    // useEffect(() => {
    //     if (data) {
    //         setProducers(data);
    //     }
    // }, [data]);
    // useEffect(() => {
    //     console.log("Updated producers state:", producers);
    //   }, [producers]);
                
    const contextValue: producerContextType = {
        producers,
        updateProducer(oldProducer: Producer, newProducer: Producer) {
            // const newTasks = todos.map(todo => todo === oldTask ? newTask : todo);
            // setTodos(newTasks);
        },
        addProducer(newProducer: Producer) {
            request(`/producers/`, "post", newProducer)
                .then(() => request()) 
                // .then((updatedEvents) => {
                //     if (updatedEvents) {
                //         setProducers(updatedEvents); 
                //     }
                // })
                .catch((error) => console.error("Error adding event:", error));
        }
    };
    return <ProducerContext.Provider value={contextValue}> 
        { loading && 'Loading...' }
        { error }
        { !loading && !error && props.children }
    </ProducerContext.Provider>
 }