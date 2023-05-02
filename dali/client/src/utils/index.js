import FileSaver from 'file-saver'
import { surpriseMePrompts } from '../constants'

/**
 * Description
 * ランダムプロンプトを取得する関数
 * @param {any} prompt
 * @returns {any}
 */

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
  const randomPrompt = surpriseMePrompts[randomIndex]

  if (randomPrompt === prompt) {
    return getRandomPrompt(prompt)
  }

  return randomPrompt
}

// 画像を保存する。
export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`)
}
