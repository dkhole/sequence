#TODO

- Finished most of the main game loop for the front end

- Create a toggle to allow user to view/hide hand (done)
- Figure out how to calculate winning condition (done)
  - Figure out how to render complete row and disable any future click events (done)
    - Array of index values of completed 5-in-a-row (done)
    - Keep them in a hook and useEffect to call function everytime hook is updated (done)
    - callback function will iterate through array get target.parent.children[index] and change its className (done)
    - Also need to update virtual board (done)
  - Need to update functions to include corner pieces (done)
- Add winning screen (done)
- Fix winning algo, if element after + 2 is still + 2 then count++ and break, otherwise count++ and continue
