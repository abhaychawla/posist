var express = require('express');
var router = express.Router();

var Node = require('../models/nodeModel');

//Add node
router.get('/add', ensureAuthentication, function(req, res) {
  res.render('add_node', {
    title: 'Add Node'
  });
});

router.post('/add', ensureAuthentication, function(req, res) {
  var node = new Node(req.body);
  node.save(function(err, node) {
    if(err)
      console.log(err);
    else
      res.redirect('/');
  });
});

//View Node
router.get('/:id', ensureAuthentication, function(req, res) {
  Node.findById(req.params.id, function(err, node) {
    if(err)
      console.log(err);
    else {
      res.render('node');
    }
  });
});

//Edit Node
router.get('/edit/:id', ensureAuthentication, function(req, res) {
  Article.findById(req.params.id, function(err, node) {
    if(article.author != req.user._id) {
      res.redirect('/');
    }
    else {
      res.render('edit_article', {
        title: 'Edit Article',
        article: article
      });
    }
  });
});

router.post('/edit/:id', ensureAuthentication, function(req, res) {
  var article = req.body;
  var id = {_id: req.params.id};
  Article.update(id, article, function(err) {
    if(err)
      console.log(err);
    else
      res.redirect('/');
  });
});

//Delete Article
router.delete('/:id', ensureAuthentication, function(req, res) {
  var id = {_id: req.params.id};
  Article.remove(id, function(err) {
    if(err)
      console.log(err);
    else
      res.send('success');
  });
});

//Access Control
function ensureAuthentication(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  else {
    res.redirect('/user/login');
  }
}

module.exports = router;
