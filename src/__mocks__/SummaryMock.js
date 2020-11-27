export const employeeDataMock = [
  {
    detailedDays: [],
    fullname: 'Raúl',
    rawHours: 'PT23400S',
    weekHours: '06:30',
    weekNumber: 41,
    weekPay: 449
  },
  {
    detailedDays: [],
    fullname: 'Agustina',
    rawHours: 'PT234003',
    weekHours: '06:00',
    weekNumber: 41,
    weekPay: 50
  }
]

export const totalDataMock = {
  hours: '12:30',
  pay: 499,
  weekNumber: 41
}

export const fetchedInitialData = {
  data: {
    body: {
      detailsPerEmployee: employeeDataMock,
      ...totalDataMock
    }
  }
}

export const fetchedSelectedDate = {
  data: {
    body: {
      detailsPerEmployee: employeeDataMock.map(employee => {
        return { ...employee, weekNumber: 31 }
      }),
      hours: '12:30',
      pay: 499,
      weekNumber: 31
    }
  }
}

export const fetchedYearData = {
  data: {
    body: {
      detailsPerEmployee: [
        {
          fullname: 'Raúl',
          rawHours: 'PT23400S',
          hours: '06:30',
          pay: 449
        },
        {
          fullname: 'Agustina',
          rawHours: 'PT234003',
          hours: '06:00',
          pay: 50
        }
      ],
      hours: '12:30',
      pay: 499,
      periodNumber: 2020
    }
  }
}
