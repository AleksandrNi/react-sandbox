import React from 'react';
import {UseStateValue} from 'context/State'

export const Mask = () => {
    const [state, dispatch] = UseStateValue();
    const customMaskClass = state.displayMask ? 'mask-active' : '';
    return  <div className={customMaskClass}> </div>
}