const closeModalBtns = document.querySelectorAll("#closeModalBtn");
const openModalBtns = document.querySelectorAll("#openModalBtn");
const modal = document.getElementById("myModal");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    closeModal();
  }
});

for (const closeButton of closeModalBtns) {
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

for (const openButton of openModalBtns) {
  openButton.addEventListener("click", () => {
    modal.style.display = "block";
  });
}

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const slider = document.getElementById("slider").value;
    const selectedPlan = document.querySelector(
      'input[name="plan"]:checked'
    ).value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Slider:", slider);
    console.log("Selected Plan:", selectedPlan);

    const formData = {
      name: name,
      email: email,
      slider: slider,
      selectedPlan: selectedPlan,
    };

    // const apiUrl = "forms.maakeetoo.com/formapi/703";
    // const proxyServer = "https://cors-anywhere.herokuapp.com/";
    fetch("forms.maakeetoo.com/formapi/703", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => console.log("res", response))
      .then((data) => {
        console.log("API Response:", data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });

    showSuccessToast();

    form.reset();
  });
});

function showSuccessToast() {
  var toast = document.getElementById("toast");
  toast.style.display = "block";

  setTimeout(function () {
    toast.style.display = "none";
  }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const sliderValue1 = document.getElementById("sliderValue");
  const freeRadio = document.getElementById("free");
  const proRadio = document.getElementById("pro");
  const enterpriseRadio = document.getElementById("enterprise");

  function updateSliderValue() {
    if (freeRadio.checked) {
      slider.value = 10;
    } else if (proRadio.checked) {
      slider.value = 35;
    } else if (enterpriseRadio.checked) {
      slider.value = 75;
    }
  }

  slider.value = 50;
  sliderValue.value = slider.value;

  slider.addEventListener("input", function () {
    sliderValue1.value = slider.value;

    const sliderValue = parseInt(slider.value);

    if (sliderValue >= 0 && sliderValue <= 20) {
      freeRadio.checked = true;
    } else if (sliderValue > 20 && sliderValue <= 50) {
      proRadio.checked = true;
    } else {
      enterpriseRadio.checked = true;
    }
  });

  freeRadio.addEventListener("change", updateSliderValue);
  proRadio.addEventListener("change", updateSliderValue);
  enterpriseRadio.addEventListener("change", updateSliderValue);
});
