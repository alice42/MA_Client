import { dateString } from './utils'

test('Date Today', () => {
  const todayTime = new Date().toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit'
  })
  expect(dateString(new Date())).toBe(todayTime)
})

test('Date Yesterday', () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  expect(dateString(yesterday)).toBe('Hier')
})

test('Date Week day', () => {
  let shouldBe
  const today = new Date().toLocaleString(navigator.language, {
    weekday: 'long'
  })
  const weekDay = new Date()
  weekDay.setDate(weekDay.getDate() - 3)

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  const dayToday = days.indexOf(today) - 3
  if (dayToday < 0) shouldBe = days[days.length + dayToday]
  else if (dayToday > 0) shouldBe = days[dayToday]
  else shouldBe = days[0]

  expect(dateString(weekDay)).toBe(shouldBe)
})
