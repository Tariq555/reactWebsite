module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy', // Use identity-obj-proxy as a mapper for CSS files
    },
  };
  