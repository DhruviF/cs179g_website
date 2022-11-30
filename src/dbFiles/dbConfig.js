const sqlConfig ={
    user:'group7',
    password:'group7',
    server:'LAPTOP-A3DJ90N5',
    databse:'cs179G',
    TrustServerCertificate:'true',
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        instancename: 'MSSQLSERVER01',
        trustServerCertificate: true,
        requestTimeout:100000
      },
};

module.exports = sqlConfig