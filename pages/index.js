import tinyTime from 'tinytime'
import {
    makeStyles,
    Typography,
    Container,
    Card,
    Grid,
    ThemeProvider
} from '@material-ui/core'

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
        </div>
    )
}

export const getStaticProps = async () => {
    const name = "Souvik"
    const date = new Date()
    let dateValue = date.toUTCString()
    return { props: { name, dateValue } }
}