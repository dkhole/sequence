#TODO

- Finished most of the main game loop for the front end

- Create a toggle to allow user to view/hide hand (done)
- Figure out how to calculate winning condition (done)
  - Figure out how to render complete row and disable any future click events
    - Array of index values of completed 5-in-a-row (done)
    - Keep them in a hook and useEffect to call function everytime hook is updated
    - callback function will iterate through array get target.parent.children[index] and change its className
  - Need to update functions to include corner pieces
- Add winning screen
