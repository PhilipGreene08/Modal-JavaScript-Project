//IIFE to contain
(function () {
  //grab pieces of DOM
  const storeItems = document.querySelectorAll('.store-item')
  const lightBoxContainer = document.querySelector('.lightbox-container')
  const lightboxItem = document.querySelector('.lightbox-item')
  const storeImage = document.querySelectorAll('.store-img')

  const btnLeft = document.querySelector('.btnLeft')
  const btnRight = document.querySelector('.btnRight')

  const closeBox = document.querySelector('.lightbox-close')

  //push all item images in an array
  let imgArr = []
  storeImage.forEach(img => {
    imgArr.push(img.src)
  })

  //img counter to iterate through each img
  let imgCounter = 0

  //click store item to bring up pics list
  //add click ability to each item in store
  storeItems.forEach(item => {
    item.addEventListener('click', e => {
      const itemURL = e.target.src
      lightBoxContainer.classList.add(`show`)

      lightboxItem.style.backgroundImage = `url(${itemURL})`
      imgCounter = imgArr.indexOf(itemURL); //this is the line of code that took the longest to figure out
      console.log(imgCounter);
    })
  })

  //add left btn
  btnLeft.addEventListener('click', e => {
    imgCounter--
    if (imgCounter < 0) {
      //console.log(imgCounter);
      imgCounter = imgArr.length - 1
    }
    console.log(imgCounter);
    lightboxItem.style.backgroundImage = `url(${imgArr[imgCounter]})`
  })

  //add right btn
  btnRight.addEventListener('click', e => {
    imgCounter++
    if (imgCounter >= imgArr.length) {
      imgCounter = 0
    }
    lightboxItem.style.backgroundImage = `url(${imgArr[imgCounter]})`
  })

  //close window
  closeBox.addEventListener('click', e => {
    lightBoxContainer.classList.remove(`show`)
    console.log(`yes`);
  })

})()
