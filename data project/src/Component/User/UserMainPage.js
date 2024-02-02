import React, { useEffect, useState } from 'react'
import ItemsWrapper from './ItemsWrapper';

const URL_ITEMs = 'http://localhost:3500/items/'

const UserMainPage = () => {
    const [itemsFromApi, setItemsFromApi] = useState([]);
    useEffect(() => {
        getItemsFromApi()
    }, []);

    async function getItemsFromApi(itemId = '') {
        try {
            let response = await fetch(URL_ITEMs + itemId)
            if (response.ok) {
                let data = await response.json();
                setItemsFromApi(data)
            }
            else {
                throw new Error('Can not fetch data')
            }
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <>
            <ItemsWrapper itemsFromApi={itemsFromApi} />
        </>
    )
}

export default UserMainPage;