const path = require("path");

function getMessages(req, res) {
    // res.send('<ul><li>Hello Albert</li></ul>');

    const imgPath = path.join(__dirname, "..", "public", "images", "skimountain.jpg");
    res.sendFile(imgPath)
};

function postMessage(req, res) {
    console.log('Updating messages...');
};

module.exports = {
    getMessages: getMessages,
    postMessage: postMessage,
}