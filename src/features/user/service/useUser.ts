import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { api } from "../../../shared/api"

export const userKey = "userKey"

export const useUser = () => {
    const queryClient = useQueryClient();

     const getAllUsers = (params?: any) =>
    useQuery<any, any>({
      queryKey: [userKey, params],
      queryFn: () => api.get("user", { params }).then(res => res.data),
      staleTime: 1000 * 60 * 5
    });

    const deleteUser = useMutation<any, any, any>({
        mutationFn: ({id}) => api.delete(`user/${id}`).then((res) => res.data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [userKey] })
    });

    return { getAllUsers, deleteUser }
}