import { useEffect, useState } from 'react';

export default function Monitor({
  isImperialUnits,
  setHeight,
  setWidth,
}: {
  isImperialUnits: boolean;
  setHeight: any;
  setWidth: any;
}) {
  const [aspectRatioWidth, setAspectRatioWidth] = useState(16);
  const [aspectRatioHeight, setAspectRatioHeight] = useState(9);
  const [resolutionWidth, setResolutionWidth] = useState(1920);
  const [resolutionHeight, setResolutionHeight] = useState(1080);
  //const [width, setWidth] = useState(0);
  //const [height, setHeight] = useState(0);
  const [diagonal, setDiagonal] = useState(32);

  

  const ppi =
    Math.sqrt(resolutionWidth ** 2 + resolutionHeight ** 2) / diagonal;

  const width =
    (aspectRatioWidth * diagonal) /
    Math.sqrt(aspectRatioWidth ** 2 + aspectRatioHeight ** 2);

  const height =
    (aspectRatioHeight * diagonal) /
    Math.sqrt(aspectRatioWidth ** 2 + aspectRatioHeight ** 2);

    useEffect(() => {
      setWidth(width);
      setHeight(height);
    }, [width, height, setWidth, setHeight]);

  // lisää tuki desimaaleille inputteihin
  // lisää useampi näyttö ja niiden vertailu
  // lisää napit kuvasuhteen valintaan
  // lisää napit resoluution valintaan

  const AspectRatiosButtons = () => {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <button
            className="border-4 p-2 rounded-md w-16 h-9 font-bold flex justify-center items-center"
            onClick={() => {
              setAspectRatioWidth(16);
              setAspectRatioHeight(9);
            }}
          >
            16:9
          </button>
          <button
            className="border-4 p-2 rounded-md w-36 h-9 font-bold flex justify-center items-center"
            onClick={() => {
              setAspectRatioWidth(0);
              setAspectRatioHeight(0);
            }}
          >
            custom
          </button>
        </div>
        <div className="flex gap-2">
          <button
            className="border-4 p-2 rounded-md w-20 h-9 font-bold flex justify-center items-center"
            onClick={() => {
              setAspectRatioWidth(21);
              setAspectRatioHeight(9);
            }}
          >
            21:9
          </button>
          <button
            className="border-4 p-2 rounded-md w-32 h-9 font-bold flex justify-center items-center"
            onClick={() => {
              setAspectRatioWidth(32);
              setAspectRatioHeight(9);
            }}
          >
            32:9
          </button>
        </div>
      </div>
    );
  };

  const ResolutionButtons = () => {
    if (aspectRatioWidth === 16 && aspectRatioHeight === 9)
      return (
        <div className="flex flex-row flex-wrap gap-2">
          <button
            className="border-4 p-2 rounded-md w-13 h-9 font-bold flex justify-center items-center"
            onClick={() => {
              setResolutionWidth(1920);
              setResolutionHeight(1080);
            }}
          >
            1920x1080
          </button>
          <button
            className="border-4 p-2 rounded-md w-13 h-9 font-bold flex justify-center items-center"
            onClick={() => {
              setResolutionWidth(2560);
              setResolutionHeight(1440);
            }}
          >
            2560 x 1440
          </button>
          <button
            className="border-4 p-2 rounded-md w-13 h-9 font-bold flex justify-center items-center"
            onClick={() => {
              setResolutionWidth(3840);
              setResolutionHeight(2160);
            }}
          >
            3840 x 2160
          </button>
          <button
            className="border-4 p-2 rounded-md w-13 h-9 font-bold flex justify-center items-center"
            onClick={() => {
              setResolutionWidth(7680);
              setResolutionHeight(4320);
            }}
          >
            7680 x 4320
          </button>
        </div>
      );
    else if (aspectRatioWidth === 21 && aspectRatioHeight === 9)
      return (
        <div className="flex flex-row gap-2 flex-wrap">
          <button
            className="border-4 p-2 rounded-md w-13 h-9 font-bold flex justify-center items-center"
            onClick={() => {
              setResolutionWidth(2560);
              setResolutionHeight(1080);
            }}
          >
            2560 x 1080
          </button>
          <button
            className="border-4 p-2 rounded-md w-13 h-9 font-bold flex justify-center items-center"
            onClick={() => {
              setResolutionWidth(3440);
              setResolutionHeight(1440);
            }}
          >
            3440 x 1440
          </button>
          <button
            className="border-4 p-2 rounded-md w-13 h-9 font-bold flex justify-center items-center"
            onClick={() => {
              setResolutionWidth(5120);
              setResolutionHeight(2160);
            }}
          >
            5120 x 2160
          </button>
        </div>
      );
    else if (aspectRatioWidth === 32 && aspectRatioHeight === 9)
      return (
        <div className="flex flex-row gap-2 flex-wrap">
          <button
            className="border-4 p-2 rounded-md w-13 h-9 font-bold flex justify-center items-center"
            onClick={() => {
              setResolutionWidth(3840);
              setResolutionHeight(1080);
            }}
          >
            3840 x 1080
          </button>
          <button
            className="border-4 p-2 rounded-md w-13 h-9 font-bold flex justify-center items-center"
            onClick={() => {
              setResolutionWidth(5120);
              setResolutionHeight(1440);
            }}
          >
            5120 x 1440
          </button>
        </div>
      );
    else return <></>;
  };

  return (
    <div className="w-80 flex flex-col gap-4">
      <div className="flex flex-col gap-2 justify-between">
        <AspectRatiosButtons />
        <div className="flex flex-row justify-between">
          <label className="text-2xl font-bold">Aspect ratio</label>
          <div>
            <input
              type="number"
              value={!isNaN(aspectRatioWidth) ? aspectRatioWidth : ''}
              onChange={(event) =>
                setAspectRatioWidth(parseInt(event.target.value))
              }
              className="text-2xl w-16 font-bold"
            />
            :
            <input
              type="number"
              value={!isNaN(aspectRatioHeight) ? aspectRatioHeight : ''}
              onChange={(event) =>
                setAspectRatioHeight(parseInt(event.target.value))
              }
              className="text-2xl w-16 font-bold"
            />
          </div>
        </div>
      </div>

      {/* RESOLUTION  */}
      <div className="flex flex-col gap-2">
        <ResolutionButtons />
        <div className="flex flex-row justify-between">
          <label className="text-2xl font-bold">Resolution</label>
          <div>
            <input
              type="number"
              value={!isNaN(resolutionWidth) ? resolutionWidth : ''}
              onChange={(event) =>
                setResolutionWidth(parseInt(event.target.value))
              }
              className="text-2xl w-20 font-bold"
            />
            x
            <input
              type="number"
              value={!isNaN(resolutionHeight) ? resolutionHeight : ''}
              onChange={(event) =>
                setResolutionHeight(parseInt(event.target.value))
              }
              className="text-2xl w-20 font-bold"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <label className="text-2xl font-bold">Screen size</label>
        <input
          value={!isNaN(diagonal) ? diagonal : ''}
          onChange={(event) => setDiagonal(parseFloat(event.target.value))}
          className="text-2xl w-16 font-bold"
        />
      </div>
      {/* <div className="flex flex-row justify-between">
        <button
          onClick={() => calculate()}
          className="text-2xl border-4 p-2 font-bold"
        >
          Calculate
        </button>
      </div> */}
      <div className="border-2 rounded-md  p-2">
        <div className="flex flex-row gap-2 justify-between">
          <label className="text-2xl font-bold">Width:</label>
          <label className="text-2xl font-bold">
            {(isImperialUnits ? width : width * 2.54).toFixed(2)}
            {isImperialUnits ? 'inches' : 'cm'}
          </label>
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <label className="text-2xl font-bold">Height:</label>
          <label className="text-2xl font-bold">
            {(isImperialUnits ? height : height * 2.54).toFixed(2)}
            {isImperialUnits ? 'inches' : 'cm'}
          </label>
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <label className="text-2xl font-bold">PPI:</label>
          <label className="text-2xl font-bold">{ppi.toFixed(2)}</label>
        </div>
      </div>
    </div>
  );
}
