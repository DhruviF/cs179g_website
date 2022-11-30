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
    const result = await dbOperation.searchBarQuery('Envoy Air', 'LIT', 'ORD', req.body.month, 1, 2019)
    console.log(typeof(req.body.month))
    res.send({result})
})

// dbOperation.searchBarQuery('Envoy Air', 'LIT', 'ORD', 4, 1, 2019).then(res=>{
//     console.log(res.recordset)
// })
// dbOperation.getCancelledAmount().then(res=>{
//     console.log(res.recordset)
// })



app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`))