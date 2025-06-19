import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'; // toast import edildi
import 'react-toastify/dist/ReactToastify.css';          // css import edildi

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₺';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);
    const [showSearch, setShowSearch] = useState(false);

    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            if(response.data) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        getProductsData();
    }, []);

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch, backendUrl
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
            <ToastContainer /> {/* Burada ToastContainer render edildi */}
        </ShopContext.Provider>
    );
};



export default ShopContextProvider;
