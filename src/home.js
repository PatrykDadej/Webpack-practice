function createHeader(headerContent) {
  const homeHeaderDiv = document.createElement('div');
  homeHeaderDiv.classList.add('pageHeader');
  const homeHeader = document.createElement('h2');
  homeHeader.textContent = headerContent;
  homeHeaderDiv.appendChild(homeHeader);

  return homeHeaderDiv;
}

function createHomeContent() {
  const homeContentDiv = document.createElement('div');

  const homeContent1 = document.createElement('p');
  homeContent1.textContent = `Welcome to our Japanese restaurant, where you can experience the authentic flavors of Japan right 
    in your hometown. Our skilled chefs use only the freshest ingredients to prepare traditional Japanese dishes, such as sushi, ramen, and tempura.
    Whether you're in the mood for a hearty bowl of ramen or a delicate sushi roll, our menu has something to satisfy every craving.`;
  homeContent1.classList.add('homeParagraph');

  const homeContent2 = document.createElement('p');
  homeContent2.textContent = `We also offer a wide selection of sake, beer, and wine to complement your meal.
    At our restaurant, we believe that dining should be an experience, not just a meal. That's why we strive to create an atmosphere that is both welcoming and authentic. 
    From the elegant decor to the friendly service, we want you to feel as though you've been transported to Japan.
    So come and visit us today and discover the flavors of Japan right here at our restaurant. We can't wait to serve you!`;
  homeContent2.classList.add('homeParagraph');

  const homeContent3 = document.createElement('p');
  homeContent3.innerHTML = `To make a reservation or inquire about our menu, please feel free to contact us using the following information: <br><br>
    Phone: 1234567890<br>
    Email: exampleadress@sakurasushi.com<br>
    Address: 46 SomeStreet, SomeCity, A33 A333<br><br>
    We look forward to hearing from you and serving you delicious Japanese cuisine!`;
  homeContent3.classList.add('homeParagraph');

  homeContentDiv.appendChild(homeContent1);
  homeContentDiv.appendChild(homeContent2);
  homeContentDiv.appendChild(homeContent3);

  return homeContentDiv;
}

function homeLoader() {
  const mainDiv = document.querySelector('.mainDiv');

  if (document.querySelector('.contentArea')) {
    mainDiv.removeChild(document.querySelector('.contentArea'));
  }
  const mainDivContentArea = document.createElement('div');
  mainDivContentArea.classList.add('contentArea');

  const header = createHeader('About Us');
  mainDivContentArea.appendChild(header);

  const mainContent = createHomeContent();
  mainDivContentArea.appendChild(mainContent);

  mainDiv.appendChild(mainDivContentArea);
}

export { homeLoader, createHeader };
