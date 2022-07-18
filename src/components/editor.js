/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'

function texto() {
    const editorRef = useRef();

    function onClickHandler() {
        console.log(editorRef.current.getContent());
    }

    return(
        <div>
            <Editor
            onInit={ (env, editor) => editorRef.current = editor }
            init={{
                menubar: false
            }}
            />

            <button type='button' onClick={onClickHandler}>
            submit
            </button>
        </div>
    )
}

export default texto