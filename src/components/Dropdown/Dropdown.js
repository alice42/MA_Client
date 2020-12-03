import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Dropdown.styles'
import withWidth, { isWidthDown } from '@material-ui/core/withWidth'

const useStyles = makeStyles(styles)

function Dropdown(props) {
  const classes = useStyles()
  const history = useHistory()
  const paramsRealtorId = history.location.pathname.split('/')[2]

  const [value, setValue] = React.useState()

  React.useEffect(() => {
    if (paramsRealtorId && props.allRealtors) {
      const realtorId = props.allRealtors.find(
        a => `${a.id}` === paramsRealtorId
      )
        ? paramsRealtorId
        : 'realtors'
      setValue(realtorId)
    }
    // else if (!paramsRealtorId && props.allRealtors) {
    //   const realtorId = props.allRealtors[0]
    //   setValue(realtorId)
    // history.push(`/realtors/${props.allRealtors[0].id}/messages`)
    // }
  })

  function getRealtorId(e) {
    const realtorId = e.target.value
    setValue(realtorId)
    return history.push(`/realtors/${realtorId}/messages`)
  }
  if (isWidthDown('sm', props.width)) {
    return (
      <div>
        {props.allRealtors && value && (
          <select
            className={classes.selectMobile}
            defaultValue={value}
            onChange={getRealtorId}
          >
            {value === 'realtors' && (
              <option value={'realtors'}>realtors</option>
            )}
            {props.allRealtors.map(realtor => {
              return (
                <option key={realtor.id} value={realtor.id}>
                  {realtor.name}
                </option>
              )
            })}
          </select>
        )}
      </div>
    )
  }
  return (
    <div>
      {props.allRealtors && value && (
        <select
          className={classes.select}
          defaultValue={value}
          onChange={getRealtorId}
        >
          {value === 'realtors' && <option value={'realtors'}>realtors</option>}
          {props.allRealtors.map(realtor => {
            return (
              <option key={realtor.id} value={realtor.id}>
                {realtor.name}
              </option>
            )
          })}
        </select>
      )}
    </div>
  )
}

export default withWidth()(Dropdown)
