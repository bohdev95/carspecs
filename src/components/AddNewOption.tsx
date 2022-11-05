import React, { useState } from 'react'

const AddNewOption = () => {
    const [option, setOptions] = useState<string[]>([]);
    const addNewItem =()=>{
       
            setOptions([...option,option.length.toString() ])
        
        
    }
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Make a New Configuration</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            
                            {
                                option.map(item=>(
                                    <div>item</div>
                                ))
                            }
                            <button onClick={()=>addNewItem()}>Add option</button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewOption