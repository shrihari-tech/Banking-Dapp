import React from "react";

const Loader=()=>{
    return(
        <div className="flex justify-center items-center py-3">
            <div className="animate-spin rounded-full h-32 w-32 border-b-red-700">
                
            </div>
        </div>
    );
}

export default Loader;