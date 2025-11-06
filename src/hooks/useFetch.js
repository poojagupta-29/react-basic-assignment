import { useState, useEffect } from "react";

const useFetch = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const fetchUserData = async () => {
            try {
                const resposnse = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await resposnse.json();

                setTimeout(() => {
                    const newData = data.map(user => ({
                        ...user,
                        imgUrl: `https://api.dicebear.com/9.x/lorelei/svg?seed=${user.username}`,
                        favorite: false
                    }));
                    setUserData(newData);
                    setLoading(false);
                }, 2000);


            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }

        fetchUserData()
    }, [])

    return { userData, setUserData, loading };
};

export default useFetch;