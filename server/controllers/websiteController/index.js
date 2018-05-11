exports.homePage = (req, res) => {
	res.render('website/homePage', { message: 'Homepage website' });
};

exports.infoPage = (req, res) => {
	res.render('website/infoPage');
};
