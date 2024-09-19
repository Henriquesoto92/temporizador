"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date();

    // Definindo para 18h00 do mesmo dia
    target.setHours(18, 0, 0, 0);

    // Se já passou das 18h de hoje, define para amanhã
    if (now > target) {
      target.setDate(target.getDate() + 1);
    }

    const difference = target.getTime() - now.getTime();

    const timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  //const afterToday =
  // timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0;

  const afterToday = false;

  return afterToday ? (
    <div className="flex flex-col h-[100vh] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-center text-4xl font-bold">
        Falta pouco para confraternização da{" "}
      </h1>
      <Image
        className="dark:invert"
        src="https://cria.digital/wp-content/uploads/2022/07/cria.svg"
        alt="CRIA logo"
        width={180}
        height={38}
        priority
      />

      <div className="text-6xl font-mono text-blue-600 flex space-x-4">
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours.toString().padStart(2, "0")}</span>
          <span className="text-sm">Horas</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
          <span className="text-sm">Minutos</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
          <span className="text-sm">Segundos</span>
        </div>
      </div>
      <h1 className="text-center text-4xl font-bold">BORAA!!</h1>
      <div className="mt-8">
        <video
          className="w-64 h-auto rounded-lg shadow-lg"
          src="/time.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col h-[100vh] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-center text-4xl font-bold">
        Quando vai ser a proxima confraternização da
      </h1>
      <Image
        className="dark:invert"
        src="https://cria.digital/wp-content/uploads/2022/07/cria.svg"
        alt="CRIA logo"
        width={180}
        height={38}
        priority
      />
      <h1 className="text-center text-4xl font-bold">?</h1>
      <div className="mt-8">
        <img
          className="w-64 h-auto rounded-lg shadow-lg"
          src="https://media.tenor.com/8dGugqxC4sAAAAAM/shocked-surprised.gif"
          alt="GIF de surpresa"
        />
      </div>

      <h1 className="text-center text-4xl font-bold">Aguardemos.....</h1>
    </div>
  );
}
