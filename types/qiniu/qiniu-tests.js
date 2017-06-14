/// <reference types="qiniu" />
// test for qiniu.conf
function testConf() {
    qiniu.conf.ACCESS_KEY = 'Access_Key';
    qiniu.conf.SECRET_KEY = 'Secret_Key';
}
// test for qiniu.auth
function testAuth() {
    // test for auth.Mac
    var mac = new qiniu.auth.Mac(qiniu.conf.ACCESS_KEY, qiniu.conf.SECRET_KEY);
}
// test for qiniu.io
function testIo() {
    // test for PutExtra
    var putExtra = new qiniu.io.PutExtra();
    // test for PutRet
    var putRet = new qiniu.io.PutRet();
    // test for putReadable
    qiniu.io.putReadable('xxx', null, null, null, function (e, result, res) {
    });
    // test for put
    qiniu.io.put('xxx', null, 'test-data', null, function (e, result, res) {
    });
    // test for putWithoutKey
    qiniu.io.putWithoutKey('xxx', 'test-data', null, function (e, result, res) {
    });
    // test for putFile
    qiniu.io.putFile('xxx', null, 'tslint.json', null, function (e, result, res) {
    });
    // test for putFileWithoutKey
    qiniu.io.putFileWithoutKey('xxx', 'tslint.json', null, function (e, result, res) {
    });
}
// test for qiniu.util
function testUtil() {
    // test for urlsafeBase64Encode
    qiniu.util.urlsafeBase64Encode(null);
    // test for base64ToUrlSafe
    qiniu.util.base64ToUrlSafe('https://example.com');
    // test for hmacSha1
    qiniu.util.hmacSha1(null, 'test');
    // test for generateAccessToken
    qiniu.util.generateAccessToken('https://example.com');
    // test for isQiniuCallback
    qiniu.util.isQiniuCallback('/key', 'test-data', 'test-auth');
}
// test for qiniu.zone
function testZone() {
    qiniu.zone.up_host('test', { ACCESS_KEY: 'xx', SECRET_KEY: 'ss' });
}
// test for qiniu.rsf
function testRsf() {
    qiniu.rsf.listPrefix('test');
}
// test for qiniu.rpc
function testRpc() {
    // test for postMultipart
    qiniu.rpc.postMultipart('https://up.qbox.me', 'test');
    // test for postWithForm
    qiniu.rpc.postWithForm('https://up.qbox.me', 'test');
    // test for postWithoutForm
    qiniu.rpc.postWithoutForm('https://up.qbox.me');
}
// test for qiniu.fop
function testFop() {
    // test for ImageView
    var imageView = new qiniu.fop.ImageView(1, 1, 1, 1);
    imageView.makeRequest('https://up.qbox.me');
    // test for ImageInfo
    var imageInfo = new qiniu.fop.ImageInfo();
    imageInfo.makeRequest('https://up.qbox.me');
    // test for Exif
    var exif = new qiniu.fop.Exif();
    exif.makeRequest('https://up.qbox.me');
    //  test for fop
    qiniu.fop.pfop('test', 'test', 'test');
}
// test for qiniu.rs
function testRs() {
    // test for Client
    var client = new qiniu.rs.Client();
    // test for Client.stat
    client.stat('test', 'test', function (e, result, res) {
    });
    // test for Client.remove
    client.remove('test', 'test', function (e, result, res) {
    });
    // test for Client.move
    client.move('test-src', 'test-src', 'test-dest', 'test-dest', function (e, result, res) {
    });
    // test for Client.forceMove
    client.forceMove('test-src', 'test-src', 'test-dest', 'test-dest', true, function (e, result, res) {
    });
    // test for Client.copy
    client.copy('test-src', 'test-src', 'test-dest', 'test-dest', function (e, result, res) {
    });
    // test for Client.forceCopy
    client.forceCopy('test-src', 'test-src', 'test-dest', 'test-dest', true, function (e, result, res) {
    });
    // test for Client.fetch
    client.fetch('https://up.qbox.me', 'test', 'test', function (e, result, res) {
    });
    // test for Client.batchStat
    client.batchStat(['data'], function (e, result, res) {
    });
    // test for Client.batchDelete
    client.batchDelete(['data'], function (e, result, res) {
    });
    // test for Client.batchMove
    client.batchMove(['data'], function (e, result, res) {
    });
    // test for Client.forceBatchMove
    client.forceBatchMove(['data'], true, function (e, result, res) {
    });
    // test for Client.batchCopy
    client.batchCopy(['data'], function (e, result, res) {
    });
    // test for Client.forceBatchMove
    client.forceBatchCopy(['data'], true, function (e, result, res) {
    });
    // test for Entry
    var entry = new qiniu.rs.Entry('xx', 1, 1);
    // test for EntryPath
    var entryPath = new qiniu.rs.EntryPath('test', 'test');
    entryPath.encode();
    entryPath.toStr('x');
    // test for EntryPathPair
    var entryPathPair = new qiniu.rs.EntryPathPair('xxx', 'xxx');
    entryPathPair.toStr('x', false);
    // test for BatchItemRet
    var batchItemRet = new qiniu.rs.BatchItemRet('xx', 0);
    // test for BatchStatItemRet
    var batchStatItemRet = new qiniu.rs.BatchStatItemRet('xx', 'xxx', 0);
    // test for PutPolicy
    var putPolicy = new qiniu.rs.PutPolicy();
    putPolicy.token();
    putPolicy.getFlags();
    // test for PutPolicy2
    var putPolicy2 = new qiniu.rs.PutPolicy2({
        scope: 'xxx'
    });
    putPolicy2.token();
    putPolicy2.getFlags();
    // test for GetPolicy
    var getPolicy = new qiniu.rs.GetPolicy(10);
    getPolicy.makeRequest('https://up.qbox.me');
    // test for makeBaseUrl
    qiniu.rs.makeBaseUrl('up.qbox.me', 'test');
}
