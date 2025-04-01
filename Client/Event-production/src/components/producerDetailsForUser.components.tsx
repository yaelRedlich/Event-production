import { useHttp } from "../custom-hooks/useHttp";
import { Producer } from "../types/producer";
import { useEffect } from "react";
import {  useParams } from "react-router";


interface ProducerDetailsProps {
    id?: string; 
}
export const ProducerDetailsForUser = ({ id: propId }: ProducerDetailsProps) => {
    const { id: urlId } = useParams();
    
    let id = propId || urlId;    
    const { data: producer, error, loading, request } = useHttp<Producer>(`/producers/${id}`, 'get');

    useEffect(() => {
        if ( id )
        request();
    }, []); 

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div style={styles.container}>
            <h3 style={styles.title}>שם: {producer?.name}</h3>
            <p style={styles.paragraph}>אימייל: {producer?.email}</p>
            <p style={styles.paragraph}>טלפון: {producer?.phone}</p>
            <p style={styles.paragraph}>תיאור: {producer?.description}</p>
        </div>
    )
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
        marginBottom: "15px",
    },
};