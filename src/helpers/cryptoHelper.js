const crypto = require('crypto');

class CryptoHelper {
    constructor(iv) {
        this.iv = iv.padEnd(16,'.').slice(0,16);
    }

    encrypt(value, secret) {
        const key = crypto.createHash('sha256').update(String(secret)).digest('base64');
        const key_in_bytes = Buffer.from(key, 'base64')
        const cipher = crypto.createCipheriv('aes-256-cbc', key_in_bytes, this.iv);
        let encrypted = cipher.update(value, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        return encrypted;
    }

    decrypt(encrypted, secret) {
        const key = crypto.createHash('sha256').update(String(secret)).digest('base64');
        const key_in_bytes = Buffer.from(key, 'base64')
        const decipher = crypto.createDecipheriv('aes-256-cbc', key_in_bytes, this.iv);
        let decrypted = decipher.update(encrypted, 'base64', 'utf8');
        return (decrypted + decipher.final('utf8'));
    }
};

module.exports = CryptoHelper;
