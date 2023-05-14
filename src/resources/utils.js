import React from "react";

// region Join function
/**
 * Joins the given elements by the given separator.
 *
 * @param elements
 *     The elements to join
 * @param separator
 *     The separator
 *
 * @returns {*} The joined elements
 */
export const join = (elements, separator) => {
  let i = 0;

  return (
    elements.reduce((prev, next) => {
      return prev === null ? [ next ] : [ ...prev, React.cloneElement(separator, { key: i++ }), next ];
    }, null)
  );
};
// endregion
