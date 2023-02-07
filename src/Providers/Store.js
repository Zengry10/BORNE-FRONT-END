import { createContext } from "react"
import { useState } from "react"

export const StoreContext = createContext()

export default function StoreProvider(props){
    const [modalRegister, setModalRegister] = useState(false)
    const [modalLogin, setModalLogin] = useState(false)
    const [token, setToken] = useState([])
    const [storeMenu, setStoreMenu] = useState([])

    const requestOptions = {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
      };

    return(
            <StoreContext.Provider value={{
                modalRegister,
                setModalRegister,
                modalLogin,
                setModalLogin,
                token,
                setToken,
                storeMenu,
                setStoreMenu,
                requestOptions
                  }}>
                {props.children}
            </StoreContext.Provider>
        
    )
}