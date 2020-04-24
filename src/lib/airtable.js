var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appmn2FX3jiTqRMuF');


/**
 * This function fetches all the data from airtable api 
 * one by one and appends the value to the data variable 
 * then returns it. 
 */
async function getAllData() {
    let data = []
    await base('Mess_Rating').select({
        view: 'Grid view'
    }).eachPage((records, fetchNextPage) => {
        records.forEach(record => {
            data.push(record.fields)
        })
        fetchNextPage();
    })

    return data
}

/**
 * This function writes a object inside the airtable database 
 */
async function addPoll(date, rating, comment) {
    await base('Mess_Rating').create([{
        "fields": {
            "Date": date,
            "Rating": `${rating}`,
            "Comment": comment
        }
    }], (err, records) => {
        if (err) {
            console.log(err)
            return false;
        }

        records.forEach(record => {
            console.log(record.getId())
        })
    })

    return true
}


module.exports = {
    base,
    getAllData,
    addPoll
}