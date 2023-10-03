import { Suspense } from "react";
import TodosList from "./todos/TodosList";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<p>Loading the Todos..</p>}>
        <h1>Loading Todos</h1>
        <div className="flex  space-x-2">
          <TodosList />
        </div>
      </Suspense>

      <Suspense fallback={<p>Loading the Shopping...</p>}>
        <h1>Loading Shopping Trolley</h1>
        <div className="flex  space-x-2">
          <TodosList />
        </div>
      </Suspense>
    </main>
  );
}
