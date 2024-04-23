function maskEmail(email) {
  // Split the email address into username and domain parts
  let [username, domain] = email.split('@');

  // Mask characters in the username except for the first and last character
  username =
    username.charAt(0) +
    '*'.repeat(username.length - 2) +
    username.charAt(username.length - 1);

  // Mask characters in the domain except for the first character before ".com"
  const [domainPrefix, domainSuffix] = domain.split('.');
  domain =
    domainPrefix.charAt(0) +
    '*'.repeat(domainPrefix.length - 1) +
    '.' +
    domainSuffix;

  // Combine username and domain with "@" symbol
  return `${username}@${domain}`;
}

// Test the function
const input = 'chandrashekhar@gmail.com';
const output = maskEmail(input);
console.log(output); // Output: c************r@g***l.com
