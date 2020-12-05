export default () => ({
  read: {
    color: 'black !important',
    opacity: '0.6'
  },
  unread: {},
  wrapper: {
    borderBottom: '1px solid lightgray'
  },
  itemMessage: {
    padding: '5px 10px 20px 10px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  iconItemMessage: {
    color: '#0074E4',
    width: '12%',
    textAlign: 'center'
  },
  contactMessageWrapper: {
    width: '76%',
    color: 'black'
  },
  nameMessage: {
    display: 'flex',
    alignItems: 'baseline',
    lineHeight: '1.5'
  },
  fontNameMessage: {
    fontSize: '16px',
    fontWeight: '500'
  },
  phoneNumber: {
    fontSize: '14px',
    fontWeight: '300',
    marginLeft: '3px'
  },
  subjectMessage: {
    fontSize: '12px'
  },
  bodyMessage: {
    fontSize: '14px',
    opacity: '0.6'
  },
  dateMessage: {
    color: '#008EEA',
    width: '12%',
    textAlign: 'center',
    fontSize: '10px'
  }
})
