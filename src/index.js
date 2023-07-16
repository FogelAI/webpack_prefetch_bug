function buttonHandler() {
  import(
    /* webpackPrefetch: true, webpackChunkName: "Module" */ "./Module/Module"
  );
}

const createButton = document.createElement("button");
createButton.innerText = "Click";
createButton.addEventListener("click", buttonHandler);
document.body.appendChild(createButton);
