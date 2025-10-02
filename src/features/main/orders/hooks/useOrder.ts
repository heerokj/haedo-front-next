import { queryKeys } from "@/shared/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { OrderRequest, requestOrder } from "../api/orderApi";

export const useOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: OrderRequest) => requestOrder(data),
    onMutate: () => {
      console.log("결제 요청 진행 중...");
    },
    onError: (error) => {
      console.error(`결제 요청 에러 : ${error}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.order.all });
    },
  });
};
