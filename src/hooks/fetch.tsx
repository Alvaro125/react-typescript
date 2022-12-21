import { useState, useEffect, useContext } from "react";
import { Auth } from "../components/auth";

export function useFetchPost(_url: string) {
    const [data, setData] = useState<any>({});

    function post(_body: any){
        fetch(_url, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(_body),
        })
        .then((res: any) => res.json())
        .then((data: any) => {
            setData(data);
        }).catch(err=>{
            console.error(err);
        });
    }

    return [data,post];
}

export function useFetchPut(_url: string) {
    const auth = useContext(Auth);
    const [data, setData] = useState<any>({});

    function put(_body: any){
        fetch(_url, {
            method: "PATCH",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + auth
            },
            body: JSON.stringify(_body),
        })
        .then((res: any) => res.json())
        .then((data: any) => setData(data));
    }

    return [data,put];
}
export function useFetchGet(_url: string) {
    const auth = useContext(Auth);
    const [data, setData] = useState<any>({});
    useEffect(()=>{
        fetch(_url, {
            headers: {
                "Authorization": "Bearer " + auth
            }
        })
        .then((res: any) => res.json())
        .then((data: any) => setData(data));
    },[_url, auth])

    return data;
}