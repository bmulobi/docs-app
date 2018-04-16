module.exports = {
    "extends": "airbnb",
    "env": {
      "es6": true,
      "browser": true,
      "node": true,
      "mocha": true
    },
    "rules": {
      "react/prefer-stateless-function": 0,
      "react/jsx-filename-extension": 0,
      "react/forbid-prop-types": [1, {"forbid": ["any"]}],
      "jsx-a11y/anchor-is-valid": 0
    }

};