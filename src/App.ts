import { ee } from './eventEmiter'
import { css } from 'vilex-css'
import { div, ref, store } from 'vilex'
import DateTime from './components/DateTime'
import Progress from './components/Progress'
import AddItemForm, { TaskItem } from './components/AddItemForm'
import TaskList from './components/TaskList'
export default function App() {
  const pendingTaskList = TaskList('进行中')
  const successTaskList = TaskList('已完成')

  ee.on('ADD_ITEM', data => pendingTaskList.addTaskItem(data))
  ee.on('DEL_ITEM', data => {
    data.status === 'pending'
      ? pendingTaskList.delTaskItem(data)
      : successTaskList.delTaskItem(data)
  })
  ee.on('END_ITEM', data => {
    pendingTaskList.delTaskItem(data)
    data.status = 'success'
    successTaskList.addTaskItem(data)
  })

  return div(
    css`max-width: 1200px;margin: 0 auto;padding: 60px 0;`,
    DateTime(),
    Progress(),
    AddItemForm(),
    pendingTaskList,
    successTaskList,
  )
}