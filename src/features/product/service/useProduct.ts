import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { api } from "../../../shared/api"

export const productKey = "productKey"

interface IParams {
    skip?: number
    limit?: number
    order?: "latest" | "expensive" | "cheapest"
}

export const useProduct = () => {
    const queryClient = useQueryClient();

     const getAllProducts = (params?: IParams) =>
    useQuery<any, any>({
      queryKey: [productKey, params],
      queryFn: () => api.get("product", { params }).then(res => res.data),
      staleTime: 1000 * 60 * 5
    });

    const createProduct = useMutation<any, any, any>({
        mutationFn: body => api.post("product", body).then(res => res.data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [productKey] })
    })

    const deleteProduct = useMutation<any, any, any>({
        mutationFn: ({id}) => api.delete(`product/${id}`).then((res) => res.data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [productKey] })
    });

    return { createProduct, getAllProducts, deleteProduct }
}