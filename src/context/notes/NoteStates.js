import  NoteContext from './noteContext'
import React,{useState} from 'react'


const NoteState = (props)=>{
const s1={
    "Name":"Taimoor",
    "class":"5b"
}

const [state, setstate] = useState(s1);

const update = ()=>{
    setTimeout(() => {
        setstate({
            "Name":"Fawad",
            "class":"10a"
        })
        
    }, 5000);
}

    return(
        <NoteContext.Provider value={{state,update }}>
        {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;