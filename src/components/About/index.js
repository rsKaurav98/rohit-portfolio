import './index.scss';
import React from 'react'
import AnimatedLetters from '../AnimatedLetters'

const About= () => {
  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
            <AnimatedLetters
              strArray={['A','b','o','u','t',' ','m','e']}
              idx={15}
            />
        </h1>
        <p>
            I'm very ambitious front-end developer looking for role in established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.
        </p>
        <p>
            I'm quietly confident,naturally curious,and perpetually working on improving my chops one design problem at a time
        </p>
        <p>
          If I need to define myself in one sentence that would be a curious and inquisitive individual, cricket fanatic, movie enthusiast, and tech-obsessed!!!  
        </p>
      </div>
    </div>
  )
}

export default About;