const { mutiplemongooseToObject } = require('../../util/mongoose');
const Course = require('../models/courseModel')

class SiteController {
   // [GET] /home
   home(req, res, next) {
      Course.find({})
         .then(courses => {
            res.render('home', {
            courses: mutiplemongooseToObject(courses)
            });
         })
         .catch(next);
   }

   // [GET] /search
   search(req, res) {
      res.render('search');
   }
}

module.exports = new SiteController();
