import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
      <div className='w-full flex flex-row place-content-center pt-2 gap-1'>

  <div className='text-md text-white drop-shadow-lg hover:text-sky-500 md:text-2xl'><a href='https://github.com/adekpp' target="blank"><FontAwesomeIcon className='mr-2' icon={['fab', 'github']} /></a></div>
  <div className='text-md text-white drop-shadow-lg hover:text-sky-500 md:text-2xl'><a href='https://www.linkedin.com/in/adrian-pietryga' target="blank"><FontAwesomeIcon className='mr-2' icon={['fab', 'linkedin']} /></a></div>
  <div className='text-md text-white drop-shadow-lg md:text-2xl'><p>Adrian Pietryga</p></div>
  
  </div>

)};

export default Footer;
