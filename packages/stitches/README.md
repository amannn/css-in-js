# stitches

## Requirements

- Combine classes from owner and self (ideally with overrides)
- Selectors (e.g. owl)
- Importing a theme
- How does responsive work?

## Problems

- A bit unreliable currently:
  - Commenting out one button results in styles not being applied in the other one.
  - Border bottom right radius suddenly not there.
  - Why is the React API necessary for the CSS function?
- Runtime. E.g. if we need any calculation based on color, we have to ship that to the browser.
- "@stitches/react : The css prop should ideally not be dynamic. Define it outside your component using the css composer, or use a memo hook"