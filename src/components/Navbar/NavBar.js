import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Navbar.styles'
import { ClickAwayListener } from '@material-ui/core'
import { ReactComponent as Logo } from '../../assets/logo-meilleursagentspro-neg.svg'
import withWidth, { isWidthDown } from '@material-ui/core/withWidth'
import Menu from './Menu'
import Notifications from './Notifications'
import { Link, withRouter, useHistory } from 'react-router-dom'

const useStyles = makeStyles(styles)

const Navbar = props => {
  const classes = useStyles()
  const history = useHistory()

  const realtorId = Number(props.location.pathname.split('/')[2])

  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState()

  React.useEffect(() => {
    if (isNaN(realtorId) && realtorId) history.push(`/`)
    else {
      const idExists =
        props.allRealtors && props.allRealtors.find(a => a.id === realtorId)
      idExists ? setSelectedValue(idExists.name) : setSelectedValue()
    }
  })

  const handleClickValue = name => {
    setSelectedValue(name)
    setOpen(false)
    props.dataActions.cleanMessage()
  }

  const openDropdown = e => setOpen(!open)
  const handleClickAway = e => {
    e.preventDefault()
    setOpen(false)
  }
  if (isWidthDown('sm', props.width)) {
    let classesLogo = classes.logo
    let classesNotif = classes.notifications
    let classesList = classes.dropDownListWrapper
    let classesWrapper = classes.dropDownWrapper
    if (isWidthDown('xs', props.width)) {
      classesLogo = classes.logoMobile
      classesNotif = classes.notificationsMobile
      classesList = classes.dropDownListWrapperMobile
      classesWrapper = classes.dropDownWrapperMobile
    }
    return (
      <>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Logo className={classesLogo} />
            <Notifications {...props} classesNotif={classesNotif} />
            <div className={classes.flex} />
          </Toolbar>
          <div className={`${classes.appBarSpacer} ${classesWrapper}`}>
            <Menu
              {...props}
              openDropdown={openDropdown}
              selectedValue={selectedValue}
            />
          </div>
        </AppBar>

        {open && (
          <div className={`${classes.appBarSpacer} ${classesList}`}>
            <ClickAwayListener onClickAway={handleClickAway}>
              <ul className={classes.listDropMobile}>
                {props.allRealtors &&
                  props.allRealtors.map((realtor, index) => (
                    <li
                      key={realtor.id}
                      value={realtor.id}
                      className={
                        index !== props.allRealtors.length - 1
                          ? classes.itemList
                          : classes.itemListLast
                      }
                    >
                      <Link
                        onClick={e => handleClickValue(realtor.name)}
                        to={`/realtor/${realtor.id}`}
                        key={realtor.id}
                        className={classes.link}
                      >
                        <img
                          className={classes.imgLink}
                          src={`${realtor.logo}`}
                        />
                        <div className={classes.textOverflow}>
                          {realtor.name}
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </ClickAwayListener>
          </div>
        )}
      </>
    )
  }

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Logo className={classes.logo} />
          <Notifications {...props} classesNotif={classes.notifications} />
          <div className={classes.flex} />
        </Toolbar>
        <div className={`${classes.appBarSpacer} ${classes.dropDownWrapper}`}>
          <Menu
            {...props}
            openDropdown={openDropdown}
            selectedValue={selectedValue}
          />
        </div>
      </AppBar>
      {open && (
        <div
          className={`${classes.appBarSpacer} ${classes.dropDownListWrapper}`}
        >
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <ul className={classes.listDropDown}>
              {props.allRealtors &&
                props.allRealtors.map((realtor, index) => {
                  return (
                    <li
                      key={realtor.id}
                      value={realtor.id}
                      className={
                        index !== props.allRealtors.length - 1
                          ? classes.itemList
                          : classes.itemListLast
                      }
                    >
                      <Link
                        onClick={e => handleClickValue(realtor.name)}
                        to={`/realtor/${realtor.id}`}
                        key={realtor.id}
                        className={classes.link}
                      >
                        <img
                          className={classes.imgLink}
                          src={`${realtor.logo}`}
                        />
                        <div className={classes.textOverflow}>
                          {realtor.name}
                        </div>
                      </Link>
                    </li>
                  )
                })}
            </ul>
          </ClickAwayListener>
        </div>
      )}
    </>
  )
}

const NavbarrWithRouter = withRouter(Navbar)
export default withWidth()(NavbarrWithRouter)
