let json = [];

let copyToClipboard = (str) => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

for (let i = 1; i <= 10; i++) {
    let title = document.getElementById(`mtq_question_text-${i}-1`);

    let options = [];
    for (let j = 1; j <= 4; j++) {
        let option = document.getElementById(`mtq_answer_text-${i}-${j}-1`);
        options.push(option.innerText);
    }

    json.push({
        id: i,
        title: title.innerText,
        options: options,
    });
}


copyToClipboard(JSON.stringify(json));
