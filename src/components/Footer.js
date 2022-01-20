import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
      <div className='absolute bottom-10 flex flex-row  w-full place-content-center gap-4'>

  <div className='text-5xl text-white drop-shadow-lg hover:text-sky-500 md:text-xl'><a href='https://github.com/adekpp' target="blank"><FontAwesomeIcon className='mr-2' icon={['fab', 'github']} /></a></div>
  <div className='text-5xl text-white drop-shadow-lg hover:text-sky-500 md:text-xl'><a href='https://www.linkedin.com/in/adrian-pietryga' target="blank"><FontAwesomeIcon className='mr-2' icon={['fab', 'linkedin']} /></a></div>
  </div>

)};

export default Footer;
