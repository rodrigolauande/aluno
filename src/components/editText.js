import JoditEditor from 'jodit-react';
import { useRef, useState } from 'react'

function EditText() {
    
    const editor = useRef(null);
    const [content, setContent] = useState('')

    const config = {
        readonly: false,
        height: 400
    }

    const handleUpdate = (event) => {
        const editorContent = event.target.value
        setContent(editorContent)
    }
    return (
        <div>
            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                onBlur={handleUpdate}
                onChange={(newContent) => {}}
            />
            
        </div>
    )
}

export default EditText