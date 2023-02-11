import { useQuery } from 'react-query';
import { apiRequest } from '../utils';

export interface User {
    username: string;
}

export const getUser = async (): Promise<User> => {
    const data = await apiRequest<User>('/user');

    return data;
};

export const useGetUser = () => {
    const query = useQuery(['getUser'], () => getUser());
    return query;
};
