import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProducerMenu = () => {
    const navigate = useNavigate();
    const [show, setShowProducer] = useState(false);
    const [email,setEmail] = useState("");

    return (
        <div>
            <button onClick={() => navigate('/AddingProducer')}>מפיקה חדשה</button>

            <button onClick={() => setShowProducer(!show)}> מפיקה קיימת </button>

            {show && (
                <div>
                    <input value={email}   onChange={(e) => setEmail(e.target.value)}   id="mail"  type="email" placeholder="הכנס מייל של מפיקה" />
                    <button onClick={() => navigate(`/producers/${email}`)}>היכנס</button>


                </div>
            )}
        </div>
    );
};
