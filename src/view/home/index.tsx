import React, { memo, useState, ChangeEvent } from 'react'
import MDEditor from '@uiw/react-md-editor'
import HeaderForm from './components/HeaderForm'
import { HomeContainer } from './homeStyle'
import request from '@/utils/http'

function Home() {
  const [mdFile, setValue] = useState<string>('**Hello world!!!**')
  const [fileName, setfileName] = useState<string>('')
  const [typeName, settypeName] = useState<string>('')

  // 文章名称输入事件
  function changeFileName(e: ChangeEvent<HTMLInputElement>) {
    const value:string = e.target.value
    setfileName(value)
  }

   // 文章分类
   function changeTypeName(e: ChangeEvent<HTMLInputElement>) {
    const value:string = e.target.value
    settypeName(value)
  }

  function test(val: any) {
    console.log(val)
    setValue(val)
  }

  function subBtn() {
    const data = {
      mdFile: mdFile,
      fileName: fileName,
      typeName: typeName
    }
    request.post('/setMdFile', data).then((res) => {
      console.log(res)
    })
  }
  return (
    <HomeContainer>
      <div className="md-container">
        <HeaderForm fileName={fileName} changeFileName={changeFileName} typeName={typeName} changeTypeName={changeTypeName}/>
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
