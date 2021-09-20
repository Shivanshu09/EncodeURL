const crypto = require('crypto');
const bcrypt = require('bcrypt');

module.exports.encode = (req, res) => {

   
    const url = '"upi://pay?pa=bivek@npci&pn=bivek%20rath&mc=9999&tid=cxnkjcnkjdfdvjndkjfvn&tr=4894398cndhcd23&tn=Pay%20to%20mystar%20store&am=10&mam=null&cu=INR&url=https://mystar.com&mode=05&&orgid=000000&mid=1234&msid=3432&mtid=1212';


    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
        modulusLength: 2048,
    });

    const signature = crypto.sign("sha256", Buffer.from(url), {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    });

    const encodedSignature = signature.toString("base64");
    const finalURL = url + '&sign=' + encodedSignature;
    
      
    console.log(finalURL);
    res.send(finalURL);
}