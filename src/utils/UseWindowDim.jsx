import {useState, useEffect} from 'react';
function UseWindowDim() {
const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
});
useEffect(()=>{
    function handleDimension(){
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
        window.addEventListener('resize', handleDimension);
        return () => window.addEventListener('resize',handleDimension);
},[]);
    return windowDimension;;
}

export default UseWindowDim;
