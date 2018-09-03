const express=require('express');
const router=express.Router();
const variantService=require('./services/variant.service');
const categoryService=require('./services/category.service');
const productService=require('./services/product.service');
const userService=require('./services/user.service');
const personService=require('./services/person.service');
const growerService=require('./services/grower.service');
const seedService=require('./services/seed.service')
const verifyToken=require('./middleware/verify-token');
const seedInputService=require('./services/seedinput.service');
const seedTrialService=require('./services/trial.service');
const genericFieldService=require('./services/generic.field.service');
const observationHeadService=require('./services/observationhead.service');
const observationService=require('./services/observation.service');
const competitorService=require('./services/competitor.service');
const pmpService=require('./services/pmp.service');

router.post('/pmp',verifyToken,(rq,res)=>{
    pmpService.postPmp(rq,res);
})

router.put('/pmp',verifyToken,(rq,res)=>{
    pmpService.putPmp(rq,res);
})
router.delete('/pmp/:pmpId',verifyToken,(rq,res)=>{
    pmpService.deletePmp(rq,res);
})
router.get('/pmp/:pmpId',verifyToken,(rq,res)=>{
    console.log(rq.params);
    //TODO: getById metodu yazılacak
})
router.get('/pmp',verifyToken,(rq,res)=>{
    pmpService.getPmpByFilter(rq,res);
})


router.post('/category',verifyToken,(rq,res)=>{
    categoryService.postCategory(rq,res);
})
router.put('/category',verifyToken,(rq,res)=>{
    categoryService.putCategory(rq,res);
})

router.get('/categories',verifyToken,(rq,res)=>{
    categoryService.getCategories(rq,res);
})

router.get('/categories/:title',verifyToken,(rq,res)=>{
    categoryService.getCategoriesByTitle(rq,res);
})

router.delete('/category/:categoryId',verifyToken,(rq,res)=>{
    categoryService.deleteCategory(rq,res);
})


router.get('/products',verifyToken,(rq,res)=>{
    productService.getProducts(rq,res);
})

router.get('/products/:categoryId',verifyToken,(rq,res)=>{

    productService.getProductsByCatId(rq,res);
})
router.get('/products/:categoryId/:title',verifyToken,(rq,res)=>{

    productService.getProductsByTitle(rq,res);
})
router.post('/product/:categoryId',verifyToken,(rq,res)=>{
    productService.postProduct(rq,res)
})
router.put('/product',verifyToken,(rq,res)=>{
    productService.putProduct(rq,res)
})
router.delete('/product/:productId',verifyToken,(rq,res)=>{
    productService.deleteProduct(rq,res);
})

router.delete('/category/product/:categoryId',verifyToken,(rq,res)=>{
    productService.deleteProductByCategoryId(rq,res);
})

router.post('/variant',verifyToken,(rq,res)=>{
    variantService.postVariant(rq,res)
})
router.put('/variant',verifyToken,(rq,res)=>{
    variantService.putVariant(rq,res);
})
router.get('/variants',verifyToken,(rq,res)=>{
    variantService.getVariants(rq,res);
})

router.get('/variants/:productId',verifyToken,(rq,res)=>{
    variantService.getVariantsByProductId(rq,res);
})

router.get('/variants/:productId/:title',verifyToken,(rq,res)=>{
    variantService.getVariantsByTitle(rq,res);
})

router.delete('/variant/:variantId',verifyToken,(rq,res)=>{
    variantService.deleteVariant(rq,res);
})
router.delete('/category/variant/:categoryId',verifyToken,(rq,res)=>{
    variantService.deleteVariantByCategoryId(rq,res);
})
router.delete('/product/variant/:productId',verifyToken,(rq,res)=>{
    variantService.deleteVariantByProductId(rq,res);
})

router.post('/user',(rq,res)=>{
    userService.postUser(rq,res);
})

router.put('/user',verifyToken,(rq,res)=>{
    userService.putUser(rq,res);
})

router.put('/userAndPassword',verifyToken,(rq,res)=>{
    userService.putUserAndPassword(rq,res);
})

router.delete('/user/:userId',verifyToken,(rq,res)=>{
    userService.deleteUser(rq,res);
});
router.post('/authenticate',(rq,res)=>{
    userService.authenticateUser(rq,res);
})

router.get('/users',verifyToken,(rq,res)=>{
    userService.getUsers(rq,res);
})

router.get('/user/:username',verifyToken,(rq,res)=>{
    userService.getUser(rq,res);
})

router.post('/person',verifyToken,(rq,res)=>{
    personService.postPerson(rq,res);
})

router.put('/person',verifyToken,(rq,res)=>{
    personService.putPerson(rq,res);
})

router.get('/persons',verifyToken,(rq,res)=>{
    personService.getPersons(rq,res);
})

router.get('/personsByUser/:username',verifyToken,(rq,res)=>{
    personService.getPersonsByUser(rq,res);
})

router.delete('/person/:personId',verifyToken,(rq,res)=>{
    personService.deletePerson(rq,res);
})


router.post('/grower',verifyToken,(rq,res)=>{
    growerService.postGrower(rq,res);
})

router.put('/grower',verifyToken,(rq,res)=>{
    growerService.putGrower(rq,res);
})

router.get('/growers',verifyToken,(rq,res)=>{
    growerService.getGrowers(rq,res);
})

router.delete('/grower/:growerId',verifyToken,(rq,res)=>{
    growerService.deleteGrower(rq,res);
})


router.post('/seed',verifyToken,(rq,res)=>{
    seedService.postCategory(rq,res);
})
router.put('/seed',verifyToken,(rq,res)=>{
    seedService.putCategory(rq,res);
})

router.get('/seed',verifyToken,(rq,res)=>{
    seedService.getCategories(rq,res);
})

router.get('/seed/:title',verifyToken,(rq,res)=>{
    seedService.getCategoriesByTitle(rq,res);
})

router.get('/seed/Id/:CategoryId',verifyToken,(rq,res)=>{
    seedService.getCategoryById(rq,res)
})
router.get('/seedsByObservationHeadId/:observationHeadId',verifyToken,(rq,res)=>{
    seedService.getCategoriesByObservationHeadId(rq,res);
})

router.get('/seed/product',verifyToken,(rq,res)=>{
    seedService.getProducts(rq,res);
})

router.delete('/seed/:seedId',verifyToken,(rq,res)=>{
    seedService.deleteCategory(rq,res);
})
router.delete('/seed/product/:productId',verifyToken,(rq,res)=>{
    seedService.deleteProduct(rq,res);
})
router.put('/seed/product',verifyToken,(rq,res)=>{
    seedService.putProduct(rq,res);
})

//// Seed Input List

router.get('/seedinput',verifyToken,(rq,res)=>{
    seedInputService.geSeedInput(rq,res);
})
router.get('/seedinput/:categoryId/:trcode',verifyToken,(rq,res)=>{
    seedInputService.getSeedInputByCategoryId(rq,res)
})
router.post('/seedinput',verifyToken,(rq,res)=>{
    seedInputService.postSeedInput(rq,res);
})
router.put('/seedinput',verifyToken,(rq,res)=>{
    seedInputService.putSeedInput(rq,res);
})
router.delete('/seedinput/:seedInputId',verifyToken,(rq,res)=>{
    seedInputService.deleteSeedInput(rq,res);
})


//// Seed Trial List
router.get('/trial',verifyToken,(rq,res)=>{
    seedTrialService.getTrial(rq,res);
})

router.get('/trial/:categoryId',verifyToken,(rq,res)=>{
    seedTrialService.getTrialByCategoryId(rq,res);
})

router.get('/trial/:categoryId/:productId',verifyToken,(rq,res)=>{
    seedTrialService.getTrialByCategoryAndProductId(rq,res)
})

router.post('/trial',verifyToken,(rq,res)=>{
    seedTrialService.postSeedTrial(rq,res);
})
router.put('/trial',verifyToken,(rq,res)=>{
    seedTrialService.putSeedTrial(rq,res);
})
router.delete('/trial/:seedTrialId',verifyToken,(rq,res)=>{
    seedTrialService.deleteSeedTrial(rq,res);
})
router.get('/trialFilter',verifyToken,(rq,res)=>{
    seedTrialService.getTrialFilter(rq,res)
})


/// Generic Field 

router.post('/genericfield',verifyToken,(rq,res)=>{
    genericFieldService.postGenericField(rq,res);
})

router.put('/genericfield',verifyToken,(rq,res)=>{
    genericFieldService.putGenericField(rq,res);
})

router.get('/genericfields',verifyToken,(rq,res)=>{
    genericFieldService.getGenericFields(rq,res);
})

router.get('/genericfields/:groupCode',verifyToken,(rq,res)=>{
    genericFieldService.getGenericFieldsByGroupCode(rq,res);
})


router.delete('/genericfield/:genericFieldId',verifyToken,(rq,res)=>{
    genericFieldService.deleteGenericField(rq,res);
})


/// Observation Head

router.post('/observationhead',verifyToken,(rq,res)=>{
    observationHeadService.postObservationHead(rq,res);
})

router.put('/observationhead',verifyToken,(rq,res)=>{
    observationHeadService.putObservationHead(rq,res);
})

router.get('/observationheads',verifyToken,(rq,res)=>{
    observationHeadService.getObservationHeads(rq,res);
})

router.get('/observationhead/:observationHeadId',verifyToken,(rq,res)=>{
    observationHeadService.getGenericFieldsById(rq,res);
})


router.delete('/observationhead/:observationHeadId',verifyToken,(rq,res)=>{
    observationHeadService.deleteObservationHead(rq,res);
})

/// Observation 

router.get('/observationBySeed/:seedId/:productDetailId/:variantId',verifyToken,(rq,res)=>{
    observationService.getObservationsBySeed(rq,res);
})

router.put('/observation',verifyToken,(rq,res)=>{
    observationService.putObservation(rq,res);
})

router.post('/observation',verifyToken,(rq,res)=>{
    observationService.postObservation(rq,res);
})

router.delete('/observation/:observationId',verifyToken,(rq,res)=>{
    observationService.deleteObservation(rq,res);
})


// Competitor
router.get('/competitors',verifyToken,(rq,res)=>{
    competitorService.getCompetitor(rq,res);
})

router.get('/competitorById/:competitorId',verifyToken,(rq,res)=>{
    competitorService.getCompetitorById(rq,res);
})

router.get('/competitorByTitle/:title',verifyToken,(rq,res)=>{
    competitorService.getCompetitorByTitle(rq,res);
})

router.post('/competitor',verifyToken,(rq,res)=>{
    competitorService.postCompetitor(rq,res);
})

router.put('/competitor',verifyToken,(rq,res)=>{
    competitorService.putCompetitor(rq,res);
})

router.delete('/competitor/:competitorId',verifyToken,(rq,res)=>{
    competitorService.deleteCompetitor(rq,res);
})

module.exports=router;