/**
* @description parse form element and constructs an field:value object
 */
function formToObject(form) {
  return Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
    {},
  );
}

export {formToObject};
