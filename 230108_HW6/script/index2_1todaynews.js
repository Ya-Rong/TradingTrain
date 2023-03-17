update_El_a_Img = (targetClass, targetData) => {
    const target_aElement = document.getElementsByClassName(targetClass);
    const target_imgElement = target_aElement[0];
    console.log(target_imgElement)
    target_imgElement.src = targetData.src;
}

update_El_a_text = (targetClass, targetData) => {
    const targetEl = document.getElementsByClassName(targetClass);
    targetEl[0].innerHTML = targetData.text;
    targetEl[0].href = targetData.text_href;
}

// leftnews_img
const leftnews_img_Data = {
    src: './data/img/maxresdefault.jpg',
}
// list-news_center_img
const center_img_Data = {
    src: './data/img/snoopy_space.jpg',
    text: 'bla bla bla bla bla bla bla bla bla bla bla bla bla',
    href: "https://youtu.be/dQw4w9WgXcQ",
}
// lastnews_img
const lastnews_img_Data = {
    src: './data/img/snoopy_hello.jpg',
    text: 'bla bla bla bla bla bla bla bla bla bla bla bla bla',
    href: "https://youtu.be/dQw4w9WgXcQ",
}
// author01
const author01_img_Data = {
    src: './data/img/brown.jpg',
    text: 'bla bla bla bla bla bla bla bla bla bla bla bla bla',
    href: "https://youtu.be/dQw4w9WgXcQ",
}
// graphic_img
const graphic_img_Data = {
    src: './data/img/graphic.jpg',
    text: 'bla bla bla bla bla bla bla bla bla bla bla bla bla',
    href: "https://youtu.be/dQw4w9WgXcQ",
}
// news_img
const news_img_Data = {
    src: './data/img/news.jpg',
    text: 'bla bla bla bla bla bla bla bla bla bla bla bla bla',
    href: "https://youtu.be/dQw4w9WgXcQ",
}
// international_img


// leftnews_img
update_El_a_Img('firstnews_img',leftnews_img_Data);   
// midnews_img
update_El_a_Img('centernews_img',center_img_Data);
update_El_a_Img('lastnews_img',lastnews_img_Data);
// rightnews_img
update_El_a_Img('author01',author01_img_Data);
// graphic_img
update_El_a_Img('graphic_img',graphic_img_Data);
// news_img
update_El_a_Img('news_img',news_img_Data);

// leftnews_text
const leftnews_text_Data = [{
    text: '123 bla bla bla bla bla bla bla bla bla bla bla bla bla',
    href: "https://youtu.be/dQw4w9WgXcQ",
},{
    text: '231 bla bla bla bla bla bla bla bla bla bla bla bla bla',
    href: "https://youtu.be/dQw4w9WgXcQ",
},{
    text: '321 bla bla bla bla bla bla bla bla bla bla bla bla bla',
    href: "https://youtu.be/dQw4w9WgXcQ",
},{
    text: '312 bla bla bla bla bla bla bla bla bla bla bla bla bla',
    href: "https://youtu.be/dQw4w9WgXcQ",
}];

update_El_a_text = ('story-list_title', leftnews_text_Data);

// const target_aElement = document.getElementsByClassName('story-list_title');
// target_aElement[0].children[0].innerHTML=leftnews_text_Data[0].text;
// target_aElement[1].children[0].innerHTML=leftnews_text_Data[1].text;
// target_aElement[2].children[0].innerHTML=leftnews_text_Data[2].text;
// target_aElement[3].children[0].innerHTML=leftnews_text_Data[3].text;

// update_El_a_text = ('story-list_title', leftnews_text_Data)
