import { style } from '@vanilla-extract/css'

export const styles = {
  section: style({
    marginTop: '1rem',
    marginLeft: '0.75rem',
    marginRight: '0.75rem',
  }),
  h2: style({
    fontSize: '1rem',
    fontWeight: 'bold',
    display: 'block',
    marginTop: '0',
    marginBottom: '0.5rem',
  }),
  input: style({
    fontSize: '1rem',
    border: '1px solid #ccc',
    height: '2.25rem',
    width: '90%',
    borderRadius: '0.25rem',
    paddingRight: '0.625rem',
    paddingLeft: '0.625rem',
    '@media': {
      'screen and (min-width: 1024px)': {
        flex: 'none',
        width: '20rem',
      },
    },
  }),
  inputBox: style({
    fontSize: '1rem',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    backgroundColor: 'white',
    borderRadius: '0.125rem',
    paddingTop: '0.125rem',
    paddingRight: '0.625rem',
    paddingLeft: '0.625rem',
    position: 'absolute',
    width: 'calc(90% - 6.25rem)',
  }),
  inputContainer: style({
    display: 'flex',
    flexDirection: 'row',
  }),
  inputWrapper: style({
    flex: 1,
  }),
  button: style({
    fontSize: '1rem',
    border: '1px solid #ccc',
    width: '5rem',
    height: '2.5rem',
    borderRadius: '0.25rem',
    marginLeft: '0.5rem',
    backgroundColor: '#ff6f61',
    color: 'white',
    cursor: 'pointer',
    ':hover': {
      opacity: 0.8,
    },
  }),
  error: style({
    color: 'red',
    fontSize: '1rem',
    margin: 0,
  }),
  errorContainer: style({
    marginTop: '0.5rem',
    height: '1.5rem',
  }),
}
