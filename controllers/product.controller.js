const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
};

exports.product_create = async function (req, res) {
	 //res.send('Greetings from the Test controller123!');
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );
  try {
     await product.save();
     res.send(product);
   } catch (err) {
     res.status(500).send(err);
   }
};

exports.product_details = async function (req, res) {
  Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = async function (req, res) {
	try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    await Product.save();
    res.send(product);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.product_delete = async function (req, res) {
	try {
    const product = await Product.findByIdAndDelete(req.params.id);
   if (!product) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
};

