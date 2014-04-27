define(["dojo/_base/declare"], function(declare) {
    return {
        /**
         * All Supported Unicode Characteres of selected Language
         * @type {String}
         */
        englishToUnicodeMap: {"Aw":"ਆ", "a":"ੳ","A":"ਅ","e":"ੲ","s":"ਸ","h":"ਹ","k":"ਕ","K":"ਖ","g":"ਗ","G":"ਘ","\\":"ਙ","c":"ਚ","C":"ਛ","j":"ਜ","J":"ਝ","|":"ਞ","t":"ਟ","T":"ਠ","f":"ਡ","F":"ਢ","x":"ਣ","q":"ਤ","Q":"ਥ","d":"ਦ","D":"ਧ","n":"ਨ","p":"ਪ","P":"ਫ","b":"ਬ","B":"ਭ","m":"ਮ","X":"ਯ","r":"ਰ","l":"ਲ","v":"ਵ","V":"ੜ","S":"ਸ਼","^":"ਖ਼","z":"ਗ਼","Z":"ਜ਼","&":"ਫ਼","L":"ਲ਼","w":"ਾ","W":"ਾਂ","i":"ਿ","y":"ੇ","Y":"ੈ","o":"ੋ","O":"ੌ","I":"ੀ","N":"ਂ","M":"ੰ","`":"ੱ","H":"੍ਹ","R":"੍ਰ","u":"ੁ","U":"ੂ","[":"।","]":"॥","E":"ਓ"},
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
            console.log(text)
            for(each in this.englishToUnicodeMap) {
                console.log(each, text.split(each).join(this.englishToUnicodeMap[each]))
                text = text.split(each).join(this.englishToUnicodeMap[each])
            }
            console.log(text)
            return text

            // var convertedString = '';
            // console.log(text)
            // for (var i = 0; i < text.length; i++) {
            //     convertedString += (this.englishToUnicodeMap[text[i]] || text[i]);
            // }
            // str = convertedString//.join('')//.match(/\W/g).join('').split('').join('')
            // str = str.replace(/ਿ(\W)/g,'$1' + 'ਿ')
            // //'ਪੇ੍ਰਮ ਪੇ੍ਰਮ ਪੇ੍ਰਮ ਪੇ੍ਰਮ'
            // str = str.replace(/ੇ੍(\W)/g, function(replaceMe, nextChar){
            //     return '੍' + nextChar + 'ੇ'
            // })
            // console.log(str.split('<ਬਰ>'))
            // console.log(str.split('<ਬਰ>').join('</p><p>'))
            // str = str.split('<ਬਰ>').join('</p><p>');
            // str = str.split('ਫ਼ਲਟ;').join('ੴ');
            // str = str.split('ƒ').join('ਨੂੰ');
            // str = str.replace(/ਅਾ/g,'ਆ')
            // str = str.replace(/ੲੀ/g,'ਈ')
            // str = str.replace(/ੳੁ/g,'ਉ')
            // str = str.replace(/ੳੂ/g,'ਊ')
            // str = str.replace(/ੲੇ/g,'ਏ')
            // str = str.replace(/ਅੈ/g,'ਐ')
            // str = str.replace(/ਅੌ/g,'ਔ')
            // return str
        }

    }
});