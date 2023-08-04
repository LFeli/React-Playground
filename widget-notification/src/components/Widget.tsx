'use client'

import { Check, Rocket, X } from "lucide-react"
import { Notification } from "./Notification"

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
        <Notification.Root>
          <Notification.Icon icon={Rocket}/>
          <Notification.Content text="Você recebeu um convide para fazer parte da empresa Rocketseat" />
        </Notification.Root>

        <Notification.Root>
          <Notification.Icon icon={Rocket}/>
          <Notification.Content text="Você recebeu um convide para fazer parte da empresa Rocketseat" />
          <Notification.Actions>
            <Notification.Action onClick={() => {}} icon={X} />
            <Notification.Action onClick={() => {}} icon={Check} className="bg-violet-500 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-700" />
          </Notification.Actions>
        </Notification.Root>
      </div>

      {/* Old Section */}
      <div>
        <div className="bg-zinc-300 dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-600 dark:text-zinc-500 font-medium">Antigas</div>
      </div>

      <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
      <Notification.Root>
          <Notification.Content text="Você recebeu um convide para fazer parte da empresa Rocketseat" />
          <Notification.Actions>
            <Notification.Action onClick={() => {}} icon={Check} className="bg-emerald-500 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-700" />
          </Notification.Actions>
      </Notification.Root>

      <Notification.Root>
          <Notification.Content text="Você recebeu um convide para fazer parte da empresa Rocketseat" />
      </Notification.Root>
      </div>

    </div>
  )
}