var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appmn2FX3jiTqRMuF');


async function getAllData(){
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


async function addPoll(date,rating,comment){
    await base('Mess_Rating').create([{
        "fields": {
            "Date": date,
            "Rating": rating,
            "Comment": comment
        }
    }],(err,records)=>{
        if(err){
            console.log(err)
            return false;
        }

        records.forEach(record=>{
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