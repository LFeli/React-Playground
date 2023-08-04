import { Check, Rocket, X } from "lucide-react"

export function Widget(){
  return(
    <div className="w-[448px] rounded overflow-hidden">

      {/* Header */}
      <div className="bg-zinc-200 py-4 px-6 flex items-center justify-between dark:bg-zinc-800">
          <span className="font-bold ">Notificações</span>
          <button className="text-violet-500 font-bold uppercase text-xs hover:text-violet-700 dark:hover:text-violet-400 transition-colors">Marca todos como vistas</button>
      </div>

      {/* Recent Section */}
      <div>
        <div className="bg-zinc-300 dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-600 dark:text-zinc-500 font-medium">Recentes</div>
      </div>

      <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
        <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
          <Rocket className="w-6 h-6 text-violet-500 mt-2" />
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-100">Você recebeu um convide para fazer parte da empresa Rocketseat</p>
            <div className="text-xss text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
              <span>Convites</span>
              <span>Há 3 min</span>
            </div>
          </div>
        </div>

        <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
          <Rocket className="w-6 h-6 text-violet-500 mt-2" />
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-100">Você recebeu um convide para fazer parte da empresa Rocketseat</p>
            <div className="text-xss text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
              <span>Convites</span>
              <span>Há 3 min</span>
            </div>
          </div>

          <div className="flex gap-2 self-center">
            <button className="w-8 h-8 flex items-center justify-center bg-zinc-400 dark:bg-zinc-800 rounded hover:bg-zinc-500 dark:hover:bg-zinc-700 transition-colors">
              <X className="w-3 h-3 text-zinc-50"/>
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-violet-500 rounded hover:bg-violet-700 transition-colors">
              <Check className="w-3 h-3 text-zinc-50"/>
            </button>
          </div>
        </div>

      </div>

      {/* Old Section */}
      <div>
        <div className="bg-zinc-300 dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-600 dark:text-zinc-500 font-medium">Antigas</div>
      </div>

      <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
        <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
          <Rocket className="w-6 h-6 text-violet-500 mt-2" />
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">Você recebeu um convide para fazer parte da empresa Rocketseat</p>
            <div className="text-xss text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
              <span>Convites</span>
              <span>Há 3 min</span>
            </div>
          </div>
        </div>

        <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
          <Rocket className="w-6 h-6 text-violet-500 mt-2" />
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">Você recebeu um convide para fazer parte da empresa Rocketseat</p>
            <div className="text-xss text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
              <span>Convites</span>
              <span>Há 3 min</span>
            </div>
          </div>

          <div className="flex gap-2 self-center">
            <button className="w-8 h-8 flex items-center justify-center bg-zinc-400 dark:bg-zinc-800 rounded hover:bg-zinc-500 dark:hover:bg-zinc-700 transition-colors">
              <X className="w-3 h-3 text-zinc-50"/>
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-violet-500 rounded hover:bg-violet-700 transition-colors">
              <Check className="w-3 h-3 text-zinc-50"/>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}