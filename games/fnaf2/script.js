<<<<<<< HEAD
window.onload = async () => {
    const video = document.getElementById("video");
      const videoData = await fetch("SPOILER_FAZGYATT.mp4");
      video.src = URL.createObjectURL(await videoData.blob());
      video.load();
      video.style.display = "flex";
      video.play();
=======
window.onload = async () => {
    const video = document.getElementById("video");
      const videoData = await fetch("SPOILER_FAZGYATT.mp4");
      video.src = URL.createObjectURL(await videoData.blob());
      video.load();
      video.style.display = "flex";
      video.play();
>>>>>>> e220eda7291de86127418f6d5e678b3d44e8b35f
  };