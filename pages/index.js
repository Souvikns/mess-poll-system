import { useState } from 'react'
import tinyTime from 'tinytime'
import {
    makeStyles,
    Card,
    Grid,
    TextField,
    Container,
    Button
} from '@material-ui/core'

import { Rating } from '@material-ui/lab'

import {addPoll} from '../src/lib/airtable'

// custom made styles 
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(10)
    },
    card: {
        padding: theme.spacing(2),
    },
    space: {
        marginTop: theme.spacing(10)
    },
    textField: {
        width: theme.spacing(100)
    }
}))

export default () => {

    const classes = useStyles();
    const [value, setValue] = useState(0)
    const [comment, setComment] = useState('')

    return (
        <div>

            <Container maxWidth="sm">
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
            </Container>

            <Container className={classes.space} />

            <Container>
            <center>
                <Rating value={value} onChange={(event, newValue) => {
                    setValue(newValue)
                }} />
            </center>
            </Container>

            <Container className={classes.space} />

            <Container>
            <center>
                <TextField value={comment} onChange={
                    (event, newValue) => {
                        setComment(event.target.value)
                    }
                } label="Comment" className={classes.textField} />
            </center>
            </Container>

            <Container className={classes.space} />

            <Container>
                <center>
                    <Button variant="contained" color="primary" onClick={(evt)=>{
                        evt.preventDefault()
                        const date = new Date()
                        addPoll(date.toUTCString,value,comment).then(check=>{
                            if(!check){
                                console.log("fail")
                            }
                            console.log("success")
                        }).catch(err=>{
                            console.log(err)
                        })
                        }} >Submit</Button>
                </center>
            </Container>
        </div>
    )
}

export const getStaticProps = async () => {
    return { props: {} }
}