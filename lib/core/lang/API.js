define(["dojo/_base/declare"], function(declare) {
    return {
        englishToUnicodeMap: {} ,
        /**
         * Mapping of Language Font wth Unicode
         * @param  {String} inputChar - KeyCode of Key Pressed
         * @return {String} Unicode Character
         */
        getUnicodeChar: function(inputChar) {
        },
        /**
         * Private Function Convert Text written in Local Font Style to Unicode
         * @param  {String} text
         * @return {String} Converted Text
         */
        _convertToUnicode:function(text, mappingString) {
        },
        /**
         * Public Function Convert Text written in Local Font Style to Unicode
         * @param  {String} text
         * @return {String} Converted Text
         */
        pasteToUnicode: function(text) {
        }

    }
});