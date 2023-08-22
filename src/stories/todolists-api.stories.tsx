// src/stories/todolists-api.stories.tsx


import react, { useEffect, useState } from 'react'
import axios from "axios";


export default {
    title: 'api'
}
const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': "94b16f71-bc2c-42a4-8dd2-7c0e953caae2"
    }
}

const instance = axios.create({ baseURL: "https://social-network.samuraijs.com/api/1.1", ...settings })


export const gettodolists = () => {
    const [state, setstate] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

        let promise = instance.get('todo-lists')
        console.log("render 1")

        promise.then((res) => {
            console.log("render 2")
            setstate(res.data)
        }).catch((err) => {
            console.log(err)
        })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
// export const createtodolist = () => {
//     const [state, setstate] = usestate<any>(null)
//     useeffect(() => {
//     }, [])
//
//     return <div>{json.stringify(state)}</div>
// }
// export const deletetodolist = () => {
//     const [state, setstate] = usestate<any>(null)
//     useeffect(() => {
//     }, [])
//
//     return <div>{json.stringify(state)}</div>
// }
// export const updatetodolisttitle = () => {
//     const [state, setstate] = usestate<any>(null)
//     useeffect(() => {
//     }, [])
//
//     return <div>{json.stringify(state)}</div>
// }

