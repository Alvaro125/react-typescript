import React, { useContext, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";


export function Modal(props: any):JSX.Element {

    const [isBlock, setisBlock] = useState("");
    // const value = useContext(Context);

    function shack(e: React.ChangeEvent<HTMLInputElement>): void {
        if (props.isOk) {
            setisBlock("");
            props.toggle();
        } else {
            setisBlock("");
            setisBlock("block");
        }
    }

    return (
        <>
            {props.isOpen && (
                <div className={`modal-overlay ${isBlock}`}>
                    <div className="closed" onClick={(e:any)=>{
                        shack(e)
                    }}>
                        <IoCloseCircleOutline/>
                    </div>
                    <div className="modal-box">{props.children}</div>
                </div>
            )}
        </>
    );
}
