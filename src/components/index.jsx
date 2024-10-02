import React, { useState } from "react";
import data from './accordian/data'
const Accordian = () => {
    const [selected, setSelected] = useState(null)
    const [enableMultiselection, setEnableMultiselection] = useState(false)
    const [multiple, setMultiple] = useState([]);

    const handlesingleselection = (getcurrentId) => {
        //console.log(getcurrentId)
        setSelected(getcurrentId === selected ? null : getcurrentId)
    }

    const handleMultiselection = (getcurrentId) => {
        let cpyMultiple = [...multiple];
        const findIndex = cpyMultiple.indexOf(getcurrentId)
        if (findIndex === -1)
            cpyMultiple.push(getcurrentId)
        else
            cpyMultiple.splice(findIndex, 1)
        setMultiple(cpyMultiple)
    }
    console.log(multiple)
    return (
        <>
            <div className="wrapper">
                <button onClick={() => setEnableMultiselection(!enableMultiselection)}>Enable Multiselection</button>
                <div className="accordian">
                    {
                        data && data.length > 0 ? data.map((item) => {
                            return <div className="item">
                                <div className="title" onClick={enableMultiselection ? () => handleMultiselection(item.id) : () => handlesingleselection(item.id)}>
                                    <h3>{item.question}</h3>
                                    <span>+</span>
                                </div>
                                {/* {
                                    selected===item.id?
                                    <div className="content">
                                    {item.answer}
                                    </div>:null
                                } */}

                                {
                                    enableMultiselection ? multiple.indexOf(item.id) !== -1 && (
                                        <div className="content">
                                            {item.answer}
                                        </div>
                                    ) : selected === item.id && (
                                        <div className="content">
                                            {item.answer}
                                        </div>
                                    )
                                }
                            </div>
                        }) :
                            <div>No Data is there</div>
                    }
                </div>
            </div>
        </>
    )
}

export default Accordian;