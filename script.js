const id_vk = '512190527'
const id_file = '457258731'

function b(id_vk, id_file, hash){
fetch("https://vk.com/al_page.php?act=save_owner_avatar_select", {
    "headers": {
        "cookie": document.cookie,
        "accept": "*/*",
        "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-ua": "\"Chromium\";v=\"94\", \" Not A;Brand\";v=\"99\", \"Opera\";v=\"80\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://vk.com/id"+id_vk+"?z=photo"+id_vk+"_"+id_file+"/photos"+id_vk,
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "act=save_owner_avatar_select&al=1&hash="+hash+"&list=photos"+id_vk+"&oid="+id_vk+"&photo_raw="+id_vk+"_"+id_file+"&skip_post=1",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
});}

function a(id_vk, id_file) {
    const hash = fetch("https://vk.com/al_page.php?act=owner_avatar_select", {
        "headers": {
            "cookie": document.cookie,
            "accept": "*/*",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua": "\"Chromium\";v=\"94\", \" Not A;Brand\";v=\"99\", \"Opera\";v=\"80\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://vk.com/id"+id_vk+"?z=photo"+id_vk+"_"+id_file+"/photos"+id_vk,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "act=owner_avatar_select&al=1&list=photos"+id_vk+"&photo="+id_vk+"_"+id_file,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(response=>response.json()).then(data=>{ b(id_vk, id_file, data.payload[1][0].hash); });
}

alert("Начинаем? " + id_vk +' '+ id_file)
a(id_vk, id_file)

