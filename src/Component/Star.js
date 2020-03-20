import React from 'react'

export default function Star(props) {
    let arr=[];
    for (let i=0;i<5;i++)
{
  if (i<props.rate)
  { arr.push(<i onClick={()=>props.oncli(i+1)} class="fas fa-star"></i>)}
  else
  { arr.push(<i onClick={()=>props.oncli(i+1)} class="far fa-star"></i>)}
}
    return (
        <div>
          <span>{arr}</span>  
        </div>
    )
}
