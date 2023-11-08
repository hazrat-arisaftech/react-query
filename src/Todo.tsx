import { addTodo, allTodos } from "./todoAPI";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const Todo = () => {
  const queryClient = useQueryClient();
  const { data, error } = useQuery({ queryKey: ["todos"], queryFn: allTodos });
  console.log("first", data);
  const mutation = useMutation({
    // @ts-ignore
    mutationFn: addTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <div>
      {data?.map((d) => (
        <div>
          <p>{d.title}</p>
          <p>{d.isDone}</p>
        </div>
      ))}
      <button
        onClick={() => {
          mutation.mutate({
            title: "Tododdd",
            isDone: true,
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default Todo;
