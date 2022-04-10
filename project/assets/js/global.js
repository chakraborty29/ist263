// global constants
export const options = {
    maintainAspectRatio: false,
    animation: {
        duration: 2500
    },
    tooltips: {
        callbacks: {
          label: (tooltipItem, data) => {
            return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
          }
        }
      }
}
export const newConfig = (data) => {
    return {
        type: 'pie',
        data: data,
        options: options
    }
}

export const newChart = (id, data) => {
    const config = newConfig(data)
    return new Chart (
        document.getElementById(id),
        config
    )
}