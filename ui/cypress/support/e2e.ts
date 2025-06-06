// Import commands.js using ES2015 syntax:
import './commands';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      // add custom commands types here
    }
  }
}
