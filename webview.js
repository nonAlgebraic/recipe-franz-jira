const path = require('path');

module.exports = Franz => {
  const getNotifications = () => {
    const notificationsGlobalItem = document.getElementById(
      'notificationsGlobalItem'
    );
    const directMessages = notificationsGlobalItem
      ? parseInt(notificationsGlobalItem.textContent, 10)
      : 0;

    Franz.setBadge(directMessages);
  };

  Franz.loop(getNotifications);

  // inject a single css file
  Franz.injectCSS(path.join(__dirname, 'style.css'));
};
