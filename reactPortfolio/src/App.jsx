// import './App.css'
const hidden = {
  listStyleType : 'none'
}
const style ={
  backgroundColor: '#DAF7A6',
  height: '100vh',
  width: "100%",
  color: "black"
  
}

function App() {
  
  const mySkills = [
    {
      name:'JavaScript',
      comfort: 9,
      frontEnd: true,
      backend: true
    },
    {
      name:'CSS',
      comfort: 8,
      frontEnd: true,
      backend: false
    },
    {
      name:'HTML',
      comfort: 10,
      frontEnd: true,
      backend: false
    },
  ]
  const skillElements= mySkills.map((currentSkill, index)=> {
    // console.log(currentTodo);
    return <li key={index}>
      {
      (currentSkill.frontEnd === true)?
      <p><u>{currentSkill.name}</u> and my comfort level is {currentSkill.comfort}.</p>  :
      currentSkill.name
      }
    </li>
    
  })
  const skillElements2= mySkills.map((currentSkill, index)=> {
    // console.log(currentTodo);
    return <li key={index}>
      {
      (currentSkill.backend === true && currentSkill.frontEnd === true )?
      <p><u>{currentSkill.name}</u> and my comfort level is {currentSkill.comfort}</p>  :
      null
      }
    </li>
    
  })

  return <>
  <html style={style}>
    
  
    <h1 >Welcome to my Portfolio!</h1>
    <h2>This is my tech stack</h2>
  <ul>{skillElements}  </ul>
  <h2>My Backend stack is:</h2>
  <ul style={hidden}>
  {skillElements2} 
  </ul>
  </html>
  </>
}

export default App
