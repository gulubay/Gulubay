
var source = ".gameGrid";

(function(obj) {
    
    // Constants, variables that should never change at runtime
    var CONST = {
        objTypeClassPrefix: "objType",  // the class the changes the look of the tile based on type
        dataTypeAttr: "data-type",      // the data- attribute name
        currentMatchedSel: ".currentMatched",
        totalMatchedSel: ".totalMatches",
        gameOverSel: ".gameOver",
        resultsSel: ".results",
        numTypes: 9                     // There are 2 types of matching objects
    };

    

    // Object variables (like instance variables)
    var _gridArr;   
    var _score = 0;
    var _numTileRows = 1;
    var _numTileColumns = 1;
    var _minNumMatchingTiles = 2;
    var _numMatchesToWin = 1;
    var _currentNumMatches = 0;
    var _gameOver = false;

     var selectedTiles = [];// = null;     

    var _init = function _init(gridArray, numTileRows, numTileColumns, numMatchesToWin) {

        // Assign to object variables
        _gridArr = gridArray;      
        _numTileRows = numTileRows;
        _numTileColumns = numTileColumns;
        _numMatchesToWin = numMatchesToWin;
        
        $(CONST.currentMatchedSel).html(_currentNumMatches);
        $(CONST.totalMatchedSel).html(_numMatchesToWin);
        $(CONST.resultsSel).hide();

        // Setup the tile buttons to receive input
        _gridArr.on("click", function(e) {
            e.preventDefault();
            _selectTile($(e.currentTarget));
        });

        _randomizeTiles();
    };



    var _selectTile = function _selectTile(selectedTileJQObj) {
        // Once the game is over, no longer process the tiles
      
      var cardFlipSound = new Audio();
      cardFlipSound.src = "sounds/CardFlip1.wav";
      cardFlipSound.play();
      
      
      if(!_gameOver) {
            $(selectedTileJQObj).addClass('selected');
             _checkForMatches(selectedTileJQObj);
         }

    };

    var _checkForMatches = function _checkForMatches(selectedTileJQObj) {
        
        selectedTiles.push(selectedTileJQObj.attr('data-type'));
        console.log(selectedTiles);
        if (selectedTiles.length == 2) { 
            if(selectedTiles[0] ==  selectedTiles[1]) {
                _updateScore(1);
                $('.selected').addClass('matched');
              
              var cardMatchSound = new Audio();
              cardMatchSound.src = "sounds/cardFlip2.wav";
              cardMatchSound.play();
              
                selectedTiles = [];
            } else {
                 window.setTimeout(_replaceMatched, 1000); 
            }

        }

    }

    var _matchesFound = function _matchesFound(id, matches) {

        $.each(matches, function(index, tile) {
            tile.addClass('matched');
        });
      
        _reset();
    };

  

    var _noMatchesFound = function _noMatchesFound(id) {                       
        _reset();       
    };

    var _replaceMatched = function _replaceMatched() {
        // var matches = $('.tile.matched');
        // var num = 1;
        $.each(selectedTiles, function(index, tile) {
             //var tile = $(tile);
            $(".tile").removeClass('selected');
            $(".tile").removeClass('flipToBack').addClass('flipToFront');
            selectedTiles = [];
            });
          // tile.addClass(CONST.objTypeClassPrefix + num);
          

        }

    // Resets the tiles so none are selected and ready for input
    var _reset = function _reset() {
        _gridArr.removeClass('selected');
    };

    // Updates the number of matches that have been achieved so far
    // Currently, the game gives 1 point for each successful match,
    // no matter how many objects were matched in that one selection.
    var _updateScore = function _updateScore(addPtsToScore) {
        _currentNumMatches += addPtsToScore;

        $(CONST.currentMatchedSel).html(_currentNumMatches);

        if(_currentNumMatches >= _numMatchesToWin) {
            _gameOver = true;
            $(CONST.gameOverSel).html("Great Job! Play again?");  
            $(CONST.resultsSel).show();          
        }

        //$(totalMatchedSel).html(_numMatchesToWin)

    }


//////////////////////////// First Part of the "fail" /////////////////

    //function Shuffle(n) {
    //    for(var j, x, i = n.length; i; j = parseInt(Math.random() * i), x = n[--i], n[i] = n[j], n[j] = x);
    //    return n;
    //};

//////////////////////////////////////////////////////////////////////


    var _randomizeTiles = function _randomizeTiles() {

////////////////////////////// Second Part of "fail" ///////////////
        //var tile = $(tile);
        //
        //var numbers = ["1","1","2","2","3","3","4","4","5","5","6","6","7","7","8","8","9","9"];
        //
        //console.log(numbers);
        //
        //Shuffle(numbers);
        //
        //console.log(numbers);
        //
        //for (var x=0; x<numbers.length;x++) {
        //    var num = 0;
        //    $.each(_gridArr, function (index, tile) {
        //        var tile = $(tile);
        //        // Random
        //        num = Utils.randomNum(CONST.numTypes);
        //
        //        tile.attr(CONST.dataTypeAttr, numbers[x]);
        //        // Remove the class pertaining to the tile type
        //        $.each(tile.attr("class").split(" "), function (i, o) {
        //            if (o.indexOf(CONST.objTypeClassPrefix) != -1) {
        //                tile.removeClass(o);
        //            }
        //        });
        //        tile.addClass(CONST.objTypeClassPrefix + numbers[x]);
        //    });
        //}

//////////////////////////////////////////////////////////////////////////


        var num = 0;
        $.each(_gridArr, function(index, tile) {
            var tile = $(tile);
            // Random
            num = Utils.randomNum(CONST.numTypes);

            tile.attr(CONST.dataTypeAttr, num);
            // Remove the class pertaining to the tile type
            $.each(tile.attr("class").split(" "), function(i, o) {
                if(o.indexOf(CONST.objTypeClassPrefix) != -1){
                    tile.removeClass(o);
                }
            });
            tile.addClass(CONST.objTypeClassPrefix + num);

        });
       //_gridArr = Utils.shuffle(_gridArr);
       //


    };


    // Expose functions (like public methods)
    obj.init = _init;   
    //obj.randomizeTiles = _randomizeTiles;

})(window.PuzzleGame = window.PuzzleGame || {});