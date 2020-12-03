export const todayStr = new Date().toISOString().replace(/T.*$/, '')

export const dateString = when => {
  if (new Date(when).getDate() === new Date(todayStr).getDate() - 1)
    return 'Hier'
  else if (new Date(when).getDate() === new Date(todayStr).getDate()) {
    return new Date(when).toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit'
    })
  } else
    return new Date(when).toLocaleString(navigator.language, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    })
}

export const daysFromToday = endDate => {
  const diffInMs = new Date(endDate) - new Date(todayStr)
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24)
  const pluralDays = Math.abs(diffInDays) > 1 ? 'days' : 'day'
  return Math.sign(diffInDays) < 0
    ? `${Math.abs(diffInDays)} ${pluralDays} ago`
    : Math.abs(diffInDays) === 0
    ? `Today`
    : `${diffInDays} ${pluralDays} left`
}

export const shortDate = date => {
  const a = new Date(date)
  const newDate = a.toLocaleString('default', {
    day: 'numeric',
    month: 'short'
  })
  return newDate
}
