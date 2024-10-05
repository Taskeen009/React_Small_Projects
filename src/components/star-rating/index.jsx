import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './style.css'

const StarRating=({noOfStars=5})=>{
    const [rating ,setRating]=useState(0);
    const [hover,setHover]=useState(0);

    const handleClick=(currentIndex)=>{
      //console.log(currentIndex)
     // console.log(currentIndex)
      setRating(currentIndex)
    }

    const handleMouseEnter=(currentIndex)=>{
         setHover(currentIndex)
    }

    const handleMouseLeave=()=>{
           setHover(rating)
           console.log(hover)
    }
   return<>
        <div className="stars"> 
         {
            [...Array(noOfStars)].map((_,index)=>{
                index=index+1
                return <FaStar
                key={index}
                className={index <= (hover||rating)? 'active':'inactive'}
                onClick={()=>handleClick(index)}
                onMouseMove={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave()}
                size={40}
                />
            })
         }
        </div>
       
   </>
}

export default StarRating;