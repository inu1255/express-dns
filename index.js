'use strict';
/**
 * Created Date: 2017-10-11 14:55:20
 * Author: inu1255
 * E-Mail: 929909260@qq.com
 * -----
 * Last Modified: 2017-10-11 15:05:28
 * Modified By: inu1255
 * -----
 * Copyright (c) 2017 gaomuxuexi
 */
const express = require("express");
const app = express();
const dns = require('dns');

app.get("/lookup/*", function(req, res) {
    const hostname = req.path.slice(8);
    if (!hostname) {
        res.json([]);
        return;
    }
    console.log(hostname);
    dns.resolve(hostname, function(err, addrs) {
        if (err) {
            res.json([]);
        } else {
            res.json(addrs);
        }
    });
});

app.listen(4843, "0.0.0.0", function() {
    console.log('Listening on http://0.0.0.0:4843');
});