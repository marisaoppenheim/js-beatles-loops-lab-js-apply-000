function theBeatlesPlay (musicians, instruments) {
  var result = [];
  var string = '';
  for (var i = 0; i < musicians.length; i++) {
    var member = musicians[i];
    var play = instruments[i];
    string = member + ' ' + 'plays' + ' ' + play;
    result.push(string);
  }
  return result;
}
