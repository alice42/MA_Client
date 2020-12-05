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
  logoMobile: {
    transform: 'scale(0.8)',
    marginLeft: '-25px',
    marginRight: '-27px',
    marginTop: '4px'
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
  notificationsMobile: {
    transform: 'scale(0.8)',
    background: '#7ED322',
    color: 'white',
    padding: '1px 10px 1px 10px',
    margin: '0px 0px 0px 10px',
    borderRadius: '5px',
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
  dropDownWrapperMobile: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 45px 0 10px',
    background: '#114080',
    borderLeft: '2px solid white',
    width: '67px'
  },
  dropDownWrapperMedium: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 45px 0 10px',
    background: '#114080',
    borderLeft: '2px solid white',
    width: '97px'
  },
  dropDownListWrapper: {
    zIndex: '1',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    WebkitTransform: 'translateY(28%)',
    MozTransform: 'translateY(28%)'
  },
  dropDownListWrapperMobile: {
    zIndex: '1',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    WebkitTransform: 'translateY(22%)',
    MozTransform: 'translateY(22%)'
  },
  listDropDown: {
    color: 'white',
    width: '275px',
    background: '#114080',
    padding: '0',
    borderLeft: '2px solid white',
    borderBottom: '2px solid white',
    borderBottomLeftRadius: '5px'
  },
  listDropMobile: {
    color: 'white',
    width: '100%',
    background: '#114080',
    padding: '0',
    borderLeft: '2px solid white',
    borderRight: '2px solid white',
    borderBottom: '2px solid white',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px'
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
