import { useEffect } from "react";
import { fetchUsers } from "../../redux/slices/list/thunks";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Loader } from "../../components/loaders/Loader";
import { EndpointError } from "../../components/errors/EndpointError";
import { UserCard } from "../../components/cards/UserCard";

export const ListScreen = () => {

    const dispatch = useAppDispatch();

    const users = useAppSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])


    return users.isLoading ? <Loader /> : (
        <>
            {
                users.hasFailedToLoad ? <EndpointError /> : (
                    <div className="p-8 w-full">
                        {
                            users.listSlice.map((item) => <UserCard key={item.id} {...item}/>)
                        }
                    </div>
                )
            }
        </>
    );
};