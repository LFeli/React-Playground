import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { initialContent } from './initialContent'
import { lowlight } from 'lowlight'
import js from 'highlight.js/lib/languages/javascript'
import { RxFontBold, RxFontItalic, RxStrikethrough, RxCode, RxChevronDown, RxChatBubble } from 'react-icons/rx'

import 'highlight.js/styles/nord.css'
import { BubbleButton } from './BubbleButton'

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
        <FloatingMenu 
          className='bg-zinc-100 py-2 px-1 dark:bg-zinc-700 shadow-xl border-zinc-600 shadow-black/20 rounded-md overflow-hidden flex flex-col gap-2'
          editor={editor} 
          shouldShow={({ state }) => {
          const { $from } = state.selection
          const currectLineText = $from.nodeBefore?.textContent


          return currectLineText === '/'
        }}>
          <button className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-300 dark:hover:bg-zinc-600'>
            <img 
              src="http://www.notion.so/images/blocks/text/en-US.png" 
              alt="Text" 
              className='w-12 rounded border border-zinc-300 dark:border-zinc-600'
            />
            <div className='flex flex-col text-left'>
              <span className='text-sm text-zinc-800 dark:text-zinc-100'>Text</span>
              <span className='text-xs text-zinc-500 dark:text-zinc-400'>Just start writing with plain text.</span>
            </div>
          </button>

          <button 
            className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-300 dark:hover:bg-zinc-600'
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          >
            <img 
              src="http://www.notion.so/images/blocks/header.57a7576a.png" 
              alt="Text" 
              className='w-12 rounded border border-zinc-300 dark:border-zinc-600'
            />
            <div className='flex flex-col text-left'>
              <span className='text-sm text-zinc-800 dark:text-zinc-100'>Heading 1</span>
              <span className='text-xs text-zinc-500 dark:text-zinc-400'>Big section heading.</span>
            </div>
          </button>
        </FloatingMenu>
      )}

      { editor && (
        <BubbleMenu editor={editor} className='bg-zinc-100 dark:bg-zinc-700 shadow-xl border-zinc-600 shadow-black/20 rounded-md overflow-hidden flex divide-x divide-zinc-300 dark:divide-zinc-600'>

            <BubbleButton >
              Text
              <RxChevronDown classname="w-4 h-4"/>
            </BubbleButton>

            <BubbleButton >
              Comment
              <RxChatBubble classname="w-4 h-4"/>
            </BubbleButton>
          <div className='flex items-center'>
            <BubbleButton 
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive('bold')}
            >
              <RxFontBold classname="w-4 h-4"/>
            </BubbleButton>

            <BubbleButton 
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive('italic')}
            >
              <RxFontItalic classname="w-4 h-4"/>
            </BubbleButton>

            <BubbleButton 
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive('strike')}
            >
              <RxStrikethrough classname="w-4 h-4"/>
            </BubbleButton>

            <BubbleButton 
              onClick={() => editor.chain().focus().toggleCode().run()}
              data-active={editor.isActive('code')}
            >
              <RxCode classname="w-4 h-4"/>
            </BubbleButton>
          </div>
       </BubbleMenu>
      )}
    </>
  )
}