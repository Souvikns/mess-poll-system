/**
 * Will show the graph on a daily basis 
 */

export default ({ data }) => {

    return (
        <div>
            <h1>Result Page</h1>
        </div>
    )
}


export const getStaticProps = async () => {
    const { getAllData } = require('../src/lib/airtable')
    const data = await getAllData()

    return { props: { data } }
}