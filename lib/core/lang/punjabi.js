define(["dojo/_base/declare"], function(declare) {
    return {
        /**
         * All Supported Unicode Characteres of selected Language
         * @type {String}
         */
        englishToUnicodeMap: {
            "B": "ਭ",
            "C": "ਛ",
            "D": "ਧ",
            "G": "ਘ",
            "J": "ਝ",
            "K": "ਖ",
            "P": "ਫ",
            "Q": "ਥ",
            "S": "ਸ਼",
            "T": "ਠ",
            "b": "ਬ",
            "c": "ਚ",
            "d": "ਦ",
            "g": "ਗ",
            "h": "ਹ",
            "j": "ਜ",
            "k": "ਕ",
            "l": "ਲ",
            "n": "ਨ",
            "p": "ਪ",
            "r": "ਰ",
            "s": "ਸ",
            "v": "ਵ"
        },
        /**
         * Mapping of Punjabi wth Unicode
         * @param  {String} inputChar - KeyCode of Key Pressed
         * @return {String}
         */
        getUnicodeChar: function(inputChar) {
            return this.englishToUnicodeMap[inputChar] || inputChar
        },
        /**
         * Convert Text written in GurbaniWebFont Style to Unicode
         * @param  {String} text
         * @return {String}
         */
        pasteToUnicode: function(text) {
            var convertedString = [];
            for (var i = 0; i < text.length; i++) {
                convertedString.push(this.englishToUnicodeMap[text[i]] || text[i]);
            }
            str = convertedString.join('').match(/\W/g).join('').split('').join('')
            str = str.replace(/ਿ(\W)/g,'$1' + 'ਿ').replace(/੍(\W)/g,'$1' + '੍')
            return str
        }

    }
});