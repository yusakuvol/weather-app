import { style } from '@vanilla-extract/css'

export const styles = {
  container: style({
    margin: '0.75rem',
  }),
  h2: style({
    fontSize: '1rem',
    fontWeight: 'bold',
    margin: 0,
  }),
  content: style({
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0.75rem',
  }),
  locationName: style({
    margin: 0,
    textAlign: 'center',
  }),
  contentImage: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  temperature: style({
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: 0,
  }),
  condition: style({
    margin: 0,
    textAlign: 'center',
  }),
  informationContainer: style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
  }),
  hr: style({
    width: '100%',
    backgroundColor: '#ccc',
  }),
}
