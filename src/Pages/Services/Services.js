import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('Service.json')
        .then(res=>res.json())
        .then(result=>setServices(result))
    },[])
    return (
        <div className=''>
           <h2 className='text-4xl text-center my-16 italic font-bold'>This is Services</h2> 
           <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5  gap-10">
           {
            services.map((service)=>
                <Service key={service.id} service={service}></Service>
            )
           }
           </div>
        </div>
    );
};

export default Services;