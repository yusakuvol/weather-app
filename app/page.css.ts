import { style } from '@vanilla-extract/css'

export const styles = {
  weatherContainer: style({
    '@media': {
      'screen and (min-width: 1024px)': {
        display: 'flex',
        flexDirection: 'row',
      },
    },
  }),
}
