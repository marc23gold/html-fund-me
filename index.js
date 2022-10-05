async function connect() {
  console.log("Hi, I'm from script tage");
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    console.log("Connected");
    document.getElementById("connectButton").innerHTML = "Connected!";
  } else {
    console.log("No metamask");
    document.getElementById("connectButton").innerHTML =
      "Please Install metamask";
  }
}
