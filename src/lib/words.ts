import {
  addDays,
  differenceInDays,
  formatISO,
  parseISO,
  startOfDay,
} from 'date-fns'
import { default as GraphemeSplitter } from 'grapheme-splitter'
import queryString from 'query-string'

import { BOOKS } from '../constants/booklist'
import { ENABLE_ARCHIVED_GAMES } from '../constants/settings'
import { SOLUTIONS } from '../constants/solutions'
import { NOT_CONTAINED_MESSAGE, WRONG_SPOT_MESSAGE } from '../constants/strings'
import { getToday } from './dateutils'
import { getGuessStatuses } from './statuses'

// 1 January 2022 Game Epoch
export const firstGameDate = new Date(2022, 0)
export const periodInDays = 1

export const isValidReference = (guess: string): boolean => {
  const oneChapterBooks = ['OBADIAH', 'PHILEMON', '2JOHN', '3JOHN', 'JUDE']
  const oneChapterRegExp = /^[2-3]?[A-Za-z]+[0-9]{1,2}$/g
  const regExp = /^[1-2]?[A-Za-z]+[0-9]{1,3}:[0-9]{1,3}$/g

  if (
    !BOOKS.some((book) => guess.toLowerCase().startsWith(book.toLowerCase()))
  ) {
    return false
  }

  if (
    oneChapterBooks.some((book) =>
      guess.toLowerCase().startsWith(book.toLowerCase())
    )
  ) {
    if (!oneChapterRegExp.test(guess)) {
      return false
    }

    return true
  }

  if (!regExp.test(guess)) return false

  return true
}

export const isWinningWord = (word: string) => {
  return solution === word
}

// build a set of previously revealed letters - present and correct
// guess must use correct letters in that space and any other revealed letters
// also check if all revealed instances of a letter are used (i.e. two C's)
export const findFirstUnusedReveal = (word: string, guesses: string[]) => {
  if (guesses.length === 0) {
    return false
  }

  const lettersLeftArray = new Array<string>()
  const guess = guesses[guesses.length - 1]
  const statuses = getGuessStatuses(solution, guess)
  const splitWord = unicodeSplit(word)
  const splitGuess = unicodeSplit(guess)

  for (let i = 0; i < splitGuess.length; i++) {
    if (statuses[i] === 'correct' || statuses[i] === 'present') {
      lettersLeftArray.push(splitGuess[i])
    }
    if (statuses[i] === 'correct' && splitWord[i] !== splitGuess[i]) {
      return WRONG_SPOT_MESSAGE(splitGuess[i], i + 1)
    }
  }

  // check for the first unused letter, taking duplicate letters
  // into account - see issue #198
  let n
  for (const letter of splitWord) {
    n = lettersLeftArray.indexOf(letter)
    if (n !== -1) {
      lettersLeftArray.splice(n, 1)
    }
  }

  if (lettersLeftArray.length > 0) {
    return NOT_CONTAINED_MESSAGE(lettersLeftArray[0])
  }
  return false
}

export const unicodeSplit = (word: string) => {
  return new GraphemeSplitter().splitGraphemes(word)
}

export const unicodeLength = (word: string) => {
  return unicodeSplit(word).length
}

export const localeAwareLowerCase = (text: string) => {
  return process.env.REACT_APP_LOCALE_STRING
    ? text.toLocaleLowerCase(process.env.REACT_APP_LOCALE_STRING)
    : text.toLowerCase()
}

export const localeAwareUpperCase = (text: string) => {
  return process.env.REACT_APP_LOCALE_STRING
    ? text.toLocaleUpperCase(process.env.REACT_APP_LOCALE_STRING)
    : text.toUpperCase()
}

export const getLastGameDate = (today: Date) => {
  const t = startOfDay(today)
  let daysSinceLastGame = differenceInDays(firstGameDate, t) % periodInDays
  return addDays(t, -daysSinceLastGame)
}

export const getNextGameDate = (today: Date) => {
  return addDays(getLastGameDate(today), periodInDays)
}

export const isValidGameDate = (date: Date) => {
  if (date < firstGameDate || date > getToday()) {
    return false
  }

  return differenceInDays(firstGameDate, date) % periodInDays === 0
}

export const getIndex = (gameDate: Date) => {
  let start = firstGameDate
  let index = -1
  do {
    index++
    start = addDays(start, periodInDays)
  } while (start <= gameDate)

  return index % SOLUTIONS.length
}

export const getWordOfDay = (index: number) => {
  if (index < 0) {
    throw new Error('Invalid index')
  }

  return localeAwareUpperCase(SOLUTIONS[index].reference)
}

export const getSolution = (gameDate: Date) => {
  const nextGameDate = getNextGameDate(gameDate)
  const index = getIndex(gameDate)
  const wordOfTheDay = getWordOfDay(index)
  const solution = wordOfTheDay.replaceAll(' ', '')
  return {
    solution,
    verseText: SOLUTIONS[index].verseText,
    displayReference: wordOfTheDay,
    referenceUrl: SOLUTIONS[index].referenceURL,
    solutionGameDate: gameDate,
    solutionIndex: index,
    tomorrow: nextGameDate.valueOf(),
  }
}

export const getGameDate = () => {
  if (getIsLatestGame()) {
    return getToday()
  }

  const parsed = queryString.parse(window.location.search)
  try {
    const d = startOfDay(parseISO(parsed.d!.toString()))
    if (d >= getToday() || d < firstGameDate) {
      setGameDate(getToday())
    }
    return d
  } catch (e) {
    console.log(e)
    return getToday()
  }
}

export const setGameDate = (d: Date) => {
  try {
    if (d < getToday()) {
      window.location.href = '/?d=' + formatISO(d, { representation: 'date' })
      return
    }
  } catch (e) {
    console.log(e)
  }
  window.location.href = '/'
}

export const getIsLatestGame = () => {
  if (!ENABLE_ARCHIVED_GAMES) {
    return true
  }
  const parsed = queryString.parse(window.location.search)
  return parsed === null || !('d' in parsed)
}

export const {
  solution,
  verseText,
  displayReference,
  referenceUrl,
  solutionGameDate,
  solutionIndex,
  tomorrow,
} = getSolution(getGameDate())
