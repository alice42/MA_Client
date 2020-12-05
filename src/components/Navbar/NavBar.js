import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Navbar.styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { ClickAwayListener } from '@material-ui/core'
import { ReactComponent as Logo } from '../../assets/logo-meilleursagentspro-neg.svg'

import Menu from './Menu'
import Notifications from './Notifications'
import { Link, withRouter } from 'react-router-dom'

const useStyles = makeStyles(styles)

const Navbar = props => {
  const classes = useStyles()

  const { realtorId } = props.location.pathname.split('/')[1]

  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    console.log(realtorId)
    if (realtorId && props.realtor.id && !props.realtor.isFetching) {
      setValue(props.realtor.id)
    } else {
      setValue('')
    }
  })

  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState()

  const handleClickValue = name => {
    setSelectedValue(name)
    setOpen(false)
  }

  const openDropdown = e => setOpen(!open)

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Logo className={classes.logo} />
          <Notifications {...props} />
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
                  console.log(index === props.allRealtors.length - 1)
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
export default NavbarrWithRouter
