import React from "react";

const ChildComponent1 = ({setOptionName}) => {
    return(
        <div>
            <h2>Child Component1</h2>
            <button onClick={(e) => setOptionName(e.target.value)} value={'Option 1'}>Option 1</button>
        </div>
    )
}

export default ChildComponent1