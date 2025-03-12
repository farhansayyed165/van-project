import React from 'react'
import { getHostVans, getUser } from '../api'
import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth'


function useGetHostVans(setData, num) {
    const { auth } = useAuth()
    async function fetchVanData() {
        const response = await getHostVans(auth.userid)
        // console.log(response)
        if (response.data.error) {
            console
            const navigate = useNavigate()
            navigate(0)
        }
        // console.log("res", response.data.vans)
        setData(response.data.vans)
    }
    async function fetchUser(){
        const response  = await getUser("userid", auth.userid)
        // console.log(response)
        setData(response.data[0])
    }
    if(num == 0){
        return fetchVanData
    }
    if(num == 1){
        return fetchUser
    }
}

export default useGetHostVans