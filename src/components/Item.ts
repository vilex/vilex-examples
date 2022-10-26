import { ee } from './../eventEmiter'
import { button } from 'vilex'
import { css } from 'vilex-css'
import { div, span } from 'vilex'
import { TaskItem } from './AddItemForm'
import { ViItemPart } from 'vilex/src/vilex-dom/elements/velements'
import { format } from 'date-fns'

const iconButton = (label: string, ...args: ViItemPart[]) => {
  return button(
    label,
    css`
      border: 0;
      background-color: transparent;
      transition: all .5s;
      font-size: 24px;
      margin: 0 3px;
      padding: 0 8px;
      width: 60px;
      line-height: 48px;
      cursor: pointer;
      &:hover {
        background-color: #4e4e5c;
      }
    `,
    ...args
  )
}
export default function Item(data: TaskItem) {
  return div(
    css`
    display:flex;
    flex-direction:row;
    background-color: #4e4e5c;
    font-size: 18px;
    align-items: center;
    margin: 8px 0;
    line-height: 48px;
    transition: all .3s;
    padding: 0 20px;
    &:hover {
      background-color: #baa8a8;
      color: black;
    }
    `,
    div(
      css`flex:1;`,
      span(
        format(data.createTime, 'MM:dd'),
        css`margin-right: 20px;color: rgba(255,255,255,0.7);user-select:none;`
      ),
      span(
        data.title,
        css`font-weight: bold;`
      )
    ),
    iconButton('✖', css`color: red;`, {
      onclick() {
        ee.emit('DEL_ITEM', data)
      }
    }),
    data.status === 'pending'
      ? iconButton('✔', css`color:green`, {
        onclick() {
          ee.emit('END_ITEM', data)
        }
      })
      : ''
    ,
  )
}