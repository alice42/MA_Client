import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Navbar.styles'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import withWidth, { isWidthDown } from '@material-ui/core/withWidth'
import { KeyboardArrowDown } from '@material-ui/icons'

const useStyles = makeStyles(styles)

function Menu(props) {
  const classes = useStyles()
  function toggleSelect() {
    if (store.classList[0] === 'hidden') {
      store.classList = 'viewfull'
    } else {
      store.classList = 'hidden'
    }
  }

  const handleDropDown = e => {
    props.openDropdown(e)
  }
  if (isWidthDown('sm', props.width)) {
    return (
      <div className={classes.menuNavBarMobile}>
        <AccountCircleIcon />
      </div>
    )
  }

  return (
    <>
      <div className={classes.menuNavBarDesktop}>
        <div>
          <AccountCircleIcon style={{ height: 'inherit' }} />
        </div>
        <div style={{ paddingLeft: '10px', lineHeight: '1.5', width: '160px' }}>
          <div className={classes.textOverflow}>Didier Martin</div>
          <div className={classes.textOverflow}>
            {props.selectedValue || ' Toutes vos agences'}
          </div>
        </div>
        <div>
          <KeyboardArrowDown
            style={{ height: 'inherit' }}
            onClick={e => handleDropDown(e)}
          />
        </div>
      </div>
    </>
  )
}

export default withWidth()(Menu)
