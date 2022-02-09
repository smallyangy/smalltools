import JSEncrypt from 'jsencrypt';
import CryptoJS from 'crypto-js';

// 城市版私钥
const privateKeyCity = `-----BEGIN PRIVATE KEY-----
MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBANmFqPLtjHSArsAj
CU/n16+miXengc+E+4um84l/Bh17okPmMiQ8Kc4mes9ZhuoXiJ9ctfkTtmMbDDDo
VUi1GYp1d3G1zaUqdRHYMBtS6ldYb4c/OKR3kNttaGAuW0utNE6xDuUPezpCm93x
IaQTmwjVYr4KZlyedppgvx450rstAgMBAAECgYBmRvmEl/tlwCfqwc6cGrgIqDaU
41cfGzknle2G5gobDMnkQTWsYfmKK/+sxTyxjzU3MWGC5yjn+ozF5khLcpO577Z1
2fYMHTRO0DRrENDfkfHC/p8NU+IViuIiF2oF50J+MdfVL5A7TLazVosz54qTB42O
LTv3wFVj8lKNwf4rAQJBAPLVmQFmp4Z7ET+YEx+Q4BV+5DIdEZBmIC6zz8UsDm1P
ky2TA4DrIQNT0q2qfWe0H88cxPYfB1XYTAHAxg/2u8ECQQDlUL4bwi7i2oZHRLiD
AO+5S9SWJFJ8b2pcrHbgf3jJwWm0mTTyGgGyCw6iaLNJ7Q2cPO++QHZ8n4AHOjmn
P0ptAkEA0ctQATHbEghJApQ0EVVtA6U5KUKL5iEVNMQMgOBrJm1VTk5w/HQndWR5
46gj5/Bqetj0IV71S2kvYWRWuXwFAQJBANodcrX0faRJNm+Tbe0tdtdIyWwGIG87
im+bm3btyHYfAexFzZZ6JiKzYbgY3m/yin+Rdnf/2LOxApXdS/lIugECQQCJBxX9
aX5EkibF1FyoLlb8L7FGpQeYYsAAVi2JehTKo9rAoqfzcOcLa9zNofgXlFWRPo6f
gZ0YiX8CMe7GAcDg
-----END PRIVATE KEY-----`;

/**
 * 解码函数
 * @param {*} secretSign header
 * @param {*} content body
 * @returns 
 */
function decryptCityData(secretSign, content) {
    const crypt = new JSEncrypt();
    crypt.setPrivateKey(privateKeyCity);
    const signStr = crypt.decrypt(secretSign);
    const signBuff = CryptoJS.enc.Utf8.parse(signStr);
    const decrypt = CryptoJS.AES.decrypt(content, signBuff, { mode: CryptoJS.mode.ECB });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}

// 全国版私钥
const privateKeyNational = `-----BEGIN RSA PRIVATE KEY-----
MIICXgIBAAKBgQDZhajy7Yx0gK7AIwlP59evpol3p4HPhPuLpvOJfwYde6JD5jIk
PCnOJnrPWYbqF4ifXLX5E7ZjGwww6FVItRmKdXdxtc2lKnUR2DAbUupXWG+HPzik
d5DbbWhgLltLrTROsQ7lD3s6Qpvd8SGkE5sI1WK+CmZcnnaaYL8eOdK7LQIDAQAB
AoGAZkb5hJf7ZcAn6sHOnBq4CKg2lONXHxs5J5XthuYKGwzJ5EE1rGH5iiv/rMU8
sY81NzFhguco5/qMxeZIS3KTue+2ddn2DB00TtA0axDQ35Hxwv6fDVPiFYriIhdq
BedCfjHX1S+QO0y2s1aLM+eKkweNji0798BVY/JSjcH+KwECQQDy1ZkBZqeGexE/
mBMfkOAVfuQyHRGQZiAus8/FLA5tT5MtkwOA6yEDU9Ktqn1ntB/PHMT2HwdV2EwB
wMYP9rvBAkEA5VC+G8Iu4tqGR0S4gwDvuUvUliRSfG9qXKx24H94ycFptJk08hoB
sgsOomizSe0NnDzvvkB2fJ+ABzo5pz9KbQJBANHLUAEx2xIISQKUNBFVbQOlOSlC
i+YhFTTEDIDgayZtVU5OcPx0J3VkeeOoI+fwanrY9CFe9UtpL2FkVrl8BQECQQDa
HXK19H2kSTZvk23tLXbXSMlsBiBvO4pvm5t27ch2HwHsRc2WeiYis2G4GN5v8op/
kXZ3/9izsQKV3Uv5SLoBAkEAiQcV/Wl+RJImxdRcqC5W/C+xRqUHmGLAAFYtiXoU
yqPawKKn83DnC2vczaH4F5RVkT6On4GdGIl/AjHuxgHA4A==
-----END RSA PRIVATE KEY-----`;

function decryptNationalData(secretSign, content) {
    const crypt = new JSEncrypt();
    crypt.setPrivateKey(privateKeyNational);
    const token = crypt.decrypt(secretSign);
    const signStr = token.split('|')[1];
    const signBuff = CryptoJS.enc.Utf8.parse(signStr);
    const decrypt = CryptoJS.AES.decrypt(content, signBuff, { mode: CryptoJS.mode.ECB });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}

export default {
    decryptCityData,
    decryptNationalData,
};