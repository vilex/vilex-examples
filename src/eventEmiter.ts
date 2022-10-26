import { TaskItem } from './components/AddItemForm'
import { EventEmitter } from 'eventemitter-strict'
export const ee = new EventEmitter<{
  ADD_ITEM: (data: TaskItem) => void
  DEL_ITEM: (data: TaskItem) => void
  END_ITEM: (data: TaskItem) => void
}>()