const { filter, includes, size } = require('lodash')

let dateArray = []
let avgRatingPerDay = []

exports.chartPrep = (pols) => {
    pols.forEach(pol => {
        if (!includes(dateArray, pol.Date)) {
            dateArray.push(pol.Date)
            let data = filter(pols, (o) => o.Date === pol.Date)
            console.log(data)
            let count = 0
            let size = 0
            data.forEach(d => {
                count = count + parseInt(d.Rating)
                size++;
            })
            console.log(size)
            avgRatingPerDay.push((count) / (size))
        }
    })
    console.log(dateArray)
    console.log(avgRatingPerDay)

    return [dateArray,avgRatingPerDay]
}

exports.pieChartPrep = (pols) => {
    let rate_1 = filter(pols, (o) => o.Rating === '1')
    let rate_2 = filter(pols, (o) => o.Rating === '2')
    let rate_3 = filter(pols, (o) => o.Rating === '3')
    let rate_4 = filter(pols, (o) => o.Rating === '4')
    let rate_5 = filter(pols, (o) => o.Rating === '5')

    let polCount = [rate_1.length, rate_2.length, rate_3.length, rate_4.length, rate_5.length]

    console.log(polCount)
    return polCount
}