import React, { useCallback }  from 'react';

function VisibilityControl({description,callback,isChecked}){
    
    return(
        <div className="form-check">
            <input type="checkbox" className="form-check-input" checked={isChecked} onChange={e => callback(e.target.checked)}/>
        <label htmlFor="form-check-label">
            Show {description}
        </label>
        </div>
    )
}
export default VisibilityControl;




