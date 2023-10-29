import { style } from '@vanilla-extract/css'

export const styles = {
  header: style({
    backgroundColor: '#00264d',
    color: '#d9d9d9',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media': {
      'screen and (min-width: 1024px)': {
        justifyContent: 'left',
        paddingLeft: '1rem',
      },
    },
  }),
  linkContainer: style({
    color: 'inherit',
    display: 'flex',
    height: 'fit-content',
    textDecoration: 'none',
    width: 'fit-content',
    ':hover': {
      opacity: 0.8,
    },
  }),
  h1: style({
    fontSize: '2rem',
    fontWeight: 'bold',
  }),
}
