import { useState } from "react";


function UseInputHooks(initialValue) {
    const [value, setValue] = useState(initialValue);
    return [
        { value, onChange: e => setValue(e.target.value) },
        () => setValue(initialValue)
    ];
}

export default UseInputHooks