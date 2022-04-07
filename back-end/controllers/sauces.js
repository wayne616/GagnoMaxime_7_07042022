const Saucemodels = require('../models/sauces');
const fs = require('fs');

exports.createsauces = (req, res, next) => {
  const sauceObject = JSON.parse(req.body.sauce);
  const Sauce = new Saucemodels({
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  Sauce.save()
    .then(() => res.status(201).json({ message: 'objet enregistré !' }))
    .catch(error => res.status(400).json({ error }));

};

exports.getOneSauces = (req, res, next) => {
  Saucemodels.findOne({ _id: req.params.id })
    .then((sauces) => { res.status(200).json(sauces); })
    .catch((error) => { res.status(404).json({ error: error }); });
};

exports.modifySauces = (req, res, next) => {
  const saucesObject = req.file ?
    {
      ...JSON.parse(req.body.sauce),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`


    } : { ...req.body };
  Saucemodels.updateOne({ _id: req.params.id }, { ...saucesObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteSauces = (req, res, next) => {
  Saucemodels.findOne({ _id: req.params.id })
    .then(sauces => {
      const filename = sauces.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        sauces.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};

exports.getAllSauces = (req, res, next) => {
  Saucemodels.find()
    .then((sauces) => { res.status(200).json(sauces); })
    .catch((error) => { res.status(400).json({ error: error }); });
};

exports.likes = (req, res, next) => {

  Saucemodels.findOne({ _id: req.params.id })
    .then((sauces) => {

      //like +1
      if (req.body.like === 1) {
        Saucemodels.updateOne(
          { _id: req.params.id },
          {
            $inc: { likes: +1 },
            $push: { usersLiked: req.body.userId }
          }
        )
          .then(() => res.status(201).json({ message: 'likes +1' }))
          .catch((error) => res.status(400).json({ error }));
      };

      //like -1

      if (sauces.usersLiked.includes(req.body.userId) && req.body.like === 0) {

        Saucemodels.updateOne(
          { _id: req.params.id },
          {
            $inc: { likes: -1 },
            $pull: { usersLiked: req.body.userId }
          }
        )
          .then(() => res.status(201).json({ message: 'likes 0' }))
          .catch((error) => res.status(400).json({ error }));
      };

      //dislikes + 1

      if (req.body.like === -1) {
        Saucemodels.updateOne(
          { _id: req.params.id },
          {
            $inc: { dislikes: 1 },
            $push: { usersDisliked: req.body.userId },
          }
        )
          .then(() => res.status(201).json({ message: 'dislikes +1' }))
          .catch((error) => res.status(400).json({ error }));

      };

      //dislikes -1

      if (sauces.usersDisliked.includes(req.body.userId) && req.body.like === 0) {
        Saucemodels.updateOne(
          { _id: req.params.id },
          {
            $inc: { dislikes: -1 },
            $pull: { usersDisliked: req.body.userId },
          }
        )
          .then(() => res.status(201).json({ message: 'dislikes 0' }))
          .catch((error) => res.status(400).json({ error }));
      };

    })
    .catch((error) => { res.status(404).json({ error: error }) });

};