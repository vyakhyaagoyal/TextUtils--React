import React from 'react'

export default function Alert(props) {

    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        const upper=word.charAt(0).toUpperCase()+lower.slice(1);
        return upper;
    }

return (
    <div style={{height:'50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {capitalize(props.alert.msg)}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
            </button> */}
        </div>
}
    </div>
)
}
