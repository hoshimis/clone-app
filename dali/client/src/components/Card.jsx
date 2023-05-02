import React from 'react'

import { download } from '../assets'
import { downloadImage } from '../utils'

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <>
      <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
        <img
          className="w-full h-auto object-cover rounded-xl"
          src={photo}
          alt={prompt}
        />
        {/* 画像にホバーしたら表示される */}
        <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
          {/* promptの表示 */}
          <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>
          <div className="mt-5 flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              {/* 名前の頭文字をアイコンとして表示 */}
              <div className="w-7 h-7 rounded-full object-cover  bg-green-700 flex justify-center items-center text-white text-xs font-bold">
                {name[0]}
              </div>
              {/* 名前の表示 */}
              <p className="text-white text-sm">{name}</p>
            </div>
            {/* ダウンロードボタン */}
            <button
              type="button"
              onClick={() => downloadImage(_id, photo)}
              className="outline-none bg-transparent border-none"
            >
              <img
                src={download}
                alt="download"
                className="w-6 h-6 object-contain invert"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
