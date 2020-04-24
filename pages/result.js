/**
 * Will show the graph on a daily basis 
 */

import React from 'react'
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import { Container,makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    space: {
        marginTop: theme.spacing(15)
    }
}))

export default ({ data, pieChartData, barChartDate }) => {

    const classes = useStyles()

    return (
        <div>
            <Container>
                <center>
                <h1>Result Page</h1>
                </center>
            </Container>
            <Container>
                <Bar data={{
                    labels: barChartDate[0],
                    datasets: [{
                        label: 'Avarage rating',
                        data: barChartDate[1],
                        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)']
                    }]
                }} options={{
                    hover: {
                        animationDuration: 2,
                        axis: "x"
                    }
                }} height={100} height={100} />
            </Container>

            <Container className={classes.space} />

            <Container>
                <Doughnut data={{
                    labels: ["1", "2", "3", "4", "5"],
                    datasets: [{
                        label: 'sales',
                        data: pieChartData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ]
                    }]
                }} options={{
                    hover: {
                        animationDuration: 2,
                        axis: "x"
                    }
                }} height={100} height={100} />
            </Container>

            <Container className={classes.space} />

        </div>
    )
}


export const getStaticProps = async () => {
    const { getAllData } = require('../src/lib/airtable')
    const data = await getAllData()
    const { chartPrep, pieChartPrep } = require('../src/lib/util')
    const barChartDate = chartPrep(data)
    const pieChartData = pieChartPrep(data)

    return { props: { data, pieChartData, barChartDate } }
}