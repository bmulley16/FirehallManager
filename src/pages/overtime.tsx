import Calender from "../components/Calender-and-staffing/calender";
import { ProfileAside } from "../components/accountPageAside";
import { OvertimeGridBlocks } from "../components/overtimePageGridBlocks";

export function OvertimePage() {
  return (
    <div className="flex h-screen bg-gray-800">
      <ProfileAside />
      <div className="flex-1">
        <div className="h-screen grid grid-cols-3 gap-4 p-4">
          <OvertimeBlock />
          <OvertimeGridBlocks heading="Projection"></OvertimeGridBlocks>
          <OvertimeGridBlocks heading="Leave Balances"></OvertimeGridBlocks>
          <OvertimeGridBlocks heading="Shift Trades"></OvertimeGridBlocks>
          <OvertimeGridBlocks heading="Sick Leave Guidelines"></OvertimeGridBlocks>
          <div className=" h-full  p-4 rounded bg-white flex flex-col items-center">
            <Calender />
          </div>
        </div>
      </div>
    </div>
  );
}

function OvertimeBlock() {
  return (
    <OvertimeGridBlocks heading="Overtime">
      <p>this is a test</p>
      <p>foobar</p>
    </OvertimeGridBlocks>
  );
}

function ProjectionBlock() {}

// data structure:

/**
 * - opt into overtime (track this)
 * - each shift keeps track of the last called person (track this)
 * - each shift has a overtime priority (track this)
 * - each shift has a normal overtime and a 4 hour sequence overtime (track this)
 * - each person can choose to be paid in cash or bank the hours (track this)
 * - there is a limit for banked hours (track this)
 * - order of operations is
 *  - get next squad
 *  - start at tracked last person
 *  - iterate through the list to tracked last person - 1
 *  - go to next squad
 */

// Normal overtime rotation

// A | C B D
// B | D C A
// C | A D B
// D | B A C

//  They go in alphabetical order and have no impact on eachother.

// 4- hour sequence (everything that is under 12 hours)

//  A |  D C B
//  B |  A D C
//  C |  B A D
//  D |  C B A
