import { useRef, useState } from 'react'
import { applyStyle, Tstyle } from '../email-editor/apply-style'

export function useEditor() {
	const [text, setText] = useState("Enter text")
  const [selectionStart, setSelectionStart] = useState(0)
  const [selectionEnd, setSelectionEnd] = useState(0)
  const textRef = useRef<HTMLTextAreaElement | null>(null)

	const updateSelection = () => {
    if(!textRef.current) return;
    setSelectionStart(textRef.current.selectionStart);
    setSelectionEnd(textRef.current.selectionEnd)
  }

  const applyFormat = (type: Tstyle) => {
    if(!textRef.current) return
    const selectedText = text.substring(selectionStart, selectionEnd)
    if(!selectedText) return
    const before = text.substring(0, selectionStart);
    const after = text.substring(selectionEnd);
    setText(before + applyStyle(type, selectedText) + after)
  }
	return {text, applyFormat, setText, updateSelection, textRef }
}
