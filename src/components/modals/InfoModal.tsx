import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the Bible Reference in 6 tries. After each guess, the color of the
        tiles will change to show how close your guess was to the solution.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="J"
          status="correct"
          position={0}
          solutionLength={8}
        />
        <Cell value="O" isCompleted={true} solutionLength={8} />
        <Cell value="H" isCompleted={true} solutionLength={8} />
        <Cell value="N" isCompleted={true} solutionLength={8} />
        <Cell value="3" isCompleted={true} solutionLength={8} />
        <Cell value=":" isCompleted={true} solutionLength={8} />
        <Cell value="1" isCompleted={true} solutionLength={8} />
        <Cell value="6" isCompleted={true} solutionLength={8} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter J is in the solution and in the correct spot.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="A" isCompleted={true} solutionLength={7} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="M"
          status="present"
          position={1}
          solutionLength={7}
        />
        <Cell value="O" isCompleted={true} solutionLength={7} />
        <Cell value="S" isCompleted={true} solutionLength={7} />
        <Cell value="4" isCompleted={true} solutionLength={7} />
        <Cell value=":" isCompleted={true} solutionLength={7} />
        <Cell value="9" isCompleted={true} solutionLength={7} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter M is in the solution but in the wrong spot.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="L" isCompleted={true} solutionLength={8} />
        <Cell value="U" isCompleted={true} solutionLength={8} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="K"
          status="absent"
          position={2}
          solutionLength={8}
        />
        <Cell value="E" isCompleted={true} solutionLength={8} />
        <Cell value="9" isCompleted={true} solutionLength={8} />
        <Cell value=":" isCompleted={true} solutionLength={8} />
        <Cell value="2" isCompleted={true} solutionLength={8} />
        <Cell value="1" isCompleted={true} solutionLength={8} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter K is not in the solution.
      </p>
      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="J" isCompleted={true} solutionLength={8} />
        <Cell value="O" isCompleted={true} solutionLength={8} />
        <Cell value="B" isCompleted={true} solutionLength={8} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="2"
          status="incorrectCharType"
          position={3}
          solutionLength={8}
        />
        <Cell value="3" isCompleted={true} solutionLength={8} />
        <Cell value=":" isCompleted={true} solutionLength={8} />
        <Cell value="1" isCompleted={true} solutionLength={8} />
        <Cell value="6" isCompleted={true} solutionLength={8} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number 2 is an incorrect solution type; try a letter or colon.
      </p>
      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="1" isCompleted={true} solutionLength={8} />
        <Cell value="J" isCompleted={true} solutionLength={8} />
        <Cell value="O" isCompleted={true} solutionLength={8} />
        <Cell value="H" isCompleted={true} solutionLength={8} />
        <Cell value="N" isCompleted={true} solutionLength={8} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="1"
          status="low"
          position={4}
          solutionLength={8}
        />
        <Cell value=":" isCompleted={true} solutionLength={8} />
        <Cell value="6" isCompleted={true} solutionLength={8} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number 1 is too low; try a larger number.
      </p>
      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="J" isCompleted={true} solutionLength={6} />
        <Cell value="U" isCompleted={true} solutionLength={6} />
        <Cell value="D" isCompleted={true} solutionLength={6} />
        <Cell value="E" isCompleted={true} solutionLength={6} />
        <Cell value="2" isCompleted={true} solutionLength={6} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="2"
          status="high"
          position={5}
          solutionLength={6}
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The number 2 is too high; try a smaller number.
      </p>
    </BaseModal>
  )
}
