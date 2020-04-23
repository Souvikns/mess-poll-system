var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appmn2FX3jiTqRMuF');


exports.getAllData = async() =>{
    let data = []
    await base('Mess_Rating').select({
        view: 'Grid view'
    }).eachPage((records,fetchNextPage)=>{
        records.forEach(record=>{
            data.push(record.fields)
        })
        fetchNextPage();
    })

    return data
}
