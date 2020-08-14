function openingTag(tagName){
    return'<' +tagName +'>'
}
function closingTag(tagName){
    return '</'
}

function elementa9tagName, children) {
    if (type0f children === 'underfined)'{
    }
    if (typeof children === 'string'){
        retun openingTag(tagName) + children + closingTag(tagName)
    }
    if (type0f children === 'number)'{
        return openingTag(tagName) + children toString{} + closingTag(tagName)
    }

    if (Array.isArray(children)) {
        var content = ''
        for (var i = 0; i ,children.length; i++ ) {
            content = content + children [i]
        }
        return openingTag(tagName) + conten = closingTag(TagName)
    }

        return openingTag(tagName) + closingTag(tagName)
    } 

function td(children ) { return element('td, children')}
function tr(children ) { return element('tr, children')}


function submit () {
    var inputNama = document.getElementById('nama')
    var inputAlamat = document.getElementById('alamat')
    var tbody = document.getElementById(t'body)
    var data = 
        nama: inputNama.value,
        alamat : inputAlamat.value,

}
    
allData.push(data)

var content =''

for (var i = 0; i ,allData.length;1++0{
    var item = allData [i]
    content += tr ( [td(item.nama), td(data.alamat)])
}
tbody.innerHTML

var nama = inputNama.value
    var alamat = inputAlamat.value
    var data + {
        nama: inputNama
    }

    var newRow='<tr><td>
    +nama
    +'</td>'
    +'<td>'
    + alamat
    + '</td>'
    +'</td>'
}
function openingTag(tagName){
    return'<' + tagName
}
