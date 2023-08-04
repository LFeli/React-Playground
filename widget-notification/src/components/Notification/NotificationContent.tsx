interface NotificationContentProps {
  text: string
}

export function NotificationContent({ text }: NotificationContentProps){
  return(
    <div className="flex-1 flex flex-col gap-2">
      <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-100">
        {text}
      </p>
      <div className="text-xss text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
        <span>Convites</span>
        <span>Há 3 min</span>
      </div>
    </div>
  )
}