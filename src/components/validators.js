export const required = value => (value ? undefined : "Required");

export const isNumber = value => (!isNaN(value) ? undefined : "Must be a number");

export const nonEmpty = value => (value.trim() !== "" ? undefined : "Cannot be empty");

export const isTrimmed = value => (value.trim() === value ? undefined : "Cannot start or end with whitespace");

export const matches = field => (value, allValues) => (field in allValues && value.trim() === allValues[field].trim() ? undefined : "Does not match");
