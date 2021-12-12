import React, { ChangeEvent, memo } from 'react'
import { HeaderFormContainer } from './form'

interface HeaderProps {
  fileName?: string
  typeName?: string
  changeFileName?: (e: ChangeEvent<HTMLInputElement>) => void
  changeTypeName?: (e: ChangeEvent<HTMLInputElement>) => void
}

function HeaderForm(props: HeaderProps) {
  return (
    <HeaderFormContainer>
      <div className="column-style file-name">
        <div className="left-label">文章名称: </div>
        <div className="right-content">
          <input type="text" value={props.fileName} onChange={props.changeFileName} />
        </div>
      </div>
      <div className="column-style file-name">
        <div className="left-label">分类: </div>
        <div className="right-content">
          <input type="text" value={props.typeName} onChange={props.changeTypeName} />
        </div>
      </div>
    </HeaderFormContainer>
  )
}

export default memo(HeaderForm)
