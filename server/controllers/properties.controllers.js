const {
  selectProperties,
  selectReviewsById,
} = require("../models/properties.models");

exports.getProperties = async (req, res, next) => {
  const { maxprice, minprice, sort, order, host } = req.query;
  try {
    const properties = await selectProperties(
      maxprice,
      minprice,
      sort,
      order,
      host
    );
    res.status(200).send({ properties });
  } catch (error) {
    next(error);
  }
};

exports.getReviewsById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const [reviews, average_rating] = await selectReviewsById(id);
    res.status(200).send({ reviews, average_rating });
  } catch (error) {
    next(error);
  }
};
