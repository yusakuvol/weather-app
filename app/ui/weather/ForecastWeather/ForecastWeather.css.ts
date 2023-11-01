import { style } from '@vanilla-extract/css'

export const styles = {
  container: style({
    margin: '0.75rem',
    marginTop: '2.5rem',
  }),
  h2: style({
    fontSize: '1rem',
    fontWeight: 'bold',
    margin: 0,
  }),
  content: style({
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '0.75rem',
    overflowX: 'auto',
  }),
  tableContainer: style({
    width: '100%',
    borderCollapse: 'collapse',
    whiteSpace: 'nowrap',
  }),
  th: style({
    padding: '0.75rem',
  }),
  td: style({
    padding: '0.75rem',
  }),
}
