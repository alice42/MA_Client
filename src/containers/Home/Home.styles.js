export default theme => ({
  rootMobile: { height: '100vh', padding: '10px' },
  rootDesktop: {
    ...theme.flexColumnCenter,
    width: 'inherit',
    padding: theme.spacing(1)
  },
  gridTitle: {
    width: 'inherit',
    height: '18vh',
    marginBottom: theme.spacing(1)
  },
  gridContent: {
    width: 'inherit',
    height: '68vh'
  },
  paper: {
    height: 'inherit'
  },
  section: {
    ...theme.flexColumnCenter,
    opacity: '0.5',
    marginTop: '38vh'
  },
  messagelist: {
    height: 'calc(100vh - 60px)'
  },
  '.MuiGrid-container': {
    marginTop: '10vh'
  }
})
