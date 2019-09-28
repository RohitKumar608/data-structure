const getVowels = str => {
  let vowels = "aeiou";
  return str
    .split("")
    .reduce(
      (result, char) =>
        vowels.includes(char)
          ? result.includes(char)
            ? result
            : result + char
          : result,
      ""
    );
};

console.log(getVowels("drinking is not goof for health"));
