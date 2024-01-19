const compress = (a, b = true) => {
  if (typeof a !== 'string' && !(a instanceof String)) {
    throw new Error('InvalidType');
  }

  if (b) {
    let result = '';
    let count = 1;

    for (let i = 0; i < a.length; i++) {
      if (a[i] === a[i + 1]) {
        count++;
      } else {
        result += a[i] + count;
        count = 1;
      }
    }

    return result;
  } else {
    let result = '';
    let i = 0;

    while (i < a.length) {
      const char = a[i];
      i++;

      let count = '';
      while (i < a.length && /\d/.test(a[i])) {
        count += a[i];
        i++;
      }

      count = count === '' ? 1 : parseInt(count, 10);
      result += char.repeat(count);
    }

    return result;
  }
};

module.exports = compress;
