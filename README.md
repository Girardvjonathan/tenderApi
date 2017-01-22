# tenderApi
```
npm install
npm start
```
Url :
<http://localhost:9002/api/tenders/>
```
// API Endpoint for tender CRUD
// GET ALL
// POST Create tender
getAllCreateOneEndpoint: '/tenders',
// GET a tender info including tenderer
// POST to subscribe a tenderers to a tender
getOneAddTendererEndpoint: '/tenders/:idproduct/',

// POST choose tenderer
tendererChooseEndpoint: '/tenders/:idproduct/:idcustomer'
```
# To make sure
* when creating a tender the current user is is in the form has ownerID
*
