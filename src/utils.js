export const dateString = when => {
  const date = new Date(when).getTime()
  const today = new Date()
  const yesterdayDate = new Date()
  yesterdayDate.setDate(yesterdayDate.getDate() - 1)
  const yesterday = new Date(yesterdayDate).getTime()
  const thisWeekDateMax = new Date()
  thisWeekDateMax.setDate(thisWeekDateMax.getDate() - 7)
  const thisWeek = new Date(thisWeekDateMax).getTime()

  if (new Date(when).toLocaleDateString() === today.toLocaleDateString()) {
    return new Date(when).toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit'
    })
  } else if (date === yesterday) {
    return 'Hier'
  } else if (date >= thisWeek) {
    const weekday = new Date(date).toLocaleDateString(navigator.language, {
      weekday: 'long'
    })

    return weekday
  } else
    return new Date(when).toLocaleString(navigator.language, {
      year: '2-digit',
      month: 'numeric',
      day: 'numeric'
    })
}

export const LongDate = date => {
  const a = new Date(date)
  const newDate = a.toLocaleTimeString('default', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
  return newDate
}
