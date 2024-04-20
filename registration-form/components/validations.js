// Function to check if the email address is in the appropriate format
export const isValidInstituteName = (name) => {
    // Regular expression to match allowed characters
    //can be applied to to permanent address , street/locality
    const nameRegex = /^[a-zA-Z0-9,\-\(\) ]*$/;
    return nameRegex.test(name);
};

export const isCommonString = (name) => {
    // Regular expression to match allowed characters
    //can be applied to to permanent address , street/locality
    const nameRegex = /^[a-zA-Z0-9,\-\(\) ]*$/;
    return nameRegex.test(name);
};

export const isValidEmailFormat = (email) => {
    // Regular expression to check if the email is in a valid format
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/;
    return emailRegex.test(email);
};

export const isValidPhoneNumber = (phoneNumber) => {
    // Regular expression to match exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
};

export const isAlphanumeric = (registrationNumber) => {
    // Regular expression to match alphanumeric characters
    //can be applied to registration number
    const registrationRegex = /^[a-zA-Z0-9\ ]+$/;
    return registrationRegex.test(registrationNumber);
}

export const isAlphabet = (registrationNumber) => {
    // Regular expression to match alphanumeric characters
    const registrationRegex = /^[a-zA-Z ]+$/;
    return registrationRegex.test(registrationNumber);
}

export const isValidFloatInRange = (value) => {
    //argument value should not be string
    value = parseFloat(value);
    return typeof value === 'number' && !isNaN(value) && value >= 0 && value <= 100;
};

export const isValidGrade = (value) => {
    const regex = /^[a-zA-Z0-9+\-]+$/;
    return regex.test(value);
}

export const isNumeric = (value) => {
    // Regular expression to match only digits
    const numericRegex = /^\d+$/;
    return numericRegex.test(value);
};

export const isValidIFSC = (ifscCode) => {
    // Regular expression to match IFSC code format
    const ifscRegex = /^[A-Z]{4}[0][\d]{6}$/;

    // Check if the provided code matches the format
    return ifscRegex.test(ifscCode);
};

export const isValidAddress = (address) => {
    // Regular expression to match allowed characters
    //can be applied to to permanent address , street/locality
    const addressRegex = /^[a-zA-Z0-9,\.\-\(\)\[\] ]*$/;
    return addressRegex.test(address);
};

export const isValidBloodGroup = (bg) => {
    const regex = /^(A|B|AB|O)[+-]$/;
    return regex.test(bg);
}

// Function to validate a pin code
export const isValidPincode = (pincode) => {
    // Regular expression to match Indian pin code format (6 digits)
    const pincodeRegex = /^\d{6}$/;
    return pincodeRegex.test(pincode);
};

export const isValidABC_ID = (abcID) => {
    const pincodeRegex = /^\d{12}$/;
    return pincodeRegex.test(abcID);
};


// Function to validate a year
export const isYear = (year) => {
    // Check if the year is a valid 4-digit number
    if (!/^\d{4}$/.test(year)) {
        return false;
    }
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Convert the input year to a number
    const numericYear = parseInt(year, 10);
    // Check if the input year is not more than the current year
    return numericYear <= currentYear;
};

// Example usage:
// export const email1 = "DJSI fh";
// export const email2 = "45465, asfru";

// // Perform validation
// export const isEmail1Valid = isAlphabet(email1);
// export const isEmail2Valid = isValidAddress(email2);

// console.log("Is email 1 valid?", isEmail1Valid);
// console.log("Is email 2 valid?", isEmail2Valid);
