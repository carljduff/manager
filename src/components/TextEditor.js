import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TextEditor = ({editorRef}) => {

    return(
        <>
        <Editor
        apiKey='9nq8k5bqoxo51n81b4up9yvxdtln18mxig001bkzhp0qhybq'
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue=""
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       />
        </>
    )
}

export default TextEditor;