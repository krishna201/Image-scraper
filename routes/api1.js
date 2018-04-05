const express = require("express");
const router = express.Router();
const imgdata = require("../app/models/datadb");

const Scraper = require("images-scraper");
const google = new Scraper.Google();
const download = require("image-downloader");
const Jimp = require("jimp");


var imageArray;

router.get('/', (req, res) => {

    res.send("project");
});
router.get('/getkey', (req, res) => {
    console.log(req.query);
    res.json({
        success: 1
    });
});

var _loop = 0;
var imageKeyword;
router.get('/search', (reqj, resj) => {
    console.log(reqj.query);
    imageKeyword = reqj.query.keyword;
    google.list({
            keyword: imageKeyword,
            num: 1,
            detail: true,
            // nightmare: {
            //     show: true
            // }
        })
        .then(function(response) {

            imageArray = response;

            downloadimage(_loop);

            function downloadimage(_loop) {
                var name = Date.now();
                console.log(imageKeyword);
                var imagename = name + ".jpg";
                var newimages = new imgdata({
                    keyword: imageKeyword,
                    imageArray: [imagename]
                });

                var image_url = imageArray[_loop].url;
                Jimp.read(image_url, function(err, lenna) {
                    if (err) throw err;
                    console.log(lenna);
                    lenna
                        .resize(500, 500)
                        .quality(80)
                        .greyscale()
                        .write("./images/" + imagename);
                    if (lenna) {
                        imgdata.find({ keyword: imageKeyword },
                            function(err, keywordlength) {
                                if (keywordlength.length === 0) {
                                    newimages.save(function(err) {
                                        console.log(err);
                                        if (_loop < imageArray.length - 1) {
                                            _loop = _loop + 1;
                                            downloadimage(_loop);
                                        }
                                    });
                                } else {
                                    imgdata.update({ _id: keywordlength[0]._id }, {
                                            $push: {
                                                imageArray: imagename
                                            }
                                        },
                                        function(err, followingdoc) {
                                            console.log(followingdoc);
                                            if (
                                                _loop <
                                                imageArray.length - 1
                                            ) {
                                                _loop = _loop + 1;
                                                downloadimage(_loop);
                                            } else {
                                                resj.json({
                                                    success: 1,
                                                    Message: response
                                                });
                                            }
                                        }
                                    );
                                }
                            }
                        );
                    }
                });
            }

        }).catch(function(err) {
            console.log('err', err);
            resj.json({
                success: 0,
                errmsg: err
            });
        });

});




router.get("/get_all_data", (req, res) => {
    imgdata.find({}, function(err, result) {
        // console.log(result);
        if (!err) {
            res.json({
                success: 1,
                response: result
            });

        }
    });

});

router.get("/get_single_data", (req, res) => {
    console.log(req.query);
    var itemid = req.query.itemid;
    imgdata.find({ "_id": itemid }, function(err, itemresult) {
        if (!err) {
            res.send(
                itemresult
            );
        }
    });
});


//=========================================





module.exports = router;