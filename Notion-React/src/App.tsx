import { Editor } from "./components/Editor";

export function App() {
  return (
    <div className="text-zinc-50 dark:text-zinc- min-h-screen p-8 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="bg-white dark:bg-zinc-800 w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-50 dark:bg-zinc-900  border-r border-r-zinc-100 dark:border-r-zinc-700 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full  bg-zinc-300 group-hover:bg-red-500 transition-colors" />
            <button className="w-3 h-3 rounded-full  bg-zinc-300 group-hover:bg-yellow-500 transition-colors" />
            <button className="w-3 h-3 rounded-full  bg-zinc-300 group-hover:bg-green-500 transition-colors" />

          </div>
        </aside>

        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  )
}
