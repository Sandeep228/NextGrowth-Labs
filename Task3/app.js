document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".image-gallery");
  let page = 1;
  let loading = false;

  function fetchImages() {
    if (loading) return;
    loading = true;

    const apiUrl = `https://api.unsplash.com/photos/random?client_id=QlMdasjmwP-eKbFPqAIx_iMlywI_NDLvT1nszTM84Ec&count=30&page=${page}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((photo) => {
          const imageCard = document.createElement("div");
          imageCard.classList.add("image-card");

          const image = document.createElement("img");
          image.src = photo.urls.small;
          image.alt = photo.alt_description;

          const author = document.createElement("p");
          author.textContent = `Photo by ${photo.user.name}`;

          imageCard.appendChild(image);
          imageCard.appendChild(author);
          gallery.appendChild(imageCard);
        });
        loading = false;
        page++;
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        loading = false;
      });
  }

  function isScrolledToBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }

  window.addEventListener("scroll", function () {
    if (isScrolledToBottom()) {
      fetchImages();
    }
  });

  fetchImages();
});
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".image-gallery");
  let page = 1;
  let loading = false;

  function fetchImages() {
    if (loading) return;
    loading = true;

    const apiUrl = `https://api.unsplash.com/photos/random?client_id=QlMdasjmwP-eKbFPqAIx_iMlywI_NDLvT1nszTM84Ec&count=30&page=${page}`;

    const loadingMessage = document.createElement("p");
    loadingMessage.textContent = "Loading, please wait...";
    gallery.appendChild(loadingMessage);

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (loadingMessage.parentNode) {
          loadingMessage.parentNode.removeChild(loadingMessage);
        }

        data.forEach((photo) => {
          const imageCard = document.createElement("div");
          imageCard.classList.add("image-card");

          const image = document.createElement("img");
          image.src = photo.urls.small;
          image.alt = photo.alt_description;

          const author = document.createElement("p");
          author.textContent = `Photo by ${photo.user.name}`;

          imageCard.appendChild(image);
          imageCard.appendChild(author);
          gallery.appendChild(imageCard);
        });
        loading = false;
        page++;
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        loading = false;
      });
  }

  function isScrolledToBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }

  window.addEventListener("scroll", function () {
    if (isScrolledToBottom()) {
      fetchImages();
    }
  });

  fetchImages();
});
