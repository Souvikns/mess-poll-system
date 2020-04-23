import tinyTime from 'tinytime'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        minWidth: 275
    }
})

export default () => {

    const classes = useStyles();

    return (
        <div>
        </div>
    )
}

export const getStaticProps = async () => {
    const name = "Souvik"
    const date = new Date()
    let dateValue = date.toUTCString()
    return { props: { name, dateValue } }
}