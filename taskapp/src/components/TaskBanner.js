import React  from 'react';

function TaskBanner({userName,taskItems}){
    
    return(
        <div>
            <h4 className="bg-primary text-white text-center p-4">
                {userName} ({taskItems.filter(t => !t.done).length} task to do)
            </h4>
        </div>
    )
}
export default TaskBanner;



