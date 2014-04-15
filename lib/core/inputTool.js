define(["dojo/_base/declare"], function(declare){
    return {
      getCurrentWord: function(editorInstance) {
        var range = editorInstance.getSelection().getRanges()[0],
            startNode = range.startContainer;
        if ( startNode.type == CKEDITOR.NODE_TEXT && range.startOffset ) {
            var indexPrevSpace = startNode.getText().lastIndexOf(' ', range.startOffset) + 1;
            var indexNextSpace = startNode.getText().indexOf(' ', range.startOffset);
            if(indexPrevSpace == -1) {
                indexPrevSpace=0;
            }
            if(indexNextSpace == -1) {
                indexNextSpace = startNode.getText().length;
            }
            var filteredWord = startNode.getText().substring(indexPrevSpace,indexNextSpace);
            var sel = editorInstance.getSelection();
            var element = sel.getStartElement();
            sel.selectElement(element);

            var ranges = editorInstance.getSelection().getRanges();
            ranges[0].setStart(element.getFirst(), indexPrevSpace);
            ranges[0].setEnd(element.getFirst(), indexPrevSpace + filteredWord.length);
            sel.selectRanges([ranges[0]]);
            // Range at the non-zero position of a text node.
            return startNode.getText().substring(indexPrevSpace,indexNextSpace);
        }
        // Selection starts at the 0 index of the text node and/or there's no previous text node in contents.
        return null;
      }
    }
});
