import React from 'react';
import "./Skill.css"

function Skill({ logoSkill, title }) {
  return (
    <>
    <div className='skill'>
        <img src={logoSkill}></img>
        <p>{title}</p>
    </div>
    </>
  )
}

export default Skill