import React from "react";
function Button({ title, clickHandle }) { 
  console.log(`${title} 渲染了`);
  return (
    <button onClick={clickHandle}>{title}</button>
  )
}
export default React.memo(Button);