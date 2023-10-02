import { Todo } from "@/typing";
import { notFound } from "next/navigation";
import React from "react";

const fecthTodos = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const todo: Todo = await res.json();
  return todo;
};

const TodoPage = async ({ params }: { params: { id: string } }) => {
  const todo = await fecthTodos(params.id);

  //   previne o erro de gegar paginas que que não deveriam existir(id: 555, id: 339), e gera uma page notFound
  todo.id ? todo.id : notFound();

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.complete ? "Yes" : "No"}</p>
      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
};

export default TodoPage;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();

  // apenas 10 paginas gerados de forma static, por está usando uma demo api
  const trimedTodos = todos.slice(0, 10);

  return trimedTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
