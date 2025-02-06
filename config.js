const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA6VV3Y6jNhh9lcq3ySwEEiCRRir5IZCE/JH/dlUZMMThzwFDQka53H2BrTQ3nYtWK1VtH2tfII9QMZnRbKXd7VSFG8uY4+Pzne/4DoQRTlAf5aBxB0iMM0hRMaQ5QaABmqnjoBiUgQ0pBA2gdXfLZl2rDrJt5E0JQzJbbU8VbbyM2K0fqW7CLAYJyY3gcAvOZUBS08fWNwDZSrYa93J2bS3UKWc79lQ/npJU00dd6Nq6r8vMNKgzvI2tW3AuECGOceh2yBYFKIZ+H+VjiOPX0W8NPbm2tzBp7j2HJzsS5i1nUI2HrFjTg7qqqa45Wqa6xHmvoz9TxdpaWTOulHHLCT/rrtNB2BM7MB13bJLk/UjhOkP2JKvSlX6C3RDZmo1Cimn+at0n+sjH85HTrUusZFZWbBLpHGsLa0bxiSRKhnqSe6xQn1fc1xFvl8zegOsfWqa26A4mPc5pL3KhWaIS48MjcSx+oXPH1lSc/4P4OH72ivdfdJdVZXcIOX+6jOCuP2X8tBcb6/Ew5AbCuN2zl25J0VJPrPLa6+j7esg1F4buaMioKrX2qu1vxsKp43LizGR64k5yW7485PVT8kIf0jT+FstBCqW9uemzumGJhhWrqaR6IasgVTxtxHWabPqYyS2R4GlzWiGbQ1Vie10+8KcCgzIlKDWDk9StarwzF5onhWTeqLM73D6eyEO5ZoNG5VwGMXJxQmNIcRQ+zvFSGUA7M5AVI/ooL0h6NDMOQm97IsZhBPulTnuTu4P9fip6zEgZQlYJmlBVpFFyC8qAxJGFkgTZKk5oFOc6ShLoogQ0fnhbBiE60mvhiu34Shk4OE7oPEyJH0H7uarPH6FlRWlIjTy0WsUAxaDBvkwjSnHoJoWOaQhja4sz1NpCmoCGA/0EncvARhm2UIEHBHO/Wf2EyOyAhjdzu0YWaSeaFJS3UXhdIiJYk1gk3diwbt5UUdW6Mat14QYhwWa5St3iHAeUAX7qmeKfr5bQ2h1EZAwZ3tn2ZbOk9PEWrXpqJdGsxzJctUcxskGDxikqAxNaXkpmkYfCb1lj6LWPswkSibwaUZHglj6crqpZn+l8hnutKWjcveRUK7ILvE2PU8f9XhOUQfBoQVycvF4RWJYT2FqN4xuc8H3y5lAICQl5EyIKyiCExWpw+fD+j+8uD/e/Xh7uf7s83P9+ebj/+fJw/9fl4f6Xy8P9/XeXD+///PTu46d3H38M/8/7Oowvr7rOfnr3sRDkyS3FUW1EIfaTIn5HA5iUtE6nZ/CeyXa7subKLVcGL+56btNrGwhcqB+F0nhpteIW1ebrZrXJ79FemHHioK1VMBxXDuymBn3r9gsgoAEYxptoxOyYpxMzw1a747ZP2abUZwZ11DIG4nx7HHalOr+PJ1kq2DJD+FngLFbRTsLKbEINzRmX+Plek2Zux2qqMx4vZPm22O3q8s834zyvus+qSi6FFpOKI/a0Hzk5uw3Sxe4wXIbt2jFRFzTT6rNBQJF5sIU2pqU+PAQlZun7y9iXt1iV4k51506kLp8ep+7kGiCPAeY/XRz4sbXvnnrCwegxh5/c8q+uemlP9lz+DOMp2b/SAk1EyUlH2a4SyvtDbChdGcm2EO5Tr57mh3y4DnZ1a9hFS7IC5/PbMiA+pE4UB0WeBSYEZeDDhMov8TLDAUooDAhoVERekriqUOHKIMhlQgwK6XMqAbl4uiMRnP8G9zoCZrEIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "NOTAXID",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

