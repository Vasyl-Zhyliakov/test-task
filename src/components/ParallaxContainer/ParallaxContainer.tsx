import { useRef, useEffect } from "react";
import "./parallaxContainer.scss";
import ButtonBg from "../svg/ButtonBg";
import ButtonIcon from "../svg/ButtonIcon";
import Sprite from "../svg/Sprite";
import BigLogo from "../svg/BigLogo";
import ScrambleText from "../ScrambleText/ScrambleText";
import ButtonLayer1 from "../svg/ButtonLayer1";
import ButtonLayer2 from "../svg/ButtonLayer2";
import ButtonSecondIcon from "../svg/ButtonSecondIcon";
import cn from "classnames";

type Props = {
  isStart: boolean;
  setIsStart: (value: boolean) => void;
};

export default function ParallaxContainer({ isStart, setIsStart }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      const image = imageRef.current;
      if (!container || !image) return;

      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / width;
      const y = (e.clientY - top - height / 2) / height;

      const moveX = -x * 30;
      const moveY = -y * 30;

      image.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const handleButtonClick = () => {
    setIsStart(true);
  };

  return (
    <div
      className={cn("parallax-container", {
        "parallax-container--done": isStart,
      })}
      ref={containerRef}
    >
      <img
        ref={imageRef}
        src="src/assets/images/background.png"
        alt="Parallax Background"
        className="parallax-image"
      />

      <div className="content">
        <div className="start__button">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1"
            className="button--plain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="button__outer">
              <div className="button__bg">
                <ButtonBg />
              </div>

              <div className="button__inner">
                <div className="button__text">Accessible version</div>
                <div className="button__icon">
                  <ButtonIcon />
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="start__inner">
          <div className="logos">
            <Sprite />
            <span>×</span>
            <img
              src="../src/assets/images/marvel-theater.png"
              alt="Marvels' Black Panther Wakanda Forever only in theater"
            />
          </div>

          <div className="main-logo-block">
            <div className="title-block">
              <BigLogo />

              <span className="title-block--part1">The</span>
              <span className="title-block--part2">Of</span>

              <div className="main-logo-elements-group main-logo-elements-group--1">
                <div className="main-logo-line main-logo-line--13"></div>
                <div className="main-logo-line main-logo-line--70"></div>
              </div>

              <div className="main-logo-elements-group main-logo-elements-group--2">
                <div className="main-logo-line main-logo-line--72 main-logo-line--lower"></div>
                <div className="main-logo-line-text">
                  <ScrambleText text="zero" duration={6} />
                </div>
                <div className="main-logo-line main-logo-line--13 main-logo-line--upper"></div>
              </div>

              <div className="main-logo-elements-group main-logo-elements-group--3">
                <div className="main-logo-line main-logo-line--27 main-logo-line--lower"></div>
                <div className="main-logo-line-text">
                  <ScrambleText text="limits" duration={6} />
                </div>
                <div className="main-logo-line main-logo-line--8 main-logo-line--lower"></div>
              </div>

              <div className="main-logo-elements-group main-logo-elements-group--4">
                <div className="main-logo-line main-logo-line--25"></div>
              </div>

              <div className="main-logo-polygone main-logo-polygone--left">
                <img src="src/assets/images/icons/polygon.png" alt="polygone" />
              </div>

              <div className="main-logo-polygone main-logo-polygone--right">
                <img src="src/assets/images/icons/polygon.png" alt="polygone" />
              </div>
            </div>
          </div>
        </div>

        <div className="start__text-block">
          <p className="start__text-line">explore new paths.</p>
          <p className="start__text-line">find your gift.</p>
        </div>

        <div className="enter-button" onClick={handleButtonClick}>
          <div className="enter-button__bg">
            <div className="enter-button__bg__layer-3"></div>
          </div>

          <div className="enter-button__content">
            <div className="enter-button__elements-group enter-button__elements-group--1">
              <div className="enter-button__line enter-button__line--1"></div>
              <div className="enter-button__line enter-button__line--2"></div>
            </div>

            <div className="enter-button__elements-group enter-button__elements-group--2">
              <div className="enter-button__line enter-button__line--2"></div>
              <div className="enter-button__line enter-button__line--1"></div>
            </div>

            <div className="enter-button__outer">
              <div className="enter-button__layer-1">
                <ButtonLayer1 />
              </div>

              <div className="enter-button__layer-2">
                <ButtonLayer2 />
              </div>

              <div className="enter-button__inner">
                <div className="enter-button__text">
                  <ScrambleText text="Enter" duration={12} />
                </div>

                <div className="enter-button__icon">
                  <ButtonSecondIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <Sprite />
          <img
            src="../src/assets/images/marvel-theater.png"
            alt="Marvels' Black Panther Wakanda Forever only in theater"
          />
          <div className="footer__text">Sprite Zero Sugar® | © MARVEL</div>
        </div>
      </div>
    </div>
  );
}
