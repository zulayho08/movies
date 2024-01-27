let movieRender = movies.slice(5, 21);

let Myfunc = (movie) => {
  movie.forEach((element) => {
    let item = document.createElement(`li`);
    item.classList.add(`list__item`);
    item.style.width = "370px";
    item.style.border = "2px solid #1a1a1b1c";

    let img = document.createElement(`img`);
    img.classList.add(`item--img`);
    img.setAttribute("src", element.smallThumbnail);
    item.append(img);

    let head = document.createElement(`h4`);
    head.classList.add(`head`);
    head.textContent = element.title;
    head.style.marginBottom = "30px";
    item.append(head);

    let year = document.createElement(`span`);
    year.classList.add(`item__span`);
    year.textContent = `📆 ${element.year}`;
    item.append(year);

    let rating = document.createElement(`span`);
    rating.classList.add(`item__span`);
    rating.textContent = `⭐  ${element.imdbRating}`;
    rating.style.marginTop = "-30px";
    item.append(rating);

    // Watch trailer

    let link = document.createElement(`a`);
    link.classList.add(`item__link`);
    link.setAttribute("href", element.youtubeId);
    link.textContent = "Watch trailer";
    link.style.border = "2px solid #0d6efd";
    link.style.color = "#0d6efd";
    item.append(link);

    link.addEventListener("click", () => {
      link.style.backgroundColor = "#0d6efd";
      link.value = element.youtubeId;
    });

    // More info

    let linkBtn = document.createElement(`a`);
    linkBtn.classList.add(`item__btn`);
    linkBtn.textContent = "More info";
    linkBtn.style.border = "2px solid grey";
    linkBtn.style.color = "grey";
    item.append(linkBtn);

    linkBtn.addEventListener("click", () => {
      linkBtn.classList.add(`style`);
      alert(element.summary);
    });

    // Bookmark

    let bookmark = document.createElement(`a`);
    bookmark.classList.add(`item__btn2`);
    bookmark.setAttribute("href", element.youtubeId);
    bookmark.textContent = "Bookmark";
    bookmark.style.border = "2px solid #28a745";
    bookmark.style.color = "#28a745";
    item.append(bookmark);

    bookmark.addEventListener("click", () => {
      bookmark.value = element.youtubeId;
    });

    cards.appendChild(item);
  });
};

Myfunc(movieRender);
