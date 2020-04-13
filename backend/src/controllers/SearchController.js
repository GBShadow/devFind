import Dev from '../models/Dev';
import parseArrayAsString from '../utils/parseStringAsArray';

export default {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseArrayAsString(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json({ devs });
  },
};
