import React, {useState} from "react";

type Output = {
    chances: number
    setChances: ()=>void
}

export function useChances():Output{
    const [chances, setChances] = useState(2)

    function updateChances(){
        setChances(prev => prev - 1)
    }

    return{
        chances: chances,
        setChances:updateChances
    }
}