function findNeedle(haystack) {

  function needle(myString) {

    if (myString == "needle") { return true }

  }

  return ("found the needle at position " + haystack.findIndex(needle));
}

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])