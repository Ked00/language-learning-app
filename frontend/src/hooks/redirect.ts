import React from "react";
import {useNavigate} from "react-router-dom";

export function useRedirect(url:string){
    const navigate = useNavigate();

    const redirect = () => {
        navigate(`/${url}`)
      };
}