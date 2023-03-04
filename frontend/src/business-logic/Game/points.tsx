import React, {useState} from "react";

type Output = {
    points : number
    setPoints: ()=>void
}

export function usePoints(){
    const [points, setPoints] = useState(0);

    function updatePoints(){
        setPoints(prev => prev + 10)
    }

    return{
        points: points,
        setPoints:updatePoints
    }
}