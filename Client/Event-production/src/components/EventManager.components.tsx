
import { useNavigate } from 'react-router-dom';
export const EventManager = () => {
    const navigate = useNavigate();
    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>ברוכים הבאים!</h1>
            <button 
                onClick={() => navigate('/producers')} 
                style={buttonStyle}>
                כניסת מפיקות
            </button>
            <button 
                onClick={() => navigate('/users')} 
                style={buttonStyle}>
                כניסת משתמשים רגילים
            </button>
        </div>
    );
}
const containerStyle = {
    padding: "20px", 
    textAlign: "center" as "center", 
    backgroundColor: "#f9f9f9", 
    borderRadius: "10px", 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
};

const headingStyle = {
    fontSize: "28px", 
    color: "#333"
};

const buttonStyle = {
    backgroundColor: "#3498db",
    color: "white", 
    padding: "10px 20px", 
    borderRadius: "5px", 
    border: "none", 
    cursor: "pointer", 
    fontSize: "16px", 
    margin: "10px", 
    transition: "0.3s"
};
