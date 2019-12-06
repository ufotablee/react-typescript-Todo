import React from 'react';
import { useHistory } from 'react-router-dom' 

export const AboutPage: React.SFC = () => {
    const history = useHistory()
    return ( 
        <>
        <h1>Страница информации</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima est veritatis nemo.</p>
        <button className="btn" onClick={()=> history.push('/')}>Обратно к списку дел</button>
        </>
     );
}
 