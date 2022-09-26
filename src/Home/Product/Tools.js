import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Tool from './Tool';

const Tools = () => {

    const [tools, setTools] = useState([]);

    useEffect( () => {
        fetch(`https://desolate-reef-03804.herokuapp.com/tools`)
        .then( res => res.json())
        .then( data => setTools(data));
    }, [])
    return (
        <div>
            <h1 className='bg-primary py-8 text-4xl text-white mb-2 text-center'>We Have Best Tools</h1>
            <div className='max-w-screen-xl mx-auto '>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-10'>
            {
                tools.slice(0, 6).map( tool => <Tool
                key={tool._id}
                tool={tool}
                ></Tool>)
            }
            </div>
        </div>
        </div>
    );
};

export default Tools;