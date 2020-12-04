import React from 'react'
import {
  useHistory,
  useRouteMatch,
  useParams,
  withRouter
} from 'react-router-dom'
import { compose } from 'redux'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Dropdown.styles'
import withWidth, { isWidthDown } from '@material-ui/core/withWidth'

const useStyles = makeStyles(styles)

const Dropdown = props => {
  const classes = useStyles()
  const history = useHistory()

  const { realtorId } = useParams()

  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    if (realtorId && props.realtor.id && !props.realtor.isFetching) {
      setValue(props.realtor.id)
    } else {
      setValue('')
    }
  })

  const getRealtorId = e => {
    const realtorId = e.target.value
    return history.push(`/realtors/${realtorId}`)
  }
  return (
    <div>
      <select
        // className={classes.select}
        defaultValue={value}
        onChange={getRealtorId}
      >
        <option value={''}>Toutes vos agences</option>
        {props.allRealtors &&
          props.allRealtors.map(realtor => {
            return (
              <option key={realtor.id} value={realtor.id}>
                {realtor.name}
              </option>
            )
          })}
      </select>
    </div>
  )
}

const DropdownWithRouter = withRouter(Dropdown)
export default DropdownWithRouter
