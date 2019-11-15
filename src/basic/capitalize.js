/*
     입력된 문장의 각 단어의 첫 번째 단어를 대문자로 만들어주는 것
     eg)
        capitalize('a lazy boy') => A Lazy Boy
        capitalize('you can better than that') => You Can Better Than That
        capitalize('wow, you good') => Wow, You Good
 */

const capitalize = (sentence) => {
    return sentence
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')
};

export default capitalize;