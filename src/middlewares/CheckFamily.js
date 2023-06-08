import Models from '../database/models';

const CheckFamily = async (req, res, next) => {
	const { name } = req.body;
	const { Families } = Models;
	const found = await Families.findOne({ where: { name } });
	if (found) {
		 req.family = found
		 return next()
	}
   req.family = null
	next();
};

export default CheckFamily;
