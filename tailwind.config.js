const { withMaterialColors } = require('tailwind-material-colors');

const config = {
  // Here, your tailwind config.
};

module.exports = withMaterialColors(config, {
  // Here, your base colors as HEX values
  // primary is required
  primary: '#8bc34a',
  // secondary and/or tertiary are optional, if not set they will be derived from the primary color
  //secondary: '#8a9579',
  //tertiary: '#6b9996',
  // shades
  primary95: '#d2ff9d',
  // extra named colors may also be included
  green: '#00ff00',
  blue: '#0000ff'
});