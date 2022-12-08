import React, { useEffect, useState, useContext,createContext } from "react";
import "./App.css";
import { Form } from "./components/form";
import { Modal } from "./components/modal";


function App(): JSX.Element {
    const Context = createContext("");
    const [isOpen, setisOpen] = useState<boolean>(false);
    const [isCheck, setisCheck] = useState<boolean>(false);
    const [token, setToken] = useState<string>("");
    const [erro, setErro] = useState("");

    const toggle = () => {
            setisOpen(!isOpen);
            console.log("closed active: ",isOpen)
    };
    const handler = () => {
        setisCheck(!isCheck);
        console.log("radio active: ",!isCheck)
    };

    return (
        <div className="App">
            <header className="App-header">
                <Context.Provider value={"token"}>
                    <Modal isOpen={isOpen} isOk={isCheck} toggle={toggle}>
                        <input id="radio" type="checkbox" checked={isCheck} onChange={handler} />
                        <p>{erro[0]}</p>
                    </Modal>
                    <Form error={setErro} onSubmit={toggle} data={setToken}></Form>
                </Context.Provider>
            </header>
        </div>
    );
}

export default App;
