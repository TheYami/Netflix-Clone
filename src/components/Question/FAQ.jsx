import React,{useState} from 'react'
import { FaqCon } from './styled';

function FAQ({title,info}) {
    const [showInfo,setShowInfo] = useState(false);
  return (
    <FaqCon>
        <div className="container">
            <div className='container1'>
                <h3>{title}</h3>
                <button onClick={()=> setShowInfo(!showInfo)}>
                    {showInfo ? '-' : '+'}
                </button>
            </div>
       </div>
       <div className="faq__p">
            {showInfo && <p>{info}</p>}
       </div>
 
    </FaqCon>
  )
}

export default FAQ