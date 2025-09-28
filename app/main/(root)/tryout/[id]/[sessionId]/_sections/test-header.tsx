import React from 'react'

type TestHeaderProps = {
  title: string;
  timeRemaining: number;
}


export default function TestHeader({ title, timeRemaining }: TestHeaderProps) {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: secs.toString().padStart(2, '0')
    };
  };

  const timeDisplay = formatTime(timeRemaining);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white rounded-lg shadow-xl px-4 sm:px-6 py-4 my-4 sm:my-6 mx-4 sm:mx-6 lg:mx-12 gap-2 sm:gap-0">
      <h1 className="text-lg sm:text-xl font-semibold text-gray-900 mx-auto sm:mx-0">
        {title}
      </h1>

      <div className="space-y-2 w-full sm:w-auto">
        <h4 className="text-salmon-normal text-sm sm:text-base text-center sm:text-left">Sisa Waktu</h4>

        <div className="flex items-center justify-center sm:justify-end gap-1 sm:gap-2">
          <div className="bg-sapphire-normal text-white text-center px-5 py-2 rounded-lg space-y-1 min-w-12">
            <p className='text-xl sm:text-3xl font-semibold'>{timeDisplay.hours}</p>
            <p className='text-xs sm:text-sm'>Jam</p>
          </div>
          <span className="text-sapphire-normal font-semibold text-2xl sm:text-4xl px-1">:</span>
          <div className="bg-sapphire-normal text-white text-center px-5 py-2 rounded-lg space-y-1 min-w-12">
            <p className='text-xl sm:text-3xl font-semibold'>{timeDisplay.minutes}</p>
            <p className='text-xs sm:text-sm'>Menit</p>
          </div>
          <span className="text-sapphire-normal font-semibold text-2xl sm:text-4xl px-1">:</span>
          <div className="bg-sapphire-normal text-white text-center px-5 py-2 rounded-lg space-y-1 min-w-12">
            <p className='text-xl sm:text-3xl font-semibold'>{timeDisplay.seconds}</p>
            <p className='text-xs sm:text-sm'>Detik</p>
          </div>
        </div>
      </div>
    </div>
  );
};