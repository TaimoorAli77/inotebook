import React , {useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext';

const About = () => {
    const a = useContext(noteContext);
    useEffect(() => {
      return () => {
    a.update();
      };
    }, []);
  return (
    <div>
     <h1>This is About {a.state.Name} and his class is {a.state.class} </h1> 
    </div>
  )
}

export default About
