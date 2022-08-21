const path = require('path');

// home page controller 

const showHomePage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
};

const showAboutPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/about.html'));
};

const showArchivePage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/archive.html'));
};

const showGalleryPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/gallery.html'));
};

const showMenuPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/menu.html'));
}

const showNewsPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/news.html'));
};

const showReservationPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/reservation.html'));
};

const showLocationPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/location.html'));
};

const showStaffPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/staff.html'));
}





// export module
module.exports = {
    showHomePage,
    showAboutPage,
    showArchivePage,
    showGalleryPage,
    showMenuPage,
    showNewsPage,
    showReservationPage,
    showLocationPage,
    showStaffPage
}