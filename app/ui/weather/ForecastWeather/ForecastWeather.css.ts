import { style } from '@vanilla-extract/css'

export const styles = {
  container: style({
    marginLeft: '0.75rem',
    marginRight: '0.75rem',
  }),
  h2: style({
    fontSize: '1rem',
    fontWeight: 'bold',
    margin: 0,
  }),
  content: style({
    backgroundColor: 'white',
    borderRadius: '0.5rem',
  }),
}
