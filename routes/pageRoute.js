const express = require('express');
const { showHomePage, showAboutPage, showArchivePage, showGalleryPage, showLocationPage, showMenuPage, showNewsPage, showReservationPage, showStaffPage } = require('../controllers/pageController');


// init router 
const router = express.Router();



// routes 
router.get('/', showHomePage);
router.get('/about', showAboutPage);
router.get('/archive', showArchivePage);
router.get('/gallery', showGalleryPage);
router.get('/menu', showMenuPage);
router.get('/news', showNewsPage);
router.get('/reservation', showReservationPage);
router.get('/location', showLocationPage);
router.get('/staff', showStaffPage);

// router.post('/reservation-order', (req, res) => {
//     res.status(200).json(req.body);
// })



// export router 
module.exports = router;