import Models from '../database/models';

const CheckDistrict = async (req, res, next) => {
	const { districtName } = req.body;
	const { Districts } = Models;
	const found = await Districts.findOne({ where: { districtName:districtName } });
	if (found) {
		 req.district = found
		 return next()
	}
   req.district = null
	next();
};

export default CheckDistrict;
