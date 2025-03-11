import React from 'react';

export default function ProgressBar({value = 0}) {
  const [percent, setPercent] = React.useState(value)
  React.useEffect(()=>{
    setPercent(Math.max(0, Math.min(100, value)))
  },[value])

  return (
    <>
    <div className='Progress'>

    <span style={{color: percent>49? 'red': 'black'}} >{`${percent.toFixed()}%`}</span>

    <div   id="percent-loaded"
  role="progressbar"
  aria-valuenow= {percent.toFixed()}
  aria-valuemin="0"
  aria-valuemax="100"
   style={{width: `${percent}%`}}
  // style={{
  //   transform: `scaleX(${percent / 100})`,
  //   transformOrigin: 'left'
  // }}
   
   ></div>
    </div>
    </>
  );
}