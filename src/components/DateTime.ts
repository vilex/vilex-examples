import { css } from 'vilex-css'
import { div } from 'vilex'
import { format } from 'date-fns'

const flex = css`display:flex;`
const row = css`flex-direction:row;align-items:center;`
const col = css`flex-direction:column;justify-content:center;`
const row_between = css`justify-content:space-between;`
const font_bold = css`font-weight:bold;`
const font_size = css`font-size: 24px;`
const big_font_size = css`font-size: 64px;`

const CurData = () => {
  const nd = new Date()
  return {
    day: format(nd, "dd"),
    dayDisplay: format(nd, "d"),
    month: format(nd, "MM"),
    monthDisplay: format(nd, "MMM"),
    year: format(nd, "y"),
    weekday: format(nd, "EEEE")
  }
}

export default function DateTime() {
  const date = CurData()
  return div(flex, row, row_between, font_size,
    div(font_bold,
      date.weekday
    ),
    div(flex, row,
      div(font_bold, big_font_size,
        date.dayDisplay
      ),
      div(flex, col,
        div(font_bold,
          date.monthDisplay
        ),
        div(date.year)
      )
    )
  )
}