//IIFE to contain
(function () {
  //grab pieces of DOM
  const storeItems = document.querySelectorAll('.store-item')
  const lightBoxContainer = document.querySelector('.lightbox-container')
  const lightboxItem = document.querySelector('.lightbox-item')
  const storeImage = document.querySelectorAll('.store-img')

  //push all item images in an array
  let imgArr = []
  storeImage.forEach(img => {
    imgArr.push(img.src)
  })

  //img counter to iterate through each img
  let imgCounter = 0

  console.log(imgArr);
  //click store item to bring up pics list
  //add click ability to each item in store
  storeItems.forEach(item => {
    item.addEventListener('click', e => {
      lightBoxContainer.classList.add(`show`)
      console.log(item);
      lightBoxContainer.style.background = `url(${item.src})`
    })
  })

  //add right btn

  //add left btn

  //close window

})()

/*
Notes during project
1. Tried to add an event listener to a node list. Had to actually do a forEach on the node list.
https://stackoverflow.com/questions/55667793/uncaught-typeerror-input-addeventlistener-is-not-a-function
2. Tried to use style.classList and then .show instead of just the string show. 'style not needed'
3. How to access the individual CSS properties (without simply adding a class)
4. I struggled with change the background. I thought I would be able to simply use element.style.background = 'image' but I realized I needed to use 'url(img);
5. Had a bug in my code where I misspelled background. backgound vs. background 

*/
