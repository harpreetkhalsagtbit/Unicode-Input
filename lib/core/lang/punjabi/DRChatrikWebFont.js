define(["dojo/_base/declare"], function(declare) {
    return {
        /**
         * All Supported Unicode Characteres of selected Language
         * @type {String}
         */
        // fontToUnicodeMapping: {"ਂ":"N","ਔ":"AO","ਐ":"AY","ਆਂ":"AW", "ਆ":"Aw","ਅ":"A","ਏ":"ey","ਇ":"ie","ਈ":"eI","ੲ":"e","ਓ":"E","ਊ":"aU","ਉ":"au","ੳ":"a","ਕ":"k","ਖ":"K","ਗ":"g","ਘ":"G","ਙ":"|","ਚ":"c","ਛ":"C","ਜ":"j","ਝ":"J","ਟ":"t","ਠ":"T","ਡ":"f","ਢ":"F","ਣ":"x","ਤ":"q","ਥ":"Q","ਦ":"d","ਧ":"D","ਨ":"n","ਪ":"p","ਫ":"P","ਬ":"b","ਭ":"B","ਮ":"m","ਯ":"X","ਰ":"r","ਲ":"l","ਲ਼":"L","ਵ":"v","ਸ਼":"S","ਸ":"s","ਹ":"h","ਾ":"w","ਿ":"i","ੀ":"I","ੁ":"u","ੂ":"U","ੇ":"y","ੈ":"Y","ੋ":"o","ੌ":"O","ਖ਼":"^","ਗ਼":"Z","ੜ":"V","ਫ਼":"&","੦":"0","੧":"1","੨":"2","੩":"3","੪":"4","੫":"5","੬":"6","੭":"7","੮":"8 ","੯":"9","ੰ":"M","ੱ":"`", "੍ਹ":"H", "੍ਰ":"R", "ਾਂ":"W", "ਜ਼":"z", "।":"[", "॥":"]", "'੍ਵ'":"Í"},
        // englishToUnicodeMap: {"0":"੦","1":"੧","2":"੨","3":"੩","4":"੪","5":"੫","6":"੬","7":"੭","9":"੯","N":"ਂ","AO":"ਔ","AY":"ਐ","Aw":"ਆ","A":"ਅ","ey":"ਏ","ie":"ਇ","eI":"ਈ","e":"ੲ","E":"ਓ","aU":"ਊ","au":"ਉ","a":"ੳ","k":"ਕ","K":"ਖ","g":"ਗ","G":"ਘ","|":"ਙ","c":"ਚ","C":"ਛ","j":"ਜ","J":"ਝ","t":"ਟ","T":"ਠ","f":"ਡ","F":"ਢ","x":"ਣ","q":"ਤ","Q":"ਥ","d":"ਦ","D":"ਧ","b":"ਬ","p":"ਪ","P":"ਫ","B":"ਭ","m":"ਮ","X":"ਯ","r":"ਰ","l":"ਲ","L":"ਲ਼","v":"ਵ","S":"ਸ਼","s":"ਸ","h":"ਹ","w":"ਾ","i":"ਿ","I":"ੀ","u":"ੁ","U":"ੂ","y":"ੇ","Y":"ੈ","o":"ੋ","O":"ੌ","^":"ਖ਼","Z":"ਗ਼","V":"ੜ","&":"ਫ਼","8 ":"੮","M":"ੰ","`":"ੱ", "R":"੍ਰ", "n":"ਨ"},
        englishToUnicodeMap: {"0":"੦","1":"੧","2":"੨","3":"੩","4":"੪","5":"੫","6":"੬","7":"੭","8":"੮","9":"੯","N":"ਂ","aO":"ਔ","aY":"ਐ","af":"ਆ","aF":"ਆਂ","a":"ਅ","ey":"ਏ","ie":"ਇ","eI":"ਈ","e":"ੲ","AU":"ਊ","Au":"ਉ","A":"ੳ","k":"ਕ","K":"ਖ","g":"ਗ","G":"ਘ","c":"ਚ","C":"ਛ","j":"ਜ਼","J":"ਝ","t":"ਟ","T":"ਠ","z":"ਡ","Z":"ਢ","x":"ਣ","q":"ਤ","Q":"ਥ","d":"ਦ","D":"ਧ","n":"ਨ","p":"ਪ","P":"ਫ਼","b":"ਬ","B":"ਭ","m":"ਮ","X":"ਯ","r":"ਰ","l":"ਲ","lL":"ਲ਼","v":"ਵ","sL":"ਸ਼","s":"ਸ","h":"ਹ","L":"਼","f":"ਾ","i":"ਿ","I":"ੀ","u":"ੁ","U":"ੂ","y":"ੇ","Y":"ੈ","o":"ੋ","O":"ੌ","KL":"ਖ਼","gL":"ਗ਼","V":"ੜ","M":"ੰ","w":"ੱ", "F":"ਾਂ", "R":"੍ਰ", "H":"੍ਹ", "[":".", "W":"ੱ"} ,
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
        _convertToUnicode:function(text, mappingString) {
            console.log(text)
            text = text.split('&amp;').join('&')
            text = text.split('&nbsp;').join(' ')
            text = text.split('<p>').join('')
            for(each in mappingString) {
                text = text.split(each).join(mappingString[each])
            }
            text = text.replace(/ਿ(\W)/g,'$1' + 'ਿ')
            text = text.replace(/ਿ੍(\W)/g,'੍$1' + 'ਿ')
            text = text.replace(/ੇ੍(\W)/g, function(replaceMe, nextChar){
                return '੍' + nextChar + 'ੇ'
            })
            text = text.split('<ਬਰ>').join('</p><p>');
            text = text.split('<ਬਰ>').join('</p><p>');
            text = text.split('ਫ਼ਲਟ;').join('ੴ');
            text = text.split('ƒ').join('ਨੂੰ');
            return text
        },
        pasteToUnicode: function(text) {
            return this._convertToUnicode(text, this.englishToUnicodeMap)
        }

    }
});