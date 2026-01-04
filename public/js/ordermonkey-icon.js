(function () {
  function init() {
    var body = document.body;

    // Feature detect box-shadow (after body exists)
    if (body && !('boxShadow' in body.style)) {
      body.classList.add('noBoxShadow');
    }

    // Auto-select input text unless it has the 'liga' class
    body.addEventListener('click', function (e) {
      var target = e.target;
      if (target && target.tagName === 'INPUT' && !target.classList.contains('liga')) {
        if (typeof target.select === 'function') target.select();
      }
    }, false);

    // Test controls
    var fontSize = document.getElementById('fontSize');
    var testDrive = document.getElementById('testDrive');
    var testText = document.getElementById('testText');

    function updateTest() {
      if (!testDrive) return;
      testDrive.innerHTML = (testText && testText.value) ? testText.value : '\u00A0'; // NBSP when empty
      if (typeof window.icomoonLiga === 'function') {
        window.icomoonLiga(testDrive);
      }
    }

    function updateSize() {
      if (testDrive && fontSize) {
        testDrive.style.fontSize = fontSize.value + 'px';
      }
    }

    if (testText) {
      testText.addEventListener('input', updateTest, false);
      testText.addEventListener('change', updateTest, false);
    }

    if (fontSize) {
      fontSize.addEventListener('input', updateSize, false);
      fontSize.addEventListener('change', updateSize, false);
      updateSize();
    }

    updateTest();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();