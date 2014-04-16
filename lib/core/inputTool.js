define(["dojo/_base/declare"], function(declare){
    return {
      getCurrentWord: function(editorInstance, inputChar) {
        var range = editorInstance.getSelection().getRanges()[0],
            startNode = range.startContainer;
            console.log('ethe')
        if ( startNode.type == CKEDITOR.NODE_TEXT && range.startOffset ) {
            // console.log(startNode.getText())
            // console.log(range.startOffset)
            // console.log(startNode.getText())
            var currentCursor = range.startOffset
            var indexPrevSpace = startNode.getText().lastIndexOf(String.fromCharCode(160), range.startOffset);
            var indexNextSpace = startNode.getText().indexOf(String.fromCharCode(160), range.startOffset);
            // console.log(indexPrevSpace, 'indexPrevSpace')
            // console.log(indexNextSpace, 'indexNextSpace')
            if(indexPrevSpace == -1) {
                indexPrevSpace=0;
            }
            if(indexNextSpace == -1) {
                indexNextSpace = startNode.getText().length;
            }
            // console.log(indexPrevSpace, indexNextSpace)
            var filteredWord = startNode.getText().substring(indexPrevSpace,indexNextSpace);
            // console.log(filteredWord)
            var sel = editorInstance.getSelection();
            var element = sel.getStartElement();
            sel.selectElement(element);
            // var ranges = editorInstance.getSelection().getRanges();
            // console.log(ranges[0].startContainer)
            range.setStart(range.startContainer, indexPrevSpace);
            range.setEnd(range.startContainer, indexPrevSpace + filteredWord.length);
            sel.selectRanges([range]);
            // console.log(range.startContainer.getText().length, 'length')
            // Range at the non-zero position of a text node.
            var currWord = range.startContainer.getText().substring(indexPrevSpace,indexNextSpace);
            // console.log(range.startOffset, range.startContainer.getText().length)
            if(currentCursor != range.startContainer.getText().length) {
                var currWordArr = currWord.split('')
                currWordArr.splice(currentCursor, 0, inputChar)
                editorInstance.insertText(currWordArr.join(''))
                var newRange = editorInstance.getSelection().getRanges()[0];
                console.log('if', currentCursor, newRange.startContainer.getText())
                if(currentCursor < newRange.startContainer.getText().length) {
                    newRange.setStart(newRange.startContainer, currentCursor + 1);
                    newRange.setEnd(newRange.startContainer, currentCursor + 1);
                    sel.selectRanges([newRange]);
                }
                return currWordArr.join('')
            } else {
                console.log('else', currWord)
                editorInstance.insertText(currWord + inputChar)
                return currWord + inputChar
            }
        }
        editorInstance.insertText(inputChar)
        // Selection starts at the 0 index of the text node and/or there's no previous text node in contents.
        return null;
      }
    }
});
