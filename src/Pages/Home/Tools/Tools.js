import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../../Shared/Loading/Loading';
import SingleTools from './SingleTools';

const Tools = () => {
    const { data: tools, isLoading } = useQuery('tools', () => fetch("http://localhost:5000/purchase").then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mb-4 mt-2'>
            <div className='mt-6 text-center'>
                <h2 className='text-primary font-bold text-2xl '>Tools We Produce</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {
                    tools.slice(0, 6).map(tool => <SingleTools
                        key={tool._id}
                        tool={tool}
                    ></SingleTools>)
                }
            </div>
        </div>
    );
};

export default Tools;