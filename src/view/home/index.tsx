import React, { memo } from 'react'
import MDEditor from '@uiw/react-md-editor';


function Home() {
    const [value, setValue] = React.useState("**Hello world!!!**");
    function test(val:any) {
        console.log(val)
        setValue(val)
    }
    return (<div>
        <MDEditor
        value={value}
        onChange={test}
      />
      <MDEditor.Markdown source={value} />
    </div>)
}

export default memo(Home)
