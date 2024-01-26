const notFound = (req, res) => res.status(404).send("Route does not exist"); //Route error

module.exports = notFound;
