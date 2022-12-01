const express = require('express')
const dbOperation = require('./src/dbFiles/dbOperations')
const cors = require('cors')

const API_PORT =  3001;

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.post('/api', async (req,res) =>{
    console.log('Called')
    const result = await dbOperation.searchBarQuery(
        req.body.airline, 
        req.body.destCode, 
        req.body.originCode, 
        req.body.month, 
        req.body.dayofMonth, 
        req.body.year)
    res.send(result.recordset[0])
})

// dbOperation.searchBarQuery('Envoy Air', 'LIT', 'ORD', 4, 1, 2019).then(res=>{
//     console.log(res.recordset)
// })
// dbOperation.getCancelledAmount().then(res=>{
//     console.log(res.recordset)
// })



app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`))