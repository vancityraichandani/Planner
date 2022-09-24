import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function NameTime() {

    const date = useSelector(state => state.date);
    const time = useSelector(state => state.time);
    const dispatch = useDispatch();
    
    const runTimeRecursion = () => {
        dispatch({type:"UPDATE_DATE_TIME"})
        setTimeout(()=>{
            runTimeRecursion()
        }, 1000)
    }

    useEffect(()=>{
        runTimeRecursion()
    },[])
    
    return (
        <div style={{textAlign:'center'}}>
            <div>
                Hi Somesh
            </div>
            <div>
                It's {time}
            </div>
            <div>
                {date}
            </div>
        </div>
    )
}

export default NameTime