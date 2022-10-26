import { ee } from './../eventEmiter'
import { css } from 'vilex-css'
import { button, div, input, ref } from "vilex"

export interface TaskItem {
  title: string
  createTime: number
  status: 'pending' | 'success'
}

export default function AddItemForm() {
  const title = ref('')

  const addItem = () => {
    if (!title.value.trim()) {
      return
    }
    const newItem = {
      title: title.value,
      createTime: Date.now(),
      status: 'pending'
    } as TaskItem

    ee.emit('ADD_ITEM', newItem)

    title.value = ''
  }

  return div(
    css`display:flex;flex-direction:row;margin-top:100px;`,
    input(
      css`
      flex:1;
      background-color: white;
      border: 0;
      outline: 0;
      padding: 8px 16px;
      font-size: 18px;
      line-height: 48px;
      `,
      {
        placeholder: 'Add new task',
        value: title
      },
      {
        onkeypress({ ev }) {
          if (ev.key === 'Enter') {
            addItem()
          }
        }
      }
    ),
    button(
      css`
      border: 0;
      background-color: white;
      width: 80px;
      transition: all .5s;
      &:hover {
        background-color: rgba(20,200,20,0.7);
      }
      `,
      '+',
      {
        onclick: addItem
      }
    )
  )
}