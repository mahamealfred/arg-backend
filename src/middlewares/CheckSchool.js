import Models from '../database/models';

const CheckSchool = async (req, res, next) => {
	const { name } = req.body;
	const { Schools } = Models;
	const found = await Schools.findOne({ where: { name } });
	if (found) {
		 req.school = found
		 return next()
	}
   req.school = null
	next();
};

export default CheckSchool;