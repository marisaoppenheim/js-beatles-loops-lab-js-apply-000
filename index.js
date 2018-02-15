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


function johnLennonFacts(facts) {
  var answer = [];
  var i = 0;

  while (i < facts.length) {
    var fact = facts[i] +'!!!'
    answer.push(fact);
  }
  i++;

  return answer;
}
