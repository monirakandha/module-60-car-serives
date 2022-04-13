import React from 'react';

const Expert = ({expert}) => {
    const{name , img} = expert;
    return (
        <div class="gx-5 col-6 col-md-4">
           <div style={{width: "38rem"}}>
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{expert.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>

    );
};

export default Expert;