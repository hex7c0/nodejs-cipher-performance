"use strict";
/**
 * @file nodejs-cipher-performance main
 * @module nodejs-cipher-performance
 * @package nodejs-cipher-performance
 * @subpackage main
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @copyright hex7c0 2014
 * @license GPLv3
 */

/*
 * initialize module
 */
// import
try {
    var crypto = require('crypto');
} catch (MODULE_NOT_FOUND) {
    console.error(MODULE_NOT_FOUND);
    process.exit(1);
}

/*
 * functions
 */
/**
 * main
 * 
 * @exports ciphers
 * @function ciphers
 * @param {String|Buffer} raw - Check README.md
 * @param {String} cipher - Check README.md
 * @param {String|Buffer} password - Check README.md
 * @param {String} encoding - Check README.md
 * @return {Object}
 */
module.exports = function ciphers(raw, cipher, password, encoding) {

    var out = crypto.createCipher(cipher, password);
    return out.update(raw, 'utf8', encoding) + out.final(encoding);
};
