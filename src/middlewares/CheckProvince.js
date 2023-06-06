import Models from '../database/models';

const CheckProvince = async (req, res, next) => {
	const { provinceName} = req.body;
	const { Provinces } = Models;
	const found = await Provinces.findOne({ where: { provinceName:provinceName } });
	if (found) {
		 req.province = found
		 return next()
	}
   req.province = null
	next();
};

export default CheckProvince;
