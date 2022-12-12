import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/form";
import { Modal } from "./components/modal";
import {Auth} from './components/auth'


function App(): JSX.Element {
    const [isOpen, setisOpen] = useState<boolean>(false);
    const [isCheck, setisCheck] = useState<boolean>(false);
    const [token, setToken] = useState<string>("");
    const [erro, setErro] = useState("");

    useEffect(()=>{
        setisCheck(false)
    },[isOpen]);
    const toggle = () => {
        setisOpen(!isOpen);
        console.log("closed active: ", isOpen);
    };
    const handler = () => {
        setisCheck(!isCheck);
        console.log("radio active: ", !isCheck);
    };

    return (
        <Auth.Provider value={token}>
            <div className="App">
                <header className="App-header">
                    <Modal isOpen={isOpen} isOk={isCheck} toggle={toggle}>
                        <input
                            id="radio"
                            type="checkbox"
                            checked={isCheck}
                            onChange={handler}
                        />
                        <p>{erro}</p>
                    </Modal>
                    <Form
                        error={setErro}
                        onSubmit={toggle}
                        data={setToken}
                    ></Form>
                </header>
            </div>
        </Auth.Provider>
    );
}

export default App;
