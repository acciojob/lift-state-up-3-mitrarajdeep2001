import React from "react";

const ChildComponent2 = ({setOptionName}) => {
    return(
        <div>
            <h2>Child Component2</h2>
            <button onClick={(e) => setOptionName(e.target.value)} value={'Option 2'}>Option 2</button>
        </div>
    )
}

export default ChildComponent2