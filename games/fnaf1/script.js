window.onload = async () => {
    const video = document.getElementById("video");
      const videoData = await fetch("Freddy_Fit_Check.mp4");
      video.src = URL.createObjectURL(await videoData.blob());
      video.load();
      video.style.display = "flex";
      video.play();
  };