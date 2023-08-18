import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faStar,faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';

const StarRating = ({rating}) => {
    const stars=[];
    for(let i=1;i<=5;i++){
        if(rating>=i){
            stars.push(<FontAwesomeIcon key={i} icon={faStar}/>);
        }else if(rating>=i-0.5){
            stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt}/>);
        }else{
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className='unfilled'/>);
        }
    }

    return (
        <div>
            {stars}
        </div>
    );
};

export default StarRating;