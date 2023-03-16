import { useContext, createContext, useState } from "react";

const DarkModeContext = createContext(); //Creando contexto

export const useDarkModeContext = () => useContext(DarkModeContext);
export const DarkModeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false); //Boolean p/ definir el modo oscuro de la app 

    const toggleDarkMode = () => {
        setDarkMode(!darkMode) //Niego el darkMode, si es F => V, y viceversa 
            if(!darkMode){
                document.body.firstElementChild.classList.add('darkMode');
            } else {
                document.body.firstElementChild.classList.remove('darkMode');
            }
            //Lo que pasa aca es que al PRIMER elemento de todo el document (el 'div' con id 'root') se le aplica el estilo o se lo remueve
    }


    return(
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}
