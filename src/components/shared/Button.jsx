// import React from 'react'
// import {Link} from 'react-router-dom'

// const Button = ({text,bgColor,textColor,to,handler =()=>{}}) => {
//   return <button
//   className={`${bgColor} ${textColor} 
//    cursor-pointer hover:scale-105
//    duration-300 py-2 px-8 rounded-full relative z-10
  
//   `}

 
  
  
//   >{text}</button>
// }

// export default Button
import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, bgColor, textColor, to, handler = () => {} }) => {
  const buttonContent = (
    <button
      className={`${bgColor} ${textColor} 
        cursor-pointer hover:scale-105
        duration-300 py-2 px-8 rounded-full relative z-10`}
     
    >
      {text}
    </button>
  );

  // If 'to' is provided, use Link; otherwise, just return the button
  return to ? (
    <Link to={to}>
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
};

export default Button;
