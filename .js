console.log('js')
var AR = document.getElementById("AR");

var btn = document.getElementById('btn');
 

// small to Big.............

AR.classList.add('big');
btn.addEventListener('click', function () {
  AR.classList.remove('big')
});

// big to small.............

// AR.classList.add('small');
// btn.addEventListener('click', function () {
//   AR.classList.remove('small')
// });