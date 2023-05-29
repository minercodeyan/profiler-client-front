export default function (instance) {
    return {
        getTimeMetricBetweenDates(dateObj) {
            return  instance.post('/metrics/timed-metrics/between-dates',dateObj)
                .then(response => {
                    return response.data
                })
        },
    }
}