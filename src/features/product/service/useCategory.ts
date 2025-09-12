import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { api } from "../../../shared/api"

export const categoryKey = "categoryKey"

export const useCategory = () => {
    const queryClient = useQueryClient();

    const getAllCategories = () => useQuery<any, any>({
        queryKey: [categoryKey],
        queryFn: () => api.get("category").then(res => res.data),
        staleTime: 1000 * 60 * 5
    })

    const create = useMutation<any, any, { name: string }>({
        mutationFn: body => api.post("category", body).then(res => res.data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [categoryKey] })
    })

    const update = useMutation<any, any, { id: string; name: string }>({
        mutationFn: ({id, ...body}) => api.patch(`category/${id}`, body).then((res) => res.data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [categoryKey] })
    });

    const deleteCategory = useMutation<any, any, {id:string}>({
        mutationFn: ({id}) => api.delete(`category/${id}`).then((res) => res.data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [categoryKey] })
    });

    return { create, getAllCategories, update, deleteCategory }
}