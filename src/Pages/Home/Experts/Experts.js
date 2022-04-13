import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';


const experts = [
    { id:1 , name: 'will' , img:expert1},
    { id:1 , name: 'gill' , img:expert2},
    { id:1 , name: 'Duaiyen' , img:expert3},
    { id:1 , name: 'messi bhai' , img:expert4},
    { id:1 , name: 'rondalo uncle' , img:expert5},
    { id:1 , name: 'stacy jonson' , img:expert6},

]
const Experts = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Our Experts </h2>
            <div className="row">
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;