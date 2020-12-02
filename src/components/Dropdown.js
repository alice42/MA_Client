import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'

function Dropdown(props) {
  const history = useHistory()
  const aaa = useParams()

  const paramsId = history.location.pathname.substring(1)

  const [value, setValue] = React.useState()

  React.useEffect(() => {
    if (paramsId && props.allRealtors) {
      const a = props.allRealtors.find(a => `${a.id}` === paramsId)
        ? paramsId
        : 'realtors'
      setValue(a)
    }
  })

  function getRealtorId(e) {
    const realtorId = e.target.value
    setValue(realtorId)
    return history.push(realtorId)
  }

  return (
    <div>
      {props.allRealtors && value && (
        <select defaultValue={value} onChange={getRealtorId}>
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

export default Dropdown
