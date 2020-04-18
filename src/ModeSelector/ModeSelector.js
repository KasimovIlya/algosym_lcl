import React from 'react';

export default props =>{
//     const smallUrl = `http://localhost:8000/api/getTop`;
    const smallUrl = ``http://www.mocky.io/v2/5e9b06743300009432bf1681`;
    
    return (
        <div style={{display:'flex', justifyContent:'center', padding: '50px 0'}}>
            <button onClick={()=>props.onSelect(smallUrl)} className="btn btn-success">Начать</button>
            {/*<button onClick={()=>props.onSelect(bigUrl)} className="btn btn-danger">1000 элементов</button>*/}
        </div>
    )
}
