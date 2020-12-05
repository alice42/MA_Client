export default theme => ({
  flex: {
    flexGrow: 1
  },
  appBar: {
    justifyContent: 'space-between',
    background: '#1B5098',
    display: 'flex',
    flexDirection: 'row'
  },
  logo: {
    paddingTop: '3px'
  },
  menuNavBarDesktop: {
    display: 'flex',
    alignItems: 'center'
  },
  menuNavBarMobile: {
    display: 'flex',
    alignItems: 'center'
  },
  notifications: {
    background: '#7ED322',
    color: 'white',
    padding: '1px 10px 1px 10px',
    margin: '0px 0px 0px 10px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center'
  },
  dropDownWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 45px 0 20px',
    background: '#114080',
    borderLeft: '2px solid white'
  },
  dropDownListWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    marginTop: '13vh'
  },
  listDropDown: {
    color: 'white',
    width: '275px',
    background: '#114080',
    padding: '0',
    borderRight: '1px solid white',
    borderLeft: '1px solid white',
    borderBottom: '1px solid white',
    borderRadius: '5px'
  },
  imgLink: {
    height: '25px',
    paddingRight: '18px'
  },
  link: {
    color: 'white',
    display: 'flex',
    alignItems: 'center'
  },
  itemList: {
    borderBottom: '1px solid white',
    listStyle: 'none',
    padding: '10px'
  },
  itemListLast: {
    listStyle: 'none',
    padding: '10px'
  },
  textOverflow: {
    width: '150px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
})
