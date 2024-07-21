/**
 * Validator class is intended to be used as a store for various helper
 * functions designed to ensure data integrity
 */
class Validator {
  /**
   * Checks whether or not children elements in a react component are
   * expected type.
   * @param {*} children
   * @param {*} component
   */
  static validateChildren(children, component, errorMessage) {
    const isValid = React.Children.toArray(children).every((child) => {
      React.isValidElement(child) && child.type === component;
    });

    if (!isValid) {
      throw new Error(errorMessage);
    }
  }
}
