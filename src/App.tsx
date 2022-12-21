import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Update } from "./pages/update";
import { Perfil } from "./pages/perfil";
import { Modal } from "./components/modal";
import { Auth } from "./components/auth";
import { Routes, Route } from "react-router-dom";

function App(): JSX.Element {
    const [isOpen, setisOpen] = useState<boolean>(false);
    const [isCheck, setisCheck] = useState<boolean>(false);
    const [token, setToken] = useState<string>("");
    const [erro, setErro] = useState("");

    useEffect(() => {
        setisCheck(false);
    }, [isOpen]);
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
            <Navbar></Navbar>
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
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Login
                                    error={setErro}
                                    onSubmit={toggle}
                                    data={setToken}
                                />
                            }
                        />
                        <Route path="/register" element={<Register
                        error={setErro}
                        onSubmit={toggle}
                        />} />
                        <Route path="/update" element={<Update
                        error={setErro}
                        onSubmit={toggle}
                        />} />
                        <Route path="/perfil" element={<Perfil/>} />
                    </Routes>
                </header>
            </div>
        </Auth.Provider>
    );
}

export default App;
