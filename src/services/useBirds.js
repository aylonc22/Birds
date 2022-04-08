import { useEffect, useState } from "react";
import axios from 'axios';
const useBirds = (page)=>{
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [birds,setBirds] = useState([]);
    const BIRD_URL = "https://zapari.any.do/birds/20"
    useEffect(()=>{
        let cancel;
        setError(false);
        setLoading(true);
        axios({
            method:'GET',
            url:BIRD_URL,
            cancelToken: new axios.CancelToken(c=> cancel = c)
        }).then(res=>{           
            setBirds(birds =>[...birds,...res.data.items]);
            setLoading(false);
        }).catch(e=>{
            if(axios.isCancel(e))
                return;
            setError(true);
        });
        return ()=>cancel();
    },[page]);
    return {loading,error,birds};
}

export default useBirds;