export const articleToShow = (text) => {
  const vowels = ['a', 'i', 'o', 'u']; // no e because ignores 'email' as 'email' is preceded by 'valid'
  if (vowels.includes(text[0].toLowerCase()))
    return 'an';
    else if (['f', 'l'].includes(text[0].toLowerCase())) // removes article for 'first name' and 'last name'
      return ''
    else return 'a';
};