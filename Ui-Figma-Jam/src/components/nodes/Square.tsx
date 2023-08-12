import { NodeProps, Handle, Position } from "reactflow";

export function Square (props: NodeProps){
  return (
    <div className="bg-violet-500 rounded w-[200px] h-[200px]">
      <Handle 
        id="right" 
        type="source" 
        position={Position.Right} 
        className="-right-5 w-3 h-3 bg-blue-400/80"
      />

      <Handle 
        id="left" 
        type="source" 
        position={Position.Left} 
        className="-left-5 w-3 h-3 bg-blue-400/80"
      />

      <Handle 
        id="top" 
        type="source" 
        position={Position.Top} 
        className="-top-5 w-3 h-3 bg-blue-400/80"
      />

      <Handle 
        id="bottom" 
        type="source" 
        position={Position.Bottom} 
        className="-bottom-5 w-3 h-3 bg-blue-400/80"
      />
    </div>
  )
}