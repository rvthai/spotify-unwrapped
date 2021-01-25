// playTrack(previewURL) {
//   let activeTrack = document.getElementById("favorite-player");
//   if (!activeTrack) {
//     activeTrack = new Audio(previewURL);
//     activeTrack.setAttribute("id", "favorite-player");
//     activeTrack.onended = () => this.setState({ currentlyPlaying: "" });

//     activeTrack.volume = 0.3;
//     document.getElementById("result-table").append(activeTrack);
//     activeTrack.play();
//     this.setState({ currentlyPlaying: previewURL });
//   } else {
//     if (activeTrack.paused) {
//       activeTrack.play();
//       this.setState({ currentlyPlaying: previewURL });
//     } else {
//       activeTrack.pause();
//       this.setState({ currentlyPlaying: "" });
//     }
//     if (activeTrack.src !== previewURL) {
//       activeTrack.currentTime = 0;
//       activeTrack.src = previewURL;
//       activeTrack.play();
//       this.setState({ currentlyPlaying: previewURL });
//     }
//   }
// }
