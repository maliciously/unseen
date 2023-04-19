function copyDiscord() {
    console.log("test");
    navigator.clipboard.writeText("unseen#0001");
    document.getElementsByClassName("discord")[0].innerHTML = "Tag Copied!";
    setTimeout(() => {
        document.getElementsByClassName("discord")[0].innerHTML = "unseen#0001";

    }, 1250);
 }