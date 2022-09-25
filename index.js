function getPasteImage(paste, callback){
    if(!paste.clipboardData) {
        if(typeof(callback) == "function")
            callback(undefined)
    }

    let files = paste.clipboardData.items

    if(files === undefined) {
        if(typeof(callback) == "function")
            callback(undefined)
    }

    for (var i = 0; i < files.length; i++) {
        if (files[i].type.indexOf("image") === -1)
            continue
        let blob = files[i].getAsFile()

        if(typeof(callback) == "function")
            callback(blob)
    }
}

module.exports = {
    getPasteImage: getPasteImage
}