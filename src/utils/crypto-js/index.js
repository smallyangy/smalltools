(function (root, factory) {
    module.exports = exports = factory(
        require('./core'),
        require('./x64-core'),
        require('./lib-typedarrays'),
        require('./enc-base64'),
        require('./md5'),
        require('./sha1'),
        require('./hmac'),
        require('./cipher-core'),
        require('./mode-ecb'),
        require('./aes')
    );
}(this, (CryptoJS) => CryptoJS));
