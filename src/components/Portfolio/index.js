import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import projectData from '../../data/portfolio.json'
const Portfolio = () => {
    const [letterCLass , setLetterClass] = useState('text-animate');
    console.log(projectData);
    
    useEffect(()=>{
        setTimeout(()=>{
           setLetterClass('text-animate-hover')
       },3000)
   },[]);

  const renderPortfolio =(projectData)=>{
        return (
            <div className='images-container'>
               {
                projectData.map((port , idx)=>{return(
                    <div className='image-box' key={idx}>
                     <img src={port.cover} 
                     className='portfolio-image'
                     alt='Amazonclone'/>
                     <div className='content'>
                         <p className='title'>{port.title}</p>
                         <h4 className='description'>{port.description}</h4>
                         <button className='btn' onClick={()=>window.open(port.url)}>View</button>
                     </div>
                    </div>
                )
                    
                })
               }
            </div>
        )
  }

  return (
    <div className='container portfolio-page'>
        <h1 className='page-title'>
            <AnimatedLetters
            lettersClass={letterCLass}
            strArray={"Portfolio".split("")}
            idx={15}
            />
        </h1>
           <div>{renderPortfolio(projectData.portfolio)}</div>
    </div>
  )
}

export default Portfolio