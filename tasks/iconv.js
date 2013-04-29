/*
 * grunt-iconv
 * https://github.com/amdgigabyte/grunt-iconv
 *
 * Copyright (c) 2013 乔福
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    var fs = require('fs');

    grunt.registerMultiTask('iconv', 'change file encoding', function() {

        var f_charset,t_charset;

        this.data.options = this.data.options || {};
        f_charset = this.data.options.from_charset || 'utf8';
        t_charset = this.data.options.to_charset || 'utf8';

        this.files.forEach(function(files){
            files.src.forEach(function(file){
                var buffer = grunt.file.read(file, {
                    encoding: f_charset
                });

                fs.writeFileSync(file, buffer, t_charset);
            });
        });

    });

};
