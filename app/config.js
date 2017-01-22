const config = {
    // YaaS
    clientId: 'EdaqEf7bcpVr05365uKBT2MBK3bJv8XG',
    clientSecret: 'eZoTbbNqnnyg1Cco',
    scopes: 'hybris.price_manage hybris.price_manage hybris.price_delete_all hybris.product_create hybris.product_update hybris.product_delete hybris.category_create hybris.category_update hybris.category_delete hybris.product_delete_all hybris.customer_read hybris.customer_update hybris.customer_create hybris.customer_view_profile hybris.customer_edit_profile',
    projectId: 'musiquify',
    applicationId: 'tender.nodejsclient',

    // API Endpoint for tender CRUD
    // GET ALL
    // POST Create tender
    getAllCreateOneEndpoint: '/tenders',
    // GET a tender info including tenderer
    // POST to subscribe a tenderers to a tender
    getOneAddTendererEndpoint: '/tenders/:idproduct/',

    // POST choose tenderer
    tendererChooseEndpoint: '/tenders/:idproduct/:idcustomer',


    // DB
    dbPassword: 'mypass',
};

module.exports = {
        config: config,
};
