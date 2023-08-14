'use client';

import { useState } from 'react';
import Monitor from './Monitor';

export default function Home() {
  const [isImperialUnits, setisImperialUnits] = useState(false);
 
  const [width1, setWidth1] = useState(0);
  const [height1, setHeight1] = useState(0);
  const [width2, setWidth2] = useState(0);
  const [height2, setHeight2] = useState(0);

  return (
    <>
      <nav>
        <div className="flex flex-row gap-2 justify-end p-2">
          <button
            onClick={() => setisImperialUnits(!isImperialUnits)}
            className="text-sm border-2 p-2 font-bold w-32"
          >
            {isImperialUnits ? 'inches' : 'centimeters'}
          </button>
        </div>
      </nav>
      <main className="flex min-h-screen flex-col justify-center items-center p-4">
        <div className='w-full h-96'>
          {/* visualize two screensizes with two different colored divs */}

          <div
            className="border-2 bg-slate-500 absolute opacity-80"
            style={{ width: width1*20, height: height1*20 }}
          ></div>

          <div
            className="border-2 bg-rose-500 absolute opacity-50"
            style={{ width: width2*20, height: height2*20 }}
          ></div>
        </div>
        <div className="flex flex-row gap-4 ">
          <Monitor
            setHeight={setHeight1}
            setWidth={setWidth1}
            isImperialUnits={isImperialUnits}
          />
          <Monitor
            setHeight={setHeight2}
            setWidth={setWidth2}
            isImperialUnits={isImperialUnits}
          />
        </div>
      </main>
    </>
  );
}
