function toggleClick() {
    const button = document.querySelector('.buttonColor, .buttonColor1');
    const subChangeColor = document.querySelector('.subChangeColorContainer, .subChangeColorContainer1');
  
    if (button.classList.contains('buttonColor')) {
        button.classList.remove('buttonColor');
        button.classList.add('buttonColor1');
    } else if (button.classList.contains('buttonColor1')) {
        button.classList.remove('buttonColor1');
        button.classList.add('buttonColor');
    }

    if (subChangeColor.classList.contains('subChangeColorContainer')) {
        subChangeColor.classList.remove('subChangeColorContainer');
        subChangeColor.classList.add('subChangeColorContainer1');
      } else {
        subChangeColor.classList.remove('subChangeColorContainer1');
        subChangeColor.classList.add('subChangeColorContainer');
    }
}
