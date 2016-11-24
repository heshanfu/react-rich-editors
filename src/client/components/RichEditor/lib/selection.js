import {
  EditorState,
  Modifier
} from 'draft-js';
import decorator from './decorator';

export function getPlainTextOfSelection(editorState, selectionState) {
  let start = selectionState.getStartOffset();
  let end = selectionState.getEndOffset();
  let currentContent = editorState.getCurrentContent()
  let currentBlock = currentContent.getBlockForKey(selectionState.getStartKey())
  let selectedText = currentBlock.getText().slice(start, end);
  return selectedText;
}

export function replaceTextOfSelection(editorState, selection, replaceBy) {
  let prevContentState = editorState.getCurrentContent();
  let nextContentState = Modifier.replaceText(prevContentState, selection, replaceBy);
  let nextEditorState = EditorState.createWidthContent(nextContentState, decorator);
}
