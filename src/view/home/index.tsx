import React, { memo, useState, ChangeEvent } from 'react'
import MDEditor from '@uiw/react-md-editor'
import HeaderForm from './components/HeaderForm'
import { HomeContainer } from './homeStyle'
import { Modal } from 'antd'
import request from '@/utils/http'

function Home() {
  const [mdFile, setValue] = useState<string>('**Hello world!!!**')
  const [fileName, setfileName] = useState<string>('')
  const [typeName, settypeName] = useState<string>('')
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

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

  function mdChange(val?: string) {
    const mdtext: string = val || ''
    setValue(mdtext)
  }

  function handleOk() {
    setIsModalVisible(true)
  }

  function handleCancel() {
    setIsModalVisible(false)
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
        <MDEditor value={mdFile} onChange={mdChange} />
        {/* <MDEditor.Markdown source={mdFile} /> */}
      </div>
      <div className="save-container">
        <div className="sub-btn" onClick={subBtn}>
          保存
        </div>
      </div>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}/>
    </HomeContainer>
  )
}

export default memo(Home)
