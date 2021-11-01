function printFormData(formData) {
  for (let field of formData.entries()) {
    console.log(field);
  }
}

/**
 * @description logs while NODE_ENV === 'development'
 * @param {string} message - logged to console.
 */
function devLog(message = "Specify log message") {
  if (import.meta.env.DEV) {
    console.log(message);
  }
}

/**
 * @description logs current file loaded while NODE_ENV === 'development'
 * @param {string} optional file purpose description. logged to console.
 */
function devLogEntryLoaded(filePurpose = "Entry") {
    devLog(`${filePurpose} loaded: __dirname/__filename`);
}

// export { printFormData };
export { printFormData, devLogEntryLoaded, devLog };
