import { css } from 'vilex-css'
import { ViElement } from 'vilex'
import { TaskItem } from './AddItemForm'
import { div, h3 } from 'vilex'
import Item from './Item'

interface TaskItemElement extends ViElement {
  addTaskItem: (data: TaskItem) => void
  delTaskItem: (data: TaskItem) => void
}
export default function TaskList(title: string) {
  const list: TaskItem[] = []
  const tasklist = div(
    css`min-height: 200px;`,
    h3(title),
    ...list.map(itemData => Item(itemData))
  ) as unknown as TaskItemElement

  tasklist.addTaskItem = (data: TaskItem) => {
    list.push(data)
    tasklist.add(Item(data))
  }

  tasklist.delTaskItem = (data: TaskItem) => {
    const index = list.findIndex(item => item.createTime == data.createTime)
    if (index > -1) {
      list.splice(index, 1)
      tasklist.remove(tasklist.children[index + 1])
    }
  }

  return tasklist
}