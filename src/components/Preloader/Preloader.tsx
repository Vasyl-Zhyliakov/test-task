import { useState, useEffect } from 'react';
import './preloader.scss';
import Sprite from '../svg/Sprite';
import Logo from '../svg/Logo';
import cn from 'classnames';
import marvelTheater from '../assets/images/marvel-theater.png';

type Props = {
  isLoad: boolean;
  setIsload: (value: boolean) => void;
};

export default function Preloader({ isLoad, setIsload }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsload(true);
            return 100;
          }

          return prev + 1;
        });
      }, 100);
    }, 1000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cn('preloader', {
        'preloader--done': isLoad,
      })}
    >
      <div className="logos">
        <Sprite />
        <span>×</span>
        <img src={marvelTheater} alt="Marvels' Black Panther Wakanda Forever only in theater" />
      </div>

      <div className="title">
        <Logo />
      </div>

      <div className="progress">
        <div className="bar">
          <div className="fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="percent">{progress}%</div>
      </div>
    </div>
  );
}
