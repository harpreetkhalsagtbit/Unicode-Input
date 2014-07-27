define(["dojo/_base/declare"], function(declare) {
    return {
        /**
         * All Supported Unicode Characteres of selected Language
         * @type {String}
         */
        //{"ਁ":"","ਂ":"굎","ਃ":"","ਔ":"광굈","ਐ":"광굆","ਆ":"광괻","ਅ":"광","ਏ":"괒굅","ਇ":"괿괒","ਈ":"괒굀","ੲ":"괒","ਓ":"괐","ਊ":"괏굃","ਉ":"괏굁","ੳ":"괏","ਕ":"괖","ਖ":"괗","ਗ":"괙","ਘ":"괛","ਙ":"괜","ਚ":"괝","ਛ":"괞","ਜ":"괟","ਝ":"괡","ਞ":"괢","ਟ":"괣","ਠ":"괤","ਡ":"괥","ਢ":"괦","ਣ":"괧","ਤ":"괨","ਥ":"괩","ਦ":"괪","ਧ":"괫","ਨ":"괬","ਪ":"괮","ਫ":"괯","ਬ":"괱","ਭ":"괲","ਮ":"괳","ਯ":"괴","ਰ":"괶","ਲ":"괷","ਲ਼":"괷괷","ਵ":"괹","ਸ਼":"괔","ਸ":"괓","ਹ":"괕","ਾਂ":"괼","਼":"","ਾ":"괻","ਿ":"괿","ੀ":"굀","ੁ":"굁","ੂ":"굃","ੇ":"굅","ੈ":"굆","ੋ":"굇","ੌ":"굈","੍":"굝","ਖ਼":"괘","ਗ਼":"괚","ਜ਼":"괠","ੜ":"괺","ਫ਼":"괰","੦":"공","੧":"곶","੨":"곷","੩":"곸","੪":"곹","੫":"곺","੬":"곻","੭":"과","੮":"곽","੯":"곾","ੰ":"굌","ੱ":"굉","ੴ":"","।":"갇","॥":"갈"}

        //Exception - Punjabi -nUM - "괭":"ਨੂੰ", there are two Adhaks - "굋":"ੱ"

        mahankoshLanguageToUnicodeMap: {"ਁ":"","ਂ":"굎","ਃ":"","ਔ":"광굈","ਐ":"광굆","ਆ":"광괻","ਅ":"광","ਏ":"괒굅","ਇ":"괿괒","ਈ":"괒굀","ੲ":"괒","ਓ":"괐","ਊ":"괏굃","ਉ":"괏굁","ੳ":"괏","ਕ":"괖","ਖ":"괗","ਗ":"괙","ਘ":"괛","ਙ":"괜","ਚ":"괝","ਛ":"괞","ਜ":"괟","ਝ":"괡","ਞ":"괢","ਟ":"괣","ਠ":"괤","ਡ":"괥","ਢ":"괦","ਣ":"괧","ਤ":"괨","ਥ":"괩","ਦ":"괪","ਧ":"괫","ਨ":"괬","ਪ":"괮","ਫ":"괯","ਬ":"괱","ਭ":"괲","ਮ":"괳","ਯ":"괴","ਰ":"괶","ਲ":"괷","ਲ਼":"괷괷","ਵ੍":"굟","ਵ":"괹","ਸ਼":"괔","ਸ":"괓","ਹ":"괕","ਾਂ":"괼","਼":"","ਾ":"괻","ਿ":"괿","ੀ":"굀","ੁ":"굁","ੂ":"굃","ੇ":"굅","ੈ":"굆","ੋ":"굇","ੌ":"굈","੍":"굝","ਖ਼":"괘","ਗ਼":"괚","ਜ਼":"괠","ੜ":"괺","ਫ਼":"괰","੦":"공","੧":"곶","੨":"곷","੩":"곸","੪":"곹","੫":"곺","੬":"곻","੭":"과","੮":"곽","੯":"곾","ੰ":"굌","ੱ":"굉","ੴ":"","।":"갇","॥":"갈"},

        /**
         * Mapping of Punjabi wth Unicode
         * @param  {String} inputChar - KeyCode of Key Pressed
         * @return {String}
         */
        getUnicodeChar: function(inputChar) {
            return this.mahankoshLanguageToUnicodeMap[inputChar] || inputChar
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
            for(each in mappingString) {
                text = text.split(each).join(mappingString[each])
            }
            console.log(text)
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
            return this._convertToUnicode(text, this.mahankoshLanguageToUnicodeMap)
        }

    }
});