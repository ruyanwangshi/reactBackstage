import React, { memo } from 'react'
import MDEditor from '@uiw/react-md-editor'
import { HomeContainer } from './homeStyle'

function Home() {
  const [value, setValue] = React.useState('**Hello world!!!**')
  function test(val: any) {
    console.log(val)
    setValue(val)
  }
  function subBtn() {
    console.log('测试')
  }
  return (
    <HomeContainer>
      <div className="md-container">
        <MDEditor value={value} onChange={test} />
        {/* <MDEditor.Markdown source={value} /> */}
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
