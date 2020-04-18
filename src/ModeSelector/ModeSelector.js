import React from 'react';

export default props =>{
    const smallUrl = `http://localhost:8000/api/getTop`;
    return (
        <div style={{display:'flex', justifyContent:'center', padding: '50px 0'}}>
            <button onClick={()=>props.onSelect(smallUrl)} className="btn btn-success">Начать</button>
            {/*<button onClick={()=>props.onSelect(bigUrl)} className="btn btn-danger">1000 элементов</button>*/}
        </div>
    )
}