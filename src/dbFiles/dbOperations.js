const config    = require('./dbConfig')
const sql = require('mssql')

const getCancelledAmount = async() =>{
    try{
        let pool = await sql.connect(config);

        let cancelled = await pool.request().query("SELECT * FROM allcancelledFlights")


        console.log(cancelled)
        return cancelled
    }
    catch(error){
        console.log(error)
    }

}

const searchBarQuery = async(airline, destination, origin, month, day, year) =>{
    try{
        let pool = await sql.connect(config);

        let rows = await pool.request().query(`  SELECT TOP(10)* 

                                                FROM searchBar 
                                                WHERE   airline = '${airline}' 
                                                    AND destCode = '${destination}' 
                                                    AND originCode = '${origin}'
                                                    AND month = ${month}
                                                    AND dayofMonth = ${day}
                                                    AND year = ${year}`)
        console.log(rows)
        return rows
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    searchBarQuery,
    getCancelledAmount
}