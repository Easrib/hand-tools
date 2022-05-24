import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../../Shared/Loading/Loading';
import SingleTools from './SingleTools';

const Tools = () => {
    const { data: tools, isLoading } = useQuery('tools', () => fetch("tools.json").then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mb-4 mt-2'>
            <div className='mt-6 text-center'>
                <h2 className='text-primary font-bold '>Tools We Produce</h2>
            </div>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
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