const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

  const executeCodes = () => {
    //if cookie contains beegood-b it will be returned and below of this code will not run
    if(document.cookie.includes("beegood-b")) return;
    cookieBox.classList.add("show");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        cookieBox.classList.remove("show");

        //if button was accepted
        if (button.id == "acceptBtn") {
          //set cookies for 1 month.
          document.cookie = "cookieBy= beegood-b; max-age=" + 60 * 60 * 24 * 30;
        }
      });
    });
  };

  //executeCodes function will be called on webpage load
  window.addEventListener("load", executeCodes);
