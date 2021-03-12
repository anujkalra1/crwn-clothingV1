import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherInputProp}) => (
<div className="group">
    <input className='form-input' onChange={handleChange} {...otherInputProp} />
    {
        label?(
            <label className={`${otherInputProp.value.length?'shrink':''} form-input-label`}>
            {label}
            </label>
        ):null
    }
</div>
)

export default FormInput;