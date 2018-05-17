const lang = {
    en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./ "
};

let rows = {

};

const htmlTemplate = ' <div>\
<% row.forEach(item => { %>\
 <button> <%- item %> </button>\
<% }); %>\
</div>';
const parentSelector = document.querySelector("#enkeyboard-container");


function cutKeyboard(languege) {
    const languegeArray = languege.split('');
    rows.top = languegeArray.slice(0, languegeArray.indexOf("a"));
    rows.middle = languegeArray.slice(languegeArray.indexOf("a"), languegeArray.indexOf("z"));
    rows.button = languegeArray.slice(languegeArray.indexOf("z"), languegeArray.indexOf(" "));
    rows.space = languegeArray.slice(languegeArray.indexOf(" "));

}

cutKeyboard(lang.en);


function renderRow(htmlcode, row, parent) {

    this.htmlcode = htmlcode;
    this.row = row;
    const rowTemplate = _.template(htmlcode)
    const buttonRow = rowTemplate(this.row)

    this.parent = parent
    parent.innerHTML += buttonRow;

}

for (let key in rows) {

    renderRow(htmlTemplate, rows[key], parentSelector);
}


console.log(parentSelector)