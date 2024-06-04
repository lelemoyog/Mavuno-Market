
  //get loader element
  const loader = document.getElementById('loader');

  // Check if the loader element exists
  if (loader) {
    //hide loader onload
    window.addEventListener('load', function () {
      console.log('Window loaded'); // Check if this message appears in the console
      loader.style.display = 'none';
    });
  } else {
    console.log('Loader element not found'); // Check if this message appears in the console
  }

 // Spinner
 var spinner = function () {
  setTimeout(function () {
      if ($('#spinner').length > 0) {
          $('#spinner').removeClass('show');
      }
  }, 1);
};
spinner(0);