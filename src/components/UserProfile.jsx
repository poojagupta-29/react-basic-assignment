import { UserProfileCard } from './UserProfileCard';
import useFetch from '../hooks/useFetch';
const UserProfile = () => {

    const { userData, setUserData, loading } = useFetch();


    if (loading) {
        return <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    }

    return (
        <div class="p-6 lg:w-[80%] sm:w-full lg:mx-auto flex gap-5 flex-col">

            {
                userData && userData.map(user => (
                    <UserProfileCard
                        key={user.id}
                        user={user}
                    />
                ))
            }

        </div >

    )
}

export default UserProfile