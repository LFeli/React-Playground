import { ComponentProps, ReactNode } from "react"


export interface BubbleButtonProps extends ComponentProps<'button'>{
  children: ReactNode
}

export function BubbleButton(props: BubbleButtonProps){
  return(
    <button className='p-2 text-zinc-600 hover:text-zinc-800 hover:bg-zinc-200 dark:text-zinc-200 dark:hover:text-zinc-50 dark:hover:bg-zinc-500  text-sm flex items-center gap-1.5 font-medium leading-none data-[active=true]:text-violet-500' {...props}/>
  )
}