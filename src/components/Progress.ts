import { css } from 'vilex-css'
import { div, span } from 'vilex'

function ColorBar(label: string, count: number, color: string) {
  return div(
    css`background-color:${color};padding: 4px 10px;border-radius:5px;
    text-shadow: 0 0px 2px gray;
    `,
    span(label),
    span(count)
  )
}

export default function Progress() {
  return div(
    css`display:grid;grid-template-columns:repeat(3,auto);column-gap: 2px;
    font-weight:bold;font-size: 16px;
    color: white; opacity: 0.1;
    /* margin: 100px 0 0 0; */
    `,
    ColorBar('未完成：', 0, '#e8534e'),
    ColorBar('已完成：', 0, '#f39a3b'),
    ColorBar('总计：', 0, '#91a127'),
  )
}