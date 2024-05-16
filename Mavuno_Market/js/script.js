
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

