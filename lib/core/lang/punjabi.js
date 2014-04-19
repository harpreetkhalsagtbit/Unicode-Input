define(["dojo/_base/declare"], function(declare) {
    return {
        /**
         * All Supported Unicode Characteres of selected Language
         * @type {String}
         */
        unicodeString: 'ੳਬਚਦੲਡਗਹਜਕਲਮਨਪਤਰਸਟਵਣਜ਼ਅਭਛਧਏਢਘਹਝਖਲ਼ਫਥਸ਼ਠੜਮਯਗ਼ਿੋੁਾੇੀੰਂੌ੍ੂੈੱ ',
        /**
         * All Supported English Characteres for Key Mapping
         * @type {String}
         */
        englishString: 'abcdefghjklmnpqrstvxzABCDEFGHJKLPQSTVWXZiouwyIMNORUY` ',
        /**
         * get Unicode Char at specific position
         * @param  {String} position - index of unicode character to be retrieved
         * @return {String}
         */
        getPunjabiUnicodeString: function(position) {
            return this.unicodeString.charAt(position)
        },
        /**
        /**
         * get Index of Char or KeyPressed
         * @param  {String} inputChar - KeyCode of Key Pressed
         * @return {String}
         */
        getPositionEnglishCharacterString: function(inputChar) {
            return this.englishString.indexOf(inputChar)
        },
        /**
         * Mapping of Punjabi wth Unicode
         * @param  {String} inputChar - KeyCode of Key Pressed
         * @return {String}
         */
        collateStrings: function(inputChar) {
            return this.getPunjabiUnicodeString(this.getPositionEnglishCharacterString(inputChar))
        },
        /**
         * Convert Text written in GurbaniWebFont Style to Unicode
         * @param  {String} text
         * @return {String}
         */
        convertToUnicode: function(text) {
            var convertedString = [];
            for (var i = 0; i < text.length; i++) {
                convertedString.push(this.unicodeString[this.englishString.indexOf(text[i])]);
            }
            str = convertedString.join('').match(/\W/g).join('').split('').join('')
            str = str.replace(/ਿ(\W)/g,'$1' + 'ਿ')
            // str = str.replace("੍ੀ", "ੀ੍")
            // var sihariIndex = 0;
            // while (str.indexOf('ਿ', sihariIndex) != -1) {
            //     sihariIndex = str.indexOf('ਿ', sihariIndex)
            //     sihariIndex++;
            //     var sihariFollower = str.substring(sihariIndex, sihariIndex + 1)
            //     str = str.replace('ਿ' + sihariFollower, sihariFollower + 'ਿ')
            //     sihariIndex++;
            // }
            return str
        }

    }
});