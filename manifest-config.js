const { theme } = require('./tailwind.config');

module.exports = {
  name: `THF Radio`,
  short_name: `THF Radio`,
  start_url: `/`,
  background_color: theme.colors.white,
  theme_color: theme.colors.pink[`500`],
  display: `minimal-ui`,
  icon: `${__dirname}/src/images/icon_square.png`,
  date_format: `DD.MM.YYYY`,
};
