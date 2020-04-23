import { useState } from 'react'
import tinyTime from 'tinytime'
import {
    makeStyles,
    Card,
    Grid,
    TextField
} from '@material-ui/core'

import { Rating } from '@material-ui/lab'

// custom made styles 
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(10)
    },
    card: {
        padding: theme.spacing(2),
    }
}))

export default () => {

    const classes = useStyles();
    const [value, setValue] = useState(0)
    const [comment, setComment] = useState('')

    return (
        <div>
            <Grid container className={classes.root} spacing={0}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={1}>
                        <Grid item>
                            <Card className={classes.card}>
                                {tinyTime('{DD}').render(new Date)}
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card className={classes.card}>
                                {tinyTime('{MMMM}').render(new Date)}
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card className={classes.card}>
                                {tinyTime('{YYYY}').render(new Date)}
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

            {
                /**
                    value of the rating bar is binded with 
                    the value object from the hook 
                 */
            }
            <center>
                <Rating value={value} onChange={(event, newValue) => {
                    setValue(newValue)
                }} />
            </center>

            <center>
                <TextField value={comment} onChange={
                    (event, newValue) => {
                        setComment(newValue)
                    }
                } label="Comment" />
            </center>
        </div>
    )
}

export const getStaticProps = async () => {
    return { props: {} }
}