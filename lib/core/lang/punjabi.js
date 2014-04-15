define(["dojo/_base/declare"], function(declare){
    return {
        getPunjabiUnicodeString: function(position) {
            var punjabiString = 'ੳਬਚਦੲਡਗਹਜਕਲਮਨਪਤਰਸਟਵਣਜ਼ਅਭਛਧਏਢਘਹਝਖਲ਼ਫਥਸ਼ਠੜਮਯਗ਼ਿੋੁਾੇੀੰਂੌ੍ੂੈੱ ';
          return punjabiString.charAt(position)
        },
        getPositionEnglishCharacterString: function(inputChar) {
            var englishString = 'abcdefghjklmnpqrstvxzABCDEFGHJKLPQSTVWXZiouwyIMNORUY` '
          return englishString.indexOf(inputChar)
        },
        collateStrings: function(inputChar) {
            return this.getPunjabiUnicodeString(this.getPositionEnglishCharacterString(inputChar))
        }
    }
});
