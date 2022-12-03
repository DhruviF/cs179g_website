const sqlConfig ={
    user:'',
    password:'',
    server:'',
    databse:'',
    TrustServerCertificate:'true',
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        instancename: '',
        trustServerCertificate: true,
        requestTimeout:100000
      },
};

module.exports = sqlConfig
