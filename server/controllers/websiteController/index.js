exports.homePage = (req, res) => {
	res.render('website/homePage', { message: 'Homepage website' });
};

exports.zeroState = (req, res) => {
	res.render('website/zeroState', { message: 'Zero state' });
};
