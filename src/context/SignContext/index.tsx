import React,{createContext,useState,useEffect} from 'react';

interface Props{
    children : JSX.Element | Array<JSX.Element>;
}

const SignContext = createContext<ISignContext>({
    isSigned : false,
    trySignIn : ():void =>{},
    trySignUp :():void => {},
});

const SignContextProvider = ({children}:Props)=>{
    const [isSigned,setSignFlag] = useState<boolean>(false);

    const trySignIn = ():void =>{
        setSignFlag(true);
    };

    const trySignUp = ():void =>{
        setSignFlag(false);
    }
    useEffect(()=>{
        setSignFlag(false);
    },[])

    return (
        <SignContext.Provider
        value={{isSigned,trySignIn,trySignUp}}>
            {children}
        </SignContext.Provider>
    );
};

export {SignContext,SignContextProvider};