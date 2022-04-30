import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://api.publicapis.org/entries');
            setData(response.data.entries);
        }
        fetchData();
        
    })

    return (
        <div style={{height: '100%', overflowX: 'scroll'}}>
            {
                data.slice(0,20).map(
                    (item, id) =>
                    <div key={id}>
                        <div>
                            <span style={{fontWeight: 'bold', marginRight: '10px'}}>{id}</span>
                            API: {item.API}
                        </div>
                        <div style={{marginBottom: 10}}>Link: {item.Link}</div>
                    </div>
                )
            }
        </div>
    )
}

export default Home;