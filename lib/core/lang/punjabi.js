define(["dojo/_base/declare"], function(declare) {
    return {
        /**
         * All Supported Unicode Characteres of selected Language
         * @type {String}
         */
        englishToUnicodeMap: {"0":"੦","1":"੧","2":"੨","3":"੩","4":"੪","5":"੫","6":"੬","7":"੭","8":"੮","9":"੯","N":"ਂ","A":"ਅ","Aw":"ਆ","ie":"ਇ","eI":"ਈ","au":"ਉ","aU":"ਊ","ey":"ਏ","AY":"ਐ","E":"ੴ","AO":"ਔ","k":"ਕ","K":"ਖ","g":"ਗ","G":"ਘ","\\":"ਙ","c":"ਚ","C":"ਛ","j":"ਜ","J":"ਝ","|":"ਞ","t":"ਟ","T":"ਠ","f":"ਡ","F":"ਢ","x":"ਣ","q":"ਤ","Q":"ਥ","d":"ਦ","D":"ਧ","n":"ਨ","p":"ਪ","P":"ਫ","b":"ਬ","B":"ਭ","m":"ਮ","X":"ਯ","r":"ਰ","l":"ਲ","L":"ਲ਼","v":"ਵ","S":"ਸ਼","h":"ਹ","w":"ਾ","i":"ਿ","s":"ਸ","I":"ੀ","u":"ੁ","U":"ੂ","y":"ੇ","Y":"ੈ","o":"ੋ","O":"ੌ","^":"ਖ਼","z":"ਗ਼","V":"ੜ","&":"ਫ਼","M":"ੰ","`":"ੱ","~":"ੱ","e":"ੲ","a":"ੳ"} ,
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
            text = text.replace(/ਿ(\W)/g,'$1' + 'ਿ')
            text = text.replace(/ੇ੍(\W)/g, function(replaceMe, nextChar){
                return '੍' + nextChar + 'ੇ'
            })
            text = text.split('<ਬਰ>').join('</p><p>');
            text = text.split('ਫ਼ਲਟ;').join('ੴ');
            text = text.split('ƒ').join('ਨੂੰ');
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