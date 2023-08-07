import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { initialContent } from './initialContent'
import { lowlight } from 'lowlight'
import js from 'highlight.js/lib/languages/javascript'

import 'highlight.js/styles/nord.css'

lowlight.registerLanguage('js', js)

export function Editor(){
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none'
      }
    }
  })

  return(
    <>
      <EditorContent editor={editor} className="max-w-[700] mx-auto pt-16 prose dark:prose-invert prose-violet"/>
      { editor && (
        <BubbleMenu editor={editor}>
          <button>Bold</button>
        </BubbleMenu>
      )}
    </>
  )
}