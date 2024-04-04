import React, { useState, useEffect } from 'react';

// Higher-Order Component (HOC) for providing loading spinner
const withLoader = (WrappedComponent) => {
    return function WithLoaderComponent(props) {
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const fetchData = async () => {
                await new Promise(resolve => setTimeout(resolve, 2000)); 
                setIsLoading(false);
            };

            fetchData();
        }, []);

        return isLoading ? <div>Loading...</div> : <WrappedComponent {...props} />;
    };
};


const DataComponent = ({ data }) => {
    return (
        <div>
            <h2>Data Component</h2>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};


const DataComponentWithLoader = withLoader(DataComponent);


const ComponentComposition = () => {
    const [data, setData] = useState([]);

    
    useEffect(() => {
     
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 2000)); 
            setData([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Task 5 - Component Composition</h1>
            <DataComponentWithLoader data={data} />
        </div>
    );
};

export default ComponentComposition;