function sortSentence(s: string): string {
    const list = s.split(' ');
    let sentence = '';
    console.log(list);
    for (let i = 1; i <= list.length; i++) {
        const reg = new RegExp(i.toString());
        list.filter(word => {
            if (reg.test(word))
            sentence += word.slice(0, -1);
        });
        
        if (i < list.length) sentence += " ";
    }
    
    return sentence;
};