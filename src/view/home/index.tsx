import React, { memo, useState } from 'react'
import MDEditor from '@uiw/react-md-editor'
import { HomeContainer } from './homeStyle'
import request from '@/utils/http'

function Home() {
  const [mdFile, setValue] = useState<string>('**Hello world!!!**')
  function test(val: any) {
    console.log(val)
    setValue(val)
  }
  function subBtn() {
    const data = {
      mdFile: mdFile
    }
    console.log(data)
    request.post(`/setMdFile`, data, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res=>{
      console.log(res);
    })
  }
  return (
    <HomeContainer>
      <div className="md-container">
        <MDEditor value={mdFile} onChange={test} />
        {/* <MDEditor.Markdown source={mdFile} /> */}
      </div>
      <div className="save-container">
        <div className="sub-btn" onClick={subBtn}>
          保存
        </div>
      </div>
    </HomeContainer>
  )
}

export default memo(Home)
