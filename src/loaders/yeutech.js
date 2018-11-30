export default `
<style type="text/css"}>
@media only screen and (min-width: 0px) and (max-width: 799px)  {
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -42px;
  }
}
@media only screen and (min-width: 799px)  {
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
  }
}
.line {
  animation: expand 1.5s ease-in-out infinite;
  border-radius: 10px;
  display: inline-block;
  transform-origin: center center;
  margin: 0 3px;
  width: 1px;
  height: 25px;
}
.line:nth-child(1) {
  background: linear-gradient(#B31255, #75096a);
  /* Opera linear gradient support */
  background: -o-linear-gradient(#B31255, #75096a);
}
.line:nth-child(2) {
  animation-delay: 180ms;
  background: linear-gradient(#B31255, #75096a);
  /* Opera linear gradient support */
  background: -o-linear-gradient(#B31255, #75096a);
}
.line:nth-child(3) {
  animation-delay: 360ms;
  background: linear-gradient(#B31255, #75096a);
  /* Opera linear gradient support */
  background: -o-linear-gradient(#B31255, #75096a);
}
.line:nth-child(4) {
  animation-delay: 540ms;
  background: linear-gradient(#B31255, #75096a);
  /* Opera linear gradient support */
  background: -o-linear-gradient(#B31255, #75096a);
}
.line:nth-child(5) {
  animation-delay: 540ms;
  background: linear-gradient(#B31255, #75096a);
  /* Opera linear gradient support */
  background: -o-linear-gradient(#B31255, #75096a);
}
.line:nth-child(6) {
  animation-delay: 360ms;
  background: linear-gradient(#B31255, #75096a);
  /* Opera linear gradient support */
  background: -o-linear-gradient(#B31255, #75096a);
}
.line:nth-child(7) {
  animation-delay: 180ms;
  background: linear-gradient(#B31255, #75096a);
  /* Opera linear gradient support */
  background: -o-linear-gradient(#B31255, #75096a);
}
.line:nth-child(8) {
  background: linear-gradient(#B31255, #75096a);
  /* Opera linear gradient support */
  background: -o-linear-gradient(#B31255, #75096a);
}
@keyframes expand {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(2);
  }
}
</style>
<div class="loader">
<div class="line"></div>
<div class="line"></div>
<div class="line"></div>
<div class="line"></div>
<div class="line"></div>
<div class="line"></div>
<div class="line"></div>
<div class="line"></div>
</div>
`;
